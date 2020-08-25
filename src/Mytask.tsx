import React from "react";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./mytask.scss";
import {mytasksRef} from "./firebase";
function Mytask(props: any) {
  const { mytask } = props;
  const updatemytask = () => {
    mytasksRef.child(mytask.id).set({...mytask,done:!mytask.done})
  }
  return (
    <div className="mytask">
      <Switch
        edge="end" checked={mytask.done} onChange={updatemytask}
        inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
      />
      <p>{mytask.task}</p>
      <IconButton aria-label="delete" onClick={e => mytasksRef.child(mytask.id).remove()}>
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default Mytask;
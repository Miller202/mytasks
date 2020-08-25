import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {mytasksRef} from "./firebase";
function MytasksForm() {
  const [value, setValue] = useState("");
  const createMytasks = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const item = {
      task: value,
      done: false,
    };
    mytasksRef.push(item);
    setValue("");
  };
  return (
    <form onSubmit={createMytasks}>
      <TextField
        style={{ width: "100%" }}
        id="outlined-basic"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Add Task"
        variant="outlined"
      />
    </form>
  );
}
export default MytasksForm;
import React, {useState, useEffect} from "react";
import Mytask from "./Mytask";
import Divider from "@material-ui/core/Divider";
import {mytasksRef} from "./firebase";
function MytaskList() {
  const [mytasks,setmytasks]  = useState<any>([]);
  useEffect(() => {
    mytasksRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          task: items[item].task,
          done: items[item].done
        });
      }
      setmytasks(newState)
    });
  },[])
  return (
    <>
      {mytasks.map((mytask: any, i: number) => (
        <React.Fragment key={mytask.id}>
          <Mytask  mytask={mytask} />
          {i<mytasks.length -1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  );
}
export default MytaskList;
import React from "react";
import "./list.css";
var data = {
  study: { 0: "javascript study", 1: "css study" }
};
function task(list_name, task_num) {
  let title = data[list_name][task_num];
  return (
    <div class="task_todo">
      <input type="checkbox" />
      <p>{title}</p>
    </div>
  );
}
export default function List(list_name, completed) {
  let tasks = [];
  for (let e in data[list_name]) tasks.push(task(list_name, e));

  return (
    <div>
      <h1>{list_name}</h1>
      {tasks}
    </div>
  );
}

const userinput = document.getElementById("taskinput");
const addtaskbtn = document.getElementById("addtask");
console.log(addtaskbtn);
const list = document.getElementById("tasklist");

addtaskbtn.addEventListener("click", function () {
  const taskadded = userinput.value.trim();
  if (taskadded !== "") {
    const li = document.createElement("li");
    const taskaddedspan = document.createElement("span");
    const deletebtn = document.createElement("button");

    taskaddedspan.innerText = taskadded;
    deletebtn.innerText = "Delete";

    li.appendChild(taskaddedspan);
    li.appendChild(deletebtn);

    deletebtn.addEventListener("click", function () {
      li.remove();
    });

    list.appendChild(li);

    userinput.value = "";
  }
});

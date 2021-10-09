"use strict";

const todos = [];
const comment = document.getElementById("comment");
const table = document.getElementById("table-contents");
const changetask = document.getElementsByName("change");

const addtable = () => {
    const todo = { task: comment.value, status: "作業中", deletion: "削除" };
    todos.push(todo);
    if (changetask[1].checked) {
        listdescription1();
    } else if (changetask[2].checked) {
        listdescription2();
    } else {
        listdescription();
    }
}

function listdescription() {
    table.innerHTML = "";
    todos.forEach(function (value, index) {
        const statusbtn = document.createElement("input");
        statusbtn.type = "button";
        statusbtn.value = value.status;

        const deletebtn = document.createElement("input");
        deletebtn.type = "button";
        deletebtn.value = value.deletion;

        let newRow = table.insertRow();
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(index);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(value.task);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newCell.appendChild(statusbtn);

        newCell = newRow.insertCell();
        newCell.appendChild(deletebtn);

        deletebtn.addEventListener("click", () => {
            todos.splice(index, 1);
            listdescription();
        });

        statusbtn.addEventListener("click", () => {
            if (value.status === "作業中") {
                todos[index].status = "完了";
                listdescription();
            } else {
                todos[index].status = "作業中";
                listdescription();
            }
        });
    });
    comment.value = "";
}

const listdescription1 = () => {
    table.innerHTML = "";
    todos.forEach(function (value, index) {
        const statusbtn = document.createElement("input");
        statusbtn.type = "button";
        statusbtn.value = value.status;

        const deletebtn = document.createElement("input");
        deletebtn.type = "button";
        deletebtn.value = value.deletion;

        if (statusbtn.value === "作業中") {

            let newRow = table.insertRow();
            let newCell = newRow.insertCell();
            let newText = document.createTextNode(index);
            newCell.appendChild(newText);

            newCell = newRow.insertCell();
            newText = document.createTextNode(value.task);
            newCell.appendChild(newText);

            newCell = newRow.insertCell();
            newCell.appendChild(statusbtn);

            newCell = newRow.insertCell();
            newCell.appendChild(deletebtn);

            deletebtn.addEventListener("click", () => {
                todos.splice(index, 1);
                listdescription();
            });

            statusbtn.addEventListener("click", () => {
                if (value.status === "作業中") {
                    todos[index].status = "完了";
                    listdescription();
                } else {
                    todos[index].status = "作業中";
                    listdescription();
                }
            });
        }
    });
    comment.value = "";
}

const listdescription2 = () => {
    table.innerHTML = "";
    todos.forEach(function (value, index) {
        const statusbtn = document.createElement("input");
        statusbtn.type = "button";
        statusbtn.value = value.status;

        const deletebtn = document.createElement("input");
        deletebtn.type = "button";
        deletebtn.value = value.deletion;

        if (statusbtn.value === "完了") {

            let newRow = table.insertRow();
            let newCell = newRow.insertCell();
            let newText = document.createTextNode(index);
            newCell.appendChild(newText);

            newCell = newRow.insertCell();
            newText = document.createTextNode(value.task);
            newCell.appendChild(newText);

            newCell = newRow.insertCell();
            newCell.appendChild(statusbtn);

            newCell = newRow.insertCell();
            newCell.appendChild(deletebtn);

            deletebtn.addEventListener("click", () => {
                todos.splice(index, 1);
                listdescription();
            });

            statusbtn.addEventListener("click", () => {
                if (value.status === "作業中") {
                    todos[index].status = "完了";
                    listdescription();
                } else {
                    todos[index].status = "作業中";
                    listdescription();
                }
            });
        }
    });
    comment.value = "";
}

changetask[1].addEventListener("click", () => {
    listdescription1();
});

changetask[2].addEventListener("click", () => {
    listdescription2();
});

changetask[0].addEventListener("click", () => {
    listdescription();
});
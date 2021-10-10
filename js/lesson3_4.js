"use strict";

const todos = [];
const comment = document.getElementById("comment");
const table = document.getElementById("table-contents");
const changetask = document.getElementsByName("change");

const radioall = document.getElementById("radio-all");
const radioworking = document.getElementById("radio-working");
const radiofinish = document.getElementById("radio-finish");

const addtable = () => {
    const todo = { task: comment.value, status: "作業中", deletion: "削除" };
    todos.push(todo);
    listdescription(todos);
}

function listdescription(arr) {
    table.innerHTML = "";
    arr.forEach(function (value, index) {
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
            listdescription(arr);
        });

        statusbtn.addEventListener("click", () => {
            if (value.status === "作業中") {
                todos[index].status = "完了";
                listdescription(arr);
            } else {
                todos[index].status = "作業中";
                listdescription(arr);
            }
        });
    });
    comment.value = "";
}

const filtertodos = () => {
    if (radioall.checked) {
        return listdescription(todos);
    } else if (radioworking.checked) {
        const workingtodos = todos.filter(function (value) {
            return value.status === "作業中"
        })
        return listdescription(workingtodos);
    } else if (radiofinish.checked) {
        const finishtodos = todos.filter(function (value) {
            return value.status === "完了"
        })
        return listdescription(finishtodos);
    }
};

changetask.forEach(function (value,index) {
        changetask[index].addEventListener("click", () => {
            filtertodos();
        });
    });
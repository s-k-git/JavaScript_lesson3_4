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
    listdescription();
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

        if (value.status === "作業中") {
            newRow.classList.add("working");
        } else {
            newRow.classList.add("finished");
        }

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
    sort();
}

changetask.forEach(function(value,index){
    changetask[index].addEventListener("click", () => {
        sort();
    });
});

    const sort = () => {
        const finished = document.getElementsByClassName("finished");
        const working = document.getElementsByClassName("working");
        if (changetask[1].checked) {
            for (let i = 0; i < finished.length; i++) {
                finished[i].style.display = "none";
            };
            for (let j = 0; j < working.length; j++) {
                working[j].style.display = "table-row";
            };
        } else if (changetask[2].checked) {
            for (let j = 0; j < working.length; j++) {
                working[j].style.display = "none";
            };
            for (let i = 0; i < finished.length; i++) {
                finished[i].style.display = "table-row";
            };
        } else {
            for (let j = 0; j < working.length; j++) {
                working[j].style.display = "table-row";
            };
            for (let i = 0; i < finished.length; i++) {
                finished[i].style.display = "table-row";
            };
        }
    } 
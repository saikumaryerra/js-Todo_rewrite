var dataSet = [];

document.getElementById('bottom-bar').setAttribute('class', 'hide');

document.getElementById('checklist').addEventListener('keypress', function(event) {
    var temp = document.getElementById('checklist').value;
    var inputData = String(temp);
    inputData = inputData.trim();
    if (event.keyCode == 13 && inputData !== "") {
        addToData(inputData);
    }

});
//add to data layer
function addToData(x) {
    var temp = {
        todoText: x,
        status:"uncheck"
    }
    dataSet.push(temp);
    domRefresh();
}
//remove from data layer
function deleteFromData() {
    var temp = event.target.parentElement.id;
    temp=forId(temp);
    dataSet.splice(temp,1);
    domRefresh();
}
//to get array index from selector
function forId(x){
    x=x.substring(6);
    return x;
}
//to strike
function check() {
    var temp=forId(event.target.parentElement.id);
    if (event.target.checked) {
        dataSet[temp].status="check";
    } else {
        dataSet[temp].status="";        
    }
    domRefresh();
}
//to clear all
function clearItems() {
    dataSet=[];
    domRefresh();
}
//to clear completed
function clearCompleted() {

    
    // var a = document.querySelectorAll('.check');
    // for (var i = a.length - 1; i >= 0; i--) {
    //     a[i].parentElement.remove();
    // }
    // var a = document.querySelectorAll('.uncheck');
    // for (var i = a.length - 1; i >= 0; i--) {
    //     a[i].parentElement.classList.remove('hide');
    // }
}
//DOM
function domRefresh() {

    document.querySelector('#todo-list').innerHTML = "";
    var totalElements = dataSet.length;
    var checkedElements=0;
    var activeElements;
    for (var i = dataSet.length - 1; i >= 0; i--) {
        var id="todoID"+i;
        var mainSection = document.createElement('div');
        mainSection.setAttribute('draggable', 'true');
        mainSection.setAttribute('id', id);

        var listHead = document.createElement('input');
        listHead.setAttribute('type', 'checkbox');
        listHead.setAttribute('onclick', 'check()')
        if(dataSet[i].status=='check'){
            listHead.checked = true;
            checkedElements++;
        }

        var label = document.createElement('label');
        var labelContent = document.createTextNode(dataSet[i].todoText);
        label.setAttribute('class', dataSet[i].status);
        label.appendChild(labelContent);

        var crossMark = document.createElement('span');
        crossMark.setAttribute('onclick', 'deleteFromData()')
        crossMark.innerHTML = "&#10005;";


        mainSection.appendChild(listHead);
        mainSection.appendChild(label);
        mainSection.appendChild(crossMark);

        var todoList = document.getElementById('todo-list');
        todoList.appendChild(mainSection);
        document.getElementById('checklist').value = "";
    }

    if (totalElements > 0) {
        document.getElementById('bottom-bar').classList.remove('hide');
    }
    //to display no'of active elements
    activeElements = totalElements - checkedElements;
    document.getElementById('items-count').innerHTML = activeElements + " items left";

}









































// //to displayall
// function displayAll() {
//     var a = document.querySelector('#todo-list').querySelectorAll('.hide');
//     for (var i = a.length - 1; i >= 0; i--) {
//         // a[i].parentElement.setAttribute('class','hide');
//         a[i].classList.toggle('hide');
//     }
// }

// // to display active elements
// function displayActive() {
//     var a = document.querySelectorAll('.check');
//     for (var i = a.length - 1; i >= 0; i--) {
//         a[i].parentElement.setAttribute('class', 'hide');
//     }
//     var a = document.querySelectorAll('.uncheck');
//     for (var i = a.length - 1; i >= 0; i--) {
//         a[i].parentElement.classList.remove('hide');
//     }

// }

// // to display completed
// function displayCompleted() {
//     var a = document.querySelectorAll('.uncheck');
//     for (var i = a.length - 1; i >= 0; i--) {
//         a[i].parentElement.setAttribute('class', 'hide');
//     }
//     var a = document.querySelectorAll('.check');
//     for (var i = a.length - 1; i >= 0; i--) {
//         a[i].parentElement.classList.remove('hide');
//     }
// }

// //to clear all
// 



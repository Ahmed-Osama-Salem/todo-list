var userName = prompt("What's your name?");
var currentName = document.querySelector("span");
var backgroundSection = document.querySelector(".sec1");

var result = editUserName(userName);

function editUserName(name) {
  var fristCharUp = name.charAt(0).toUpperCase()
  currentName.style.color = "yellow";
  return currentName.innerHTML = fristCharUp + name.slice(1, name.length);
}

let setTaskOne = document.getElementById("textinput");
let getTaskOne = document.querySelector("h3");
let block = document.querySelector(".check");
let btnClick = document.getElementById("addbtn");
let btnClear = document.getElementById("btnclear");
let filterTasks = document.getElementById("filter-input");
let scrollUp = document.getElementById("upscroll");
let showButton = document.getElementById("showbtn");
let backgroundBtn = document.getElementById('changeback');

//array for save all data inside the object
let tasksList;
if (localStorage.Tasks != null) {
  tasksList = JSON.parse(localStorage.Tasks);
} else {
  tasksList = [];
}
//the main function
//When click button take any string value inside the input tag
//and save it inside object
btnClick.onclick = getData;

function getData() {
  setTaskOne.onkeyup = function() {
    return setTaskOne.value;
  }
  let newTask = {
    nameOfTask: setTaskOne.value,
  }
  tasksList.push(newTask);
  localStorage.setItem("Tasks", JSON.stringify(tasksList));
  console.log(tasksList);
  clearTasksInputs();
  showTasksInputs();
  setTaskOne.focus();
}

//Clear all text input after click button
function clearTasksInputs() {
  setTaskOne.value = '';
};

//clear all data in localStorage
btnClear.onclick = clearLocalData;

function clearLocalData() {
  localStorage.clear();
  tasksList.splice(0);
  showTasksInputs();
}


//Show all inputs inside tasks list
function showTasksInputs() {
  let table = '';
  for (let i = 0; i < tasksList.length; i++) {
    table += `<li class="check">${tasksList[i].nameOfTask}<i class="fa-solid fa-circle-xmark" onclick="clearOneData(${i})"></i></li>`
  }

  document.getElementById('ulli').innerHTML = table;
  if (tasksList.length > 0) {
    btnClear.style.visibility = 'visible';
  } else {
    btnClear.style.visibility = 'hidden';
  }
};

//Clear one data or one task list item
//function that take prameter from me called "i" to delete the selected array
function clearOneData(i) {
  tasksList.splice(i, 1);
  //delete from array only
  localStorage.Tasks = JSON.stringify(tasksList);
  //return the new array to localStorage after the delete items
  showTasksInputs();
  //must put show data function to show me the deleting iteams when i click on delete button
}

//filter my tasks
function filterMyTasks(value){
  let table = '';
for(let i = 0; i < tasksList.length;i++){
  if(tasksList[i].nameOfTask.includes(value)){
    table += `<li class="check">${tasksList[i].nameOfTask}<i class="fa-solid fa-circle-xmark" onclick="clearOneData(${i})"></i></li>`
  }
}
document.getElementById('ulli').innerHTML = table;
}

//Scroll up function
window.onscroll = function(){
  if(scrollY >= 22){
    scrollUp.style.visibility = 'visible';
  }else{
    scrollUp.style.visibility = 'hidden';
  }
}
//function the scroll up button to get up on click
scrollUp.onclick = function(){
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth"
  })
}

//function show me all previruos tasks
showButton.onclick = previruosTasks;
function previruosTasks(){
  let table = '';
  for (let i = 0; i < tasksList.length; i++) {
    table += `<li class="check">${tasksList[i].nameOfTask}<i class="fa-solid fa-circle-xmark" onclick="clearOneData(${i})"></i></li>`
  }

  document.getElementById('ulli').innerHTML = table;
}

//change images
backgroundBtn.onclick = changeImagesByClick;
function changeImagesByClick() {
  let setImages = document.querySelector('body');
  let imgArray = ['images/img1.jpg','images/img3.jpg','images/img4.jpg','images/img5.jpg'];
  let imgCount = imgArray.length;
  let imgRandomPosition = Math.floor(Math.random() * imgCount);
  let randomImageClick = imgArray[imgRandomPosition];
   setImages.style.backgroundImage = "url("+randomImageClick+")";
}

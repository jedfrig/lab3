imgs = [
  "./assets/1.jpg",
  "./assets/2.jpg",
  "./assets/3.jpg",
  "./assets/4.jpg",
  "./assets/5.jpg",
  "./assets/6.jpg",
  "./assets/7.jpg",
  "./assets/8.jpg",
  "./assets/9.jpg",
  "./assets/10.jpg",
];

let delay = prompt("Укажите задержку?", 500);
let currentIndex = 0;
setInterval(function () {
  document.getElementById("image").src = imgs[currentIndex];
  currentIndex++;
  if (currentIndex >= imgs.length) {
    currentIndex = 0;
  }
}, delay);

let now = new Date();
let time = now.getHours();
console.log(time);
let ReplaceBackground = function () {
  if (time >= 0 && time < 6) {
    document.body.style.backgroundColor = "red";
  } else if (time >= 6 && time < 12) {
    document.body.style.backgroundColor = "green";
  } else if (time >= 12 && time < 18) {
    document.body.style.backgroundColor = "yellow";
  } else if (time >= 18 && time < 0) {
    document.body.style.backgroundColor = "blue";
  }
};
document.addEventListener("DOMContentLoaded", ReplaceBackground);

let table = document.createElement("table");
document.body.append(table);
for (let i = 0; i < 10; i++) {
  let row_$i = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    let column_$j = document.createElement("td");
    row_$i.appendChild(column_$j);
    let input = document.createElement("input");
    column_$j.appendChild(input);
  }
  table.appendChild(row_$i);
}

let b = table.querySelectorAll("input");
b.forEach((element) => {
  element.setAttribute("type", "text");
  element.setAttribute("name", "tbl[]");
  element.setAttribute("value", "0");
});
let user = document.querySelector("#user");

//P1

let p1 = document.createElement("p");
let input_user_min = document.createElement("input");

user.appendChild(p1);
p1.appendChild(input_user_min);

let querySelectInput1 = p1.querySelector("input");
querySelectInput1.setAttribute("type", "text");
querySelectInput1.setAttribute("name", "min");
querySelectInput1.setAttribute("value", "0");

//P2

let p2 = document.createElement("p");
let input_user_max = document.createElement("input");

user.appendChild(p2);
p2.appendChild(input_user_max);

let querySelectInput2 = p2.querySelector("input");
querySelectInput2.setAttribute("type", "text");
querySelectInput2.setAttribute("name", "max");
querySelectInput2.setAttribute("value", "0");

//P3

let p3 = document.createElement("p");
let control_button = document.createElement("input");

user.appendChild(p3);
p3.appendChild(control_button);

let querySelectInput3 = p3.querySelector("input");
querySelectInput3.setAttribute("type", "button");
querySelectInput3.setAttribute("name", " ");
querySelectInput3.setAttribute("value", "Заполнить");
querySelectInput3.setAttribute("onclick", "autocomlete();");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function autocomlete() {
  let minimum_value = document.getElementsByName("min")[0].value;
  let maximum_value = document.getElementsByName("max")[0].value;
  let tdshky = document.getElementsByTagName("td");
  for (let i = 0; i < tdshky.length; i++) {
    let input = tdshky[i].getElementsByTagName("input")[0];
    input.value = getRandomInt(minimum_value, maximum_value);
  }
}

// let tdshky = document.getElementsByTagName("td");
// for (let i = 1; i < tdshky.length+1; i += 1) {
//   if (i % 10== 0 && i != 0) {
//     input.style.backgroundColor = "white";
//   }
//   let input = tdshky[i].getElementsByTagName("input")[0];
//   input.style.backgroundColor = "grey";
// }
// console.log(tdshky);

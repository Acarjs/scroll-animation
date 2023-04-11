// const boxes = document.querySelectorAll(".box");

// window.addEventListener("scroll", checkedBoxes);

// checkedBoxes();

// function checkedBoxes() {
//   const see = window.innerHeight * 0.8;

//   boxes.forEach(function (box) {
//     const triggerPoint = box.getBoundingClientRect().top;
//     console.log(triggerPoint);

//     if (see > triggerPoint) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }

// const boxes = document.querySelectorAll(".box");
// window.addEventListener("scroll", animation);

// animation();

// function animation() {
//   const screenHeight = window.innerHeight * 0.8;
//   boxes.forEach(function (box) {
//     const boxHeight = box.getBoundingClientRect().top;

//     if (screenHeight > boxHeight) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }

const boxes = document.querySelectorAll(".box");
const box1 = document.getElementById("box-1");
window.addEventListener("scroll", function () {
  boxes.forEach(function (box) {
    if (window.innerHeight * 0.8 > box.getBoundingClientRect().top) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});

const deneme = box1.getBoundingClientRect();

console.log(deneme);

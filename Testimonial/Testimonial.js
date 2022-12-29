var data = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, a ipsum. Animi modi ducimus doloribus corrupti dolorum! Numquam natus quia sit incidunt, deserunt hic ex modi, rerum sequi reprehenderit officia.",
    rating: "⭐⭐⭐⭐",
    name: "john",
    img: "./image/download.jpeg",
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, a ipsum. Animi modi ducimus doloribus corrupti dolorum! Numquam natus quia sit incidunt, deserunt hic ex modi, rerum sequi reprehenderit officia.",
    rating: "⭐⭐⭐⭐",
    name: "johnHERE",
    img: "./image/ing1.webp",
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, a ipsum. Animi modi ducimus doloribus corrupti dolorum! Numquam natus quia sit incidunt, deserunt hic ex modi, rerum sequi reprehenderit officia.",
    rating: "⭐⭐",
    name: "Rowan",
    img: "./image/img5.jpeg",
  },
  {
    id: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, a ipsum. Animi modi ducimus doloribus corrupti dolorum!.",
    rating: "⭐⭐⭐",
    name: "Ezra",
    img: "./image/img3.webp",
  },
];

let i = 0;
//Total Slides
let j = data.length;
let testimonialContainer = document.getElementById("SlideContainer");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});



let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
  <img src=${data[i].img}>
    <p>${data[i].name}</p>
     <p>${data[i].rating}</p>
    <b>${data[i].description}</b>`;
};

window.onload = displayTestimonial;

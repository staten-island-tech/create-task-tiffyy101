import './style.css'

const DOM = {
  display: document.getElementById("display"),
  mainDiv: document.getElementById("main")
}
const menu = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";

function list() {
  menu.forEach((meal) => {
    DOM.mainDiv.insertAdjacentHTML
    ("beforeend",
    `
    <h2>${meal.strMeal}</h2>
    <img class="img" src=${meal.strMealThumb} alt=""/>
    `
    )
  });
}
menu
.forEach((meal) => list());
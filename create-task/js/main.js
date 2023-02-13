import '/styles/style.css'

const DOM = {
  display: document.getElementById("display"),
  mainDiv: document.getElementById("main")
}
const menu = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";

async function getData(menu) {
  try {
    const response = await fetch(menu);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();

function createList() {
  meals.data.forEach((meal) => {
    DOM.display.insertAdjacentHTML
    ("beforeend",
    `
    <h2>${meal.strMeal}</h2>
    <img class="img" src=${meal.strMealThumb} alt=""/>
    <button id="choose" class="choose">Tutorial</button>
    `
    )
  });
}
meals.data.forEach((meal) => createList(meal));

console.log(data);
    }  
  } catch (error) {
    console.log(error);
    console.log("can't find");
  }
}
getData(menu);
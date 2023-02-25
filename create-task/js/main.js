import '/styles/style.css'

const DOM = {
  display: document.getElementById("display"),
  mainDiv: document.getElementById("main"),
  tutorial: document.getElementById("choose"),
  desserts: document.getElementById("desserts")
}
const menu = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";

async function getData(menu) {
  try {
    const response = await fetch(menu);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);

function all() {
  data.meals.forEach((meal) => {
    DOM.display.insertAdjacentHTML
    ("beforeend",
    `
    <div class="card">
    <div class="child">
    <h2>${meal.strMeal}</h2>
    <img class="img" src=${meal.strMealThumb} alt=""/>
    <h3><a href="${meal.strYoutube}">Tutorial</a></h3>
     </div>
    </div>
    `
    );
  });
}
data.meals
.forEach((menu) => all(menu));
}  
  } catch (error) {
    console.log(error);
    console.log("can't find");
  }
}
getData(menu);

const desserts = DOM.desserts;
  desserts.addEventListener("click", function () {
    DOM.display.innerHTML = " ";
menu.meals
.filter((meals) => meals.strCategory === "Dessert")
  .forEach(meal => {
    DOM.mainDiv.insertAdjacentHTML
    ("beforeend",
    `
    <div class="card">
    <div class="child">
    <h2>${meal.strMeal}</h2>
    <img class="img" src=${meal.strMealThumb} alt=""/>
    <a href="${meal.strYoutube}">Tutorial</a>
     </div>
    </div>
    `
    );
  });
});

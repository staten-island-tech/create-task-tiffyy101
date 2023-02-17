import '/styles/style.css'

const DOM = {
  display: document.getElementById("display"),
  mainDiv: document.getElementById("main"),
  tutorial: document.getElementById("choose")
}
const menu = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";

async function getData(menu) {
  try {
    const response = await fetch(menu);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();

function all() {
  data.meals.forEach((meal) => {
    DOM.display.insertAdjacentHTML
    ("beforeend",
    `
    <div class="card">
    <div class="child">
    <h2>${meal.strMeal}</h2>
    <img class="img" src=${meal.strMealThumb} alt=""/>
/*     <video width="55vh" height="55vh"/>
    <source src="${meal.strYoutube}>
    </video> */
    <button id="choose" class="choose">Tutorial</button>
     </div>
    </div>
    `
    );
  });
}
data.meals
.forEach((menu) => all(menu));

function video() {
  data.filter((meals) => meals.strMeal.includes("C"))
  .forEach(meal => {
    DOM.display.insertAdjacentHTML
    ("beforeend",
    `
    <h2>${meal.strYoutube}</h2>
    `);
  });
}

console.log(data);
    }  
  } catch (error) {
    console.log(error);
    console.log("can't find");
  }
}
getData(menu);

DOM.tutorial.addEventListener("click", function () {
  video();
});
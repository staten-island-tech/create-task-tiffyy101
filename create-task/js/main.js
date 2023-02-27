import '/styles/style.css'
import {drinks} from "./drinks";
console.log("drinks");

const DOM = {
  display: document.getElementById("display"),
  gif: document.getElementById("gif"),
  tutorial: document.getElementById("choose"),
  all: document.getElementById("show"),
  theme: document.getElementById("color"),
  drink: document.getElementById("drink")
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
    DOM.gif.innerHTML=" ";
    DOM.display.innerHTML=" "
    DOM.display.insertAdjacentHTML
    ("afterbegin",
    `
    <div class="card">
    <div class="child">
    <h2>${meal.strMeal}</h2>
    <h3><a href="${meal.strYoutube}">Tutorial</a></h3>
    <img class="img" src=${meal.strMealThumb} alt=""/>
     </div>
    </div>
    `
    );
  });
}
DOM.all.addEventListener("click", function () {
  all();
});
    }
  } catch (error) {
    console.log(error);
    console.log("can't find");
  }
}
getData(menu);

function createDrinks() {
  DOM.gif.innerHTML=" ";
  DOM.display.innerHTML=" "
  drinks.forEach((drink) => {
    DOM.display.insertAdjacentHTML
    ("afterbegin",
    `
    <div class="card">
    <div class="child">
    <h2>${drink.name}</h2>
    <h3><a href="${drink.video}">Tutorial</a></h3>
    </div>
    </div>
    `
    );
  });
}

DOM.drink.addEventListener("click", function () {
  createDrinks();
});

DOM.theme.addEventListener("click", function () {
  if(document.body.classList.contains("warm")) {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
  } else if(document.body.classList.contains("cool")) {
      document.body.classList.add("fiery");
      document.body.classList.remove("cool");
      document.body.classList.remove("warm");
  } else if(document.body.classList.contains("fiery")){
      document.body.classList.add("green");
      document.body.classList.remove("fiery");
      document.body.classList.remove("cool");
      document.body.classList.remove("warm");
  } else if(document.body.classList.contains("green")){
      document.body.classList.add("summer");
      document.body.classList.remove("green");
      document.body.classList.remove("fiery");
      document.body.classList.remove("cool");
      document.body.classList.remove("warm");
  } else if(document.body.classList.contains("summer")){
      document.body.classList.add("spring");
      document.body.classList.remove("summer");
      document.body.classList.remove("green");
      document.body.classList.remove("fiery");
      document.body.classList.remove("cool");
      document.body.classList.remove("warm");
  } else {
      document.body.classList.add("warm");
      document.body.classList.remove("summer");
      document.body.classList.remove("green");
      document.body.classList.remove("fiery");
      document.body.classList.remove("cool");
      document.body.classList.remove("spring");
  }
});

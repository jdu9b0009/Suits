import products from "./products.json" assert { type: "json" };

//Change product

document.getElementById("ForMen").addEventListener("click", ShowMen);
document.getElementById("ForWomen").addEventListener("click", ShowWomen);
document.getElementById("ForKids").addEventListener("click", ShowKids);

function ShowMen() {
  document.querySelector("main").remove();
  document.querySelector("#content").append(document.createElement("main"));
  const men = document.querySelector("main");
  for (let i = 0; i < products.length; i++) {
    if (products[i].type == "Men") {
      const menproduct = document.createElement("div");

      menproduct.innerHTML =
        "<img src='images/" +
        products[i].image +
        "' ></br><h2>" +
        products[i].name +
        "</h2></br> <h4>$" +
        products[i].price +
        "</h4></br><button role='button' id='addToCart'>Add To Cart</button>";

      men.append(menproduct);
    }
  }
}

function ShowWomen() {
  document.querySelector("main").remove();
  document.querySelector("#content").append(document.createElement("main"));
  const women = document.querySelector("main");
  for (let i = 0; i < products.length; i++) {
    if (products[i].type == "Women") {
      const womenproduct = document.createElement("div");

      womenproduct.innerHTML =
        "<img src='images/" +
        products[i].image +
        "' ></br><h2>" +
        products[i].name +
        "</h2></br> <h4>$" +
        products[i].price +
        "</h4></br><button role='button' id='addToCart'>Add To Cart</button>";
      women.append(womenproduct);
    }
  }
}

function ShowKids() {
  document.querySelector("main").remove();
  document.querySelector("#content").append(document.createElement("main"));
  const kids = document.querySelector("main");
  for (let i = 0; i < products.length; i++) {
    if (products[i].type == "Kids") {
      const kidsproduct = document.createElement("div");

      kidsproduct.innerHTML =
        "<img src='images/" +
        products[i].image +
        "' ></br><h2>" +
        products[i].name +
        "</h2></br> <h4>$" +
        products[i].price +
        "</h4></br><button role='button' id='addToCart'>Add To Cart</button>";
      kids.append(kidsproduct);
    }
  }
}

ShowMen();

//AvtiveOnClick

let divs = document.querySelectorAll("nav ul li");
divs.forEach((e) => {
  e.addEventListener("click", () => {
    remove();
    e.classList.add("active");
  });
});
function remove() {
  divs.forEach((e) => {
    e.classList.remove("active");
  });
}

//Cart

// const cart = document.getElementById("cart");
// savedCart = [];

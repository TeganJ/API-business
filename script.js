const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.getElementById("cardsection");
//let para = document.createElement("p");

const business = fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;
    console.log(jsObject);

    for (let i = 0; i < business.length; i++) {
      // console.log(business[i].name);
      // You must include your javascript below to display the following information:
      // 1. business names, 2.business image,
      // 3. business locations, 4. business descriptions
      // Here is an example for the name to start you off.

      // Creates card and places business name in h2 element
      let card = document.createElement("section");
      card.className = "card";
      cards.appendChild(card);

      let imgbox = document.createElement("div");
      imgbox.classname = "imgbox";
      card.appendChild(imgbox);

      let img = document.createElement("img");
      img.src = business[i].imageurl;
      imgbox.appendChild(img);

      let h2 = document.createElement("h2");
      h2.textContent = business[i].name;
      card.appendChild(h2);

      let p = document.createElement("p");
      p.textContent = business[i].description;
      card.appendChild(p);

      let h3 = document.createElement("h3");
      h3.textContent = business[i].address;
      card.appendChild(h3);

      // Create the image location, you can look up how to add image using javascript

      // Include a business location

      // Include a business Description
    }
  });

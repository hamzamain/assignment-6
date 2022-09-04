const url = `https://openapi.programming-hero.com/api/news/categories`;
const loadCatagories = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCatagories(data.data.news_category));
};

const displayCatagories = (data) => {
  console.log(data);

  const catagoryContainer = document.getElementById("catagory-container");
  catagoryContainer.classList.add("catagoryContainer");

  data.forEach((catagory) => {
    console.log(catagory.category_id, catagory.category_name);

    const catagoryDiv = document.createElement("div");
    catagoryDiv.innerHTML = `
    <p>${catagory.category_name}</p>
    `;
    catagoryContainer.appendChild(catagoryDiv);
  });
};

loadCatagories();

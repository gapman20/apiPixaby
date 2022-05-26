function getImages(input,key) {
  
  const URL = "https://pixabay.com/api/?key="+key+"&q="+input;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => createCard(data));

  //console.log(URL);
}

function getKeyInput(){
    var input = document.getElementById("searchImg").value;
    const key = "27533620-bd97907d4b9fb621b8d6242b4";
    getImages(input,key);
    document.getElementById("searchImg").value = "";
    document.getElementsByClassName("cardImg")[0].innerHTML = "";
    document.getElementsByClassName("buttonPlace")[0].innerHTML = "";
    
}


function createCard(data) {
  console.log(data);
  
  for (let index = 0; index < 20; index++) {
    data.hits[index]
    
    console.log(data.hits[index]);
    var container = document.getElementsByClassName("cardImg")[0];
    var element = document.createElement("div");
    element.classList.add("card");
    element.innerHTML = `
  
      <div class="img">
      <img src="${data.hits[index].previewURL}" alt="">
      </div>
  
      `;
  
      container.appendChild(element);
  }
}


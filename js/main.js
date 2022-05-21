function getImages(input,key) {
  
  const URL = "https://pixabay.com/api/?key="+key+"&q="+input;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => createCard(data));

  //console.log(URL);
}

function render(){
    var input = document.getElementById("searchImg").value;
    const key = "27533620-bd97907d4b9fb621b8d6242b4";
    getImages(input,key);
}


function createCard(data) {
  console.log(data);
  var dataHits = data.hits;  
  console.log(data.hits);
  var container = document.getElementsByClassName("cardImg")[0];
  var element = document.createElement("div");
  element.classList.add("card");
  element.innerHTML = `

    <div class="img">
    <img src="${data.hits}" alt="">
    </div>

    `;

    container.appendChild(element);
}


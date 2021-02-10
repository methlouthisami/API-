
let searchQuery = '';
const SearchResultDiv = document.querySelector('.serach-result');
const search = document.querySelector('Form');
search.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchApi();
})
async function fetchApi() {
    const url = `https://randomuser.me/api/?results=10&q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    generateHTML(data.results);
    console.log(data);

}


function generateHTML(results) {
    let generatedHTML = '';
    results.map(result => {//on va mapper (loop)le resultat et pour chaque resultat on va créer html item 
        generatedHTML +=

            `
             <div class="item">
            
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
       <th scope="col">gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td> <h2 class="title">${result.name.first}</h2></td>
      <td>  <h2 class="title">${result.name.last}</h2></td>
      <td> <p class="item-data">${result.email}</p></td>
      <td> <h3 class="title2">${result.gender}</h3></td>
       <td> <h3 class="title2">${result.login}</h3></td>
    </tr>
    </table>
  
                 
                    
                 </div>
                
   `
    })
    SearchResultDiv.innerHTML = generatedHTML;
}


























































































/*let myInput = document.querySelector("user");
let getButton = document.querySelector("but");
let data = document.querySelector("div");

getButton.onclick = function () {
    semi();
}


function semi() {
    fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.results; i++) {
                text += data.results[i]; $(repo.name) + "<br>";
            }

            document.getElementById("map").innerHTML = text;

        })


}
 .catch (err => (console.log(err)))



*/
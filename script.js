let searchQuery = '';
const SearchResultDiv = document.querySelector('.serach-result');
const search = document.querySelector('Form');
search.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchApi();
})
function fetchApi() {
    const url = `https://randomuser.me/api/?results=10&q=${searchQuery}`;
    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data);
            generateHTML(data.results);

        })
    )


}


function generateHTML(results) {
    let generatedHTML = '';
    results.map(result => {
        generatedHTML +=




            `
                 


  <div class="card" style="width: 18rem;">
  <img src="${result.picture.large}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result.name.first}+${result.name.last}</h5>
    <p class="card-text">${result.email}</p>
     <p class="card-text">${result.gender}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                
   `
    })
    SearchResultDiv.innerHTML = generatedHTML;
}


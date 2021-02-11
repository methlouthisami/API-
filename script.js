let Input = '';
const Resultat = document.querySelector('.serach-result');
const Boutton = document.querySelector('Form');
Boutton.addEventListener('submit', (e) => {
    e.preventDefault();
    Input = e.target.querySelector('input').value;
    Users();
})
function Users() {
    fetch(`https://randomuser.me/api/?results=10&q=${Input}`).then((response) =>
        response.json()
            .then((data) => {
                console.log(data);
                afficheCard(data.results);

            })
    )


}


function afficheCard(results) {
    let codeHTML = '';
    results.map(result => {
        codeHTML +=

            `
  <div class="card" style="width: 18rem;">
  <img src="${result.picture.large}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result.name.first}  ${result.name.last}</h5>
    <p class="card-text">${result.email}</p>
     <p class="card-text">${result.gender}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                
   `
    })
    Resultat.innerHTML = codeHTML;
}


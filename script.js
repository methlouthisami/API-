let myInput = document.querySelector("user");
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





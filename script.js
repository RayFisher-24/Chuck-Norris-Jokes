

function joke(id) {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let joke = data.value;
            document.getElementById("mrJ").innerHTML = joke;
        })
        .catch("Sorry, I am Clown");
}
joke('j');


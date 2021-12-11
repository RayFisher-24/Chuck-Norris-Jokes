

function joke(id) {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var joke = data.value;
            console.log(joke);
        })
        .catch("Sorry, I am Clown");
}

joke('j');
const inputElement = document.querySelector("[data-input]");
const resultElement = document.querySelector("[data-results]");

inputElement.addEventListener("keyup", (event) => {

    const value = event.target.value;
    resultElement.innerHTML = "";

    fetch(`https://itunes.apple.com/search?term=${value}&entity=song`)

        .then((response) => {
            if (response.ok) {
                return response.json();
                alert('Please wait a moment!');
            } else {
                console.error("Error");
                alert('Something went wrong. Please try again!');
            };
        })

        .then((data) => {
            console.log(data);

            for (let i = 0; i < data.results.length; i++) {
                const result = data.results[i];
                console.log(result);

                const listItem = document.createElement("li");
                listItem.innerText = `Artist: ${result.artistName}, song: ${result.trackName}`;
                resultElement.appendChild(listItem);
            }
        })
        .catch((error) => {
            console.error(error);
            alert('Error!');
        });
});
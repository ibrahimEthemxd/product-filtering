const API_KEY = `cc6e79f27bccc1958d798b0035270409`;
const API_URL = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`;
const movieWrapper = document.querySelector(".movie-wrapper");

const getProducts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const takes = data.results;

    takes.forEach(take => {
        const newElement = document.createElement("div");
        newElement.classList.add("movie-item");

        const title = document.createElement("h1");
        title.classList.add("movie-title");
        title.textContent = take.name;

        const image = document.createElement("img");
        image.classList.add("movie-img");
        image.src = `https://image.tmdb.org/t/p/w500${take.profile_path}`;

        const description = document.createElement("p");
        description.classList.add("movie-description");
        description.textContent = take.known_for[0].overview;

        const date = document.createElement("p");
        date.classList.add("movie-date");
        date.textContent = take.known_for[0].release_date;

        newElement.appendChild(title);
        newElement.appendChild(image);
        newElement.appendChild(description);
        newElement.appendChild(date);

        movieWrapper.appendChild(newElement);
    });
}
getProducts();

const searchInput = document.getElementById("input");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const movieItems = document.querySelectorAll(".movie-item");

    movieItems.forEach(item => {
        const title = item.querySelector(".movie-title").textContent.toLowerCase();

        if (title.includes(searchTerm)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });
});
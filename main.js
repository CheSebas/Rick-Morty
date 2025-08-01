let currentPage = 1;
let allCharacters = [];

const fetchCharacters = async(page = 1) => {
    const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await res.json();
    allCharacters = data.results;
    renderCards(allCharacters);
    document.getElementById("prevBtn").disabled = !data.info.prev;
    document.getElementById("nextBtn").disabled = !data.info.next;
};

const renderCards = (characters) => {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    characters.forEach((char) => {
        const card = document.createElement("div");
        card.className =
            "bg-white text-black rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform";
        card.innerHTML = `
      <img src="${char.image}" alt="${char.name}" class="w-full h-56 object-cover" />
      <div class="p-4 space-y-1">
        <h2 class="text-xl font-bold text-green-700">${char.name}</h2>
        <p><strong>Estado:</strong> ${char.status}</p>
        <p><strong>Género:</strong> ${char.gender}</p>
        <p><strong>Especie:</strong> ${char.species}</p>
      </div>
    `;
        container.appendChild(card);
    });
};

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        fetchCharacters(currentPage);
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentPage++;
    fetchCharacters(currentPage);
});

const applyFilters = () => {
    const text = document.getElementById("searchInput").value.toLowerCase();
    const status = document.getElementById("filterStatus").value.toLowerCase();
    const gender = document.getElementById("filterGender").value.toLowerCase();
    const species = document.getElementById("filterSpecies").value.toLowerCase();

    const filtered = allCharacters.filter((char) => {
        const matchName = char.name.toLowerCase().includes(text);
        const matchStatus = !status || char.status.toLowerCase() === status;
        const matchGender = !gender || char.gender.toLowerCase() === gender;
        const matchSpecies = !species || char.species.toLowerCase().includes(species);

        return matchName && matchStatus && matchGender && matchSpecies;
    });

    renderCards(filtered);
};

document.getElementById("searchInput").addEventListener("input", applyFilters);
document
    .getElementById("filterStatus")
    .addEventListener("change", applyFilters);
document
    .getElementById("filterGender")
    .addEventListener("change", applyFilters);
document
    .getElementById("filterSpecies")
    .addEventListener("input", applyFilters);

// Hero rotación
window.addEventListener("DOMContentLoaded", () => {
    fetchCharacters();

    const images = [
        "https://i.pinimg.com/originals/6b/d8/2e/6bd82e272f3f35439634e546deb732eb.png",
        "https://external-preview.redd.it/S56GfES9JvoqfWRsKcDKcKQQvw8cukgPicMjV6QDGqE.jpg?width=1080&crop=smart&auto=webp&s=1ce89742171b0f345b6020ad10dd52d735079ae0",
        "https://images7.alphacoders.com/133/thumb-1920-1335145.jpg",
        "https://external-preview.redd.it/KC6_WNamrTLcZHHUnxqdLR42N1tS6dCo4WlxEigZYp0.jpg?auto=webp&s=3703caca971efba13a90cefd4181834354e325da",
        "https://images.wallpapersden.com/image/download/rick-and-morty-in-outer-space_bGdrbmuUmZqaraWkpJRmbmdlrWZlbWU.jpg",
    ];

    let current = 0;
    const imgElement = document.getElementById("hero-image");

    setInterval(() => {
        current = (current + 1) % images.length;
        imgElement.classList.add("opacity-0");
        setTimeout(() => {
            imgElement.src = images[current];
            imgElement.onload = () => imgElement.classList.remove("opacity-0");
        }, 500);
    }, 4000);
});

document.getElementById("toggleFilters").addEventListener("click", () => {
    const container = document.getElementById("filtersContainer");
    container.classList.toggle("hidden");
});
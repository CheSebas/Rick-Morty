window.addEventListener("DOMContentLoaded", () => {
  let images = [
    "https://i.pinimg.com/originals/6b/d8/2e/6bd82e272f3f35439634e546deb732eb.png",
    "https://external-preview.redd.it/S56GfES9JvoqfWRsKcDKcKQQvw8cukgPicMjV6QDGqE.jpg?width=1080&crop=smart&auto=webp&s=1ce89742171b0f345b6020ad10dd52d735079ae0",
    "https://images7.alphacoders.com/133/thumb-1920-1335145.jpg",
    "https://external-preview.redd.it/KC6_WNamrTLcZHHUnxqdLR42N1tS6dCo4WlxEigZYp0.jpg?auto=webp&s=3703caca971efba13a90cefd4181834354e325da",
    "https://images.wallpapersden.com/image/download/rick-and-morty-in-outer-space_bGdrbmuUmZqaraWkpJRmbmdlrWZlbWU.jpg",
  ];

  let current = 0;
  let imgElement = document.getElementById("hero-image");

  setInterval(() => {
    current = (current + 1) % images.length;

    imgElement.style.opacity = 0;

    imgElement.onload = () => {
      imgElement.style.opacity = 1;
    };

    imgElement.src = images[current];
  }, 4000);
});

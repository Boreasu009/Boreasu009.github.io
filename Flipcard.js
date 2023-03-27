const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach((flipCard) => {
  flipCard.addEventListener("mouseover", () => {
    const flipCardBack = flipCard.querySelector(".flip-card-back");
    flipCardBack.style.display = "block";
    flipCard.style.transform = "none";
  });
  
  flipCard.addEventListener("mouseout", () => {
    const flipCardBack = flipCard.querySelector(".flip-card-back");
    flipCardBack.style.display = "none";
    flipCard.style.transform = "rotateY(180deg)";
  });
});

function toggleDetails(card) {
  const details = card.querySelector(".project-details");
  const isVisible = details.style.display === "block";
  document
    .querySelectorAll(".project-details")
    .forEach((d) => (d.style.display = "none"));
  details.style.display = isVisible ? "none" : "block";
}

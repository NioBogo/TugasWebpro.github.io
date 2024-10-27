document.addEventListener("DOMContentLoaded", function () {
  const welcomeModal = document.getElementById("welcome-modal");
  const closeModalButton = document.getElementById("close-modal");

  welcomeModal.style.display = "flex";

  closeModalButton.addEventListener("click", () => {
    welcomeModal.style.display = "none";
  });

  // Profile data
  const profile = {
    nama: "Antonio Revanz P Ona Bogo",
    nim: "607022330116",
    class: "D3TK 47 04",
    background: "A passionate student of computer science.",
    photoUrl: "photo.jpg", // Replace with the actual path to the photo
  };

  document.getElementById("name").innerText = `Name: ${profile.name}`;
  document.getElementById("nim").innerText = `NIM: ${profile.nim}`;
  document.getElementById("class").innerText = `Class: ${profile.class}`;
  document.getElementById("background").innerText = profile.background;
  document.getElementById("profile-photo").src = profile.photoUrl;
});

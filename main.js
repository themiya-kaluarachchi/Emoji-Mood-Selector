const moods = [
  { emoji: "😊", name: "Happy", description: "You're feeling joyful and upbeat!" },
  { emoji: "😢", name: "Sad", description: "Feeling down? It's okay to be sad sometimes." },
  { emoji: "😡", name: "Angry", description: "Something is bothering you!" },
  { emoji: "🤩", name: "Excited", description: "You're full of energy and anticipation!" },
  { emoji: "😴", name: "Sleepy", description: "You might need a nap..." }
];

const emojiContainer = document.getElementById("emoji-container");
const descriptionDiv = document.getElementById("description-container");
const darkModeToggle = document.getElementById("darkModeToggle");

// Render emojis
const renderEmojis = () =>
{
  emojiContainer.innerHTML = "";
  moods.forEach(({ emoji, name, description }) =>
  {
    const span = document.createElement("span");
    span.textContent = emoji;
    span.classList.add("emoji");

    span.onclick = () => showMood({ emoji, name, description}, span);
    emojiContainer.appendChild(span);
  });
};

// Show selected mood info
const showMood = ({ emoji, name, description }, element) =>
{
  document.querySelectorAll(".emoji").forEach(el => el.classList.remove("selected"));
  element.classList.add("selected");

  // Bounce animation
  element.classList.add("bounce");
  setTimeout(() => element.classList.remove("bounce"), 500);

  descriptionDiv.innerHTML = `
    <strong>${name} ${emoji}</strong><br>${description}
  `;
  
};

// Toggle dark mode
darkModeToggle.addEventListener("click", () =>
{
  document.body.classList.toggle("dark-mode");
  
  // change emoji on button
  darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
});

descriptionDiv.innerHTML = "Select an emoji to see your mood!";

renderEmojis();
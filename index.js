const onToggle = () => {
  const toggleButton = document.getElementById("toggle-button");
  const home = document.getElementById("home");
  const sunIcon = document.getElementById("sun-icon-hidden");
  const moonIcon = document.getElementById("moon-icon");
  const toggleContainer = document.getElementById("toggle-container");

  if (toggleContainer.classList.contains("toggle-container-dark")) {
    toggleContainer.classList.remove("toggle-container-dark");
  } else {
    toggleContainer.classList.add("toggle-container-dark");
  }

  if (toggleButton.classList.contains("toggle-button-dark")) {
    toggleButton.classList.remove("toggle-button-dark");
  } else {
    toggleButton.classList.add("toggle-button-dark");
  }

  if (home.classList.contains("home-dark")) {
    home.classList.remove("home-dark");
  } else {
    home.classList.add("home-dark");
  }

  if (sunIcon.classList.contains("sun-icon-visible")) {
    sunIcon.classList.remove("sun-icon-visible");
  } else {
    sunIcon.classList.add("sun-icon-visible");
  }

  if (moonIcon.classList.contains("moon-icon-hidden")) {
    moonIcon.classList.remove("moon-icon-hidden");
  } else {
    moonIcon.classList.add("moon-icon-hidden");
  }
};

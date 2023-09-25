const backgroundElement = document.getElementById('background');

// Function to update the background position
function updateBackgroundPosition() {
  // Calculate new X and Y positions for the background
  const newX = Math.floor(Math.random() * window.innerWidth);
  const newY = Math.floor(Math.random() * window.innerHeight);

  // Apply the new background position
  backgroundElement.style.backgroundPosition = `${newX}px ${newY}px`;

  // Schedule the next animation frame
  requestAnimationFrame(updateBackgroundPosition);
}

// Start the animation
updateBackgroundPosition();
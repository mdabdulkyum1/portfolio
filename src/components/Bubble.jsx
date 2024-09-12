import React, { useEffect } from "react";
import '../../src/index.css';

const Bubble = ({ darkMode }) => {
  let bubbleContainer;

  useEffect(() => {
    if (darkMode) {
      // Create the bubble container and animation in dark mode
      bubbleContainer = document.createElement('div');
      bubbleContainer.classList.add('bubble-container');
      document.body.appendChild(bubbleContainer);

      const intervalId = setInterval(createBubble, 500); // Create bubbles every 500ms

      // Clean up when dark mode is off
      return () => {
        clearInterval(intervalId); // Stop bubble creation
        bubbleContainer.remove();  // Remove the bubble container
      };
    }
  }, [darkMode]);

  function getRandomColor() {
    const colors = [
      'rgba(32, 33, 52, 0.2)',
      'rgba(44, 46, 69, 0.2)',
      'rgba(48, 49, 77, 0.2)',
      'rgba(24, 25, 40, 0.2)',
      'rgba(30, 31, 55, 0.2)',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 50 + 20 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.top = Math.random() * 100 + 'vh';
    bubble.style.backgroundColor = getRandomColor();
    bubble.style.animationDuration = Math.random() * 5 + 5 + 's';
    bubbleContainer.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 10000);
  }

  return null;
};

export default Bubble;

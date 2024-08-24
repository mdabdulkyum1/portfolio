// ClickEffect.jsx
import { useEffect } from 'react';
import '../../src/index.css'; // Make sure to import your CSS file

const ClickEffect = () => {
  // Function to handle click events
  const handleClick = (event) => {
    // Create a new div element
    const clickEffect = document.createElement('div');
    clickEffect.className = 'clicks';

    // Position the div at the click location, accounting for scroll
    clickEffect.style.top = `${event.pageY - 25}px`; // Adjust for half of the div's height
    clickEffect.style.left = `${event.pageX - 25}px`; // Adjust for half of the div's width

    // Append the div to the body
    document.body.appendChild(clickEffect);

    // Remove the div after the animation ends
    setTimeout(() => {
      clickEffect.remove();
    }, 1000);
  };

  useEffect(() => {
    // Attach click event listener to the document
    document.addEventListener('click', handleClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array means this runs once when component mounts and cleans up when unmounts

  return null; // No need to render any JSX
};

export default ClickEffect;

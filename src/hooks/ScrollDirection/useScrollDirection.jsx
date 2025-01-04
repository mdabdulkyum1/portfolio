import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide when scrolling down
        setIsVisible(false);
      } else {
        // Show when scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return isVisible; // Return the visibility status
};

export default useScrollDirection;

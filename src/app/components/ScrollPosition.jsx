import React from "react";

export default function ScrollPosition() {
  const [scrollPosition, setScrollPosition] = React.useState({ x: 0, y: 0 });
  const { x: xPosition, y: yPosition } = scrollPosition;
  React.useEffect(() => {
    function handleScroll() {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }

    window.addEventListener("scroll", handleScroll);
    // Unbind the event listener on clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <h1>Scroll position:</h1>{xPosition} - {yPosition}
    </>
  );
}

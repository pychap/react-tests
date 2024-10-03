import React from "react";

export default function ScrollPosition() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  React.useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <h1>Scroll position:</h1>{scrollPosition}
    </>
  );
}

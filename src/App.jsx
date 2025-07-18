import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import gsap from "gsap";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // match the delay in your gsap

    // GSAP animations
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
      }
    );

    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > prevScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        Math.abs(currentScrollY - prevScrollY) > 10
      ) {
        setScrollDirection(direction);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection, prevScrollY]);

  if (loading) {
    return (
    <div class="loading-page">
       <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M448.6 225.6c26.9 .2 35.6-7.4 38.9-12.4 12.5-16.3-7.1-47.6-52.9-71.3 17.8-33.6 30.1-63.7 36.3-85.3 3.4-11.8 1.1-19 .5-20.3-1.7 10.5-15.9 48.5-48.2 100.1-25-11.2-56.5-20.1-93.8-23.8-8.9-16.9-34.9-63.9-60.5-88.9C252.2 7.1 238.7 1.1 228.2 .2h-.1c-13.8-1.6-22.7 5.9-27.4 11-17.2 18.5-24.3 48.9-25 84.1-7.2-12.4-17.2-24.6-28.5-25.9h-.2c-20.7-3.5-38.4 29.2-36 81.3-38.4 1.4-71 5.8-93 11.2-9.9 2.5-16.2 7.3-17.8 9.7 1-.4 22.4-9.2 111.6-9.2 5.2 53 29.8 101.8 26 93.2-9.7 15.4-38.2 62.4-47.3 97.7-5.9 22.9-4.4 37.6 .2 47.1 5.6 12.8 16.4 16.7 23.2 18.3 25 5.7 55.4-3.6 86.7-21.1-7.5 12.8-13.9 28.5-9.1 39.3 7.3 19.7 44.5 18.7 88.4-9.5 20.2 32.2 40.1 57.9 55.7 74.1a39.8 39.8 0 0 0 8.8 7.1c5.1 3.2 8.6 3.4 8.6 3.4-8.2-6.8-34-38-62.5-91.8 22.2-16 45.7-38.9 67.5-69.3 122.8 4.6 143.3-24.8 148-31.6 14.7-19.9 3.4-57.4-57.3-93.7zm-77.9 106.2c23.8-37.7 30.3-67.8 29.5-92.3 27.9 17.6 47.2 37.6 49.1 58.8 1.1 12.9-8.1 29.1-78.5 33.5zM216.9 387.7c9.8-6.2 19.5-13.1 29.2-20.5 6.7 13.3 13.6 26.1 20.6 38.2-40.6 21.9-68.8 12.8-49.8-17.7zm215-171.4c-10.3-5.3-21.2-10.3-32.4-15.1a722.5 722.5 0 0 0 22.7-36.9c39.1 24.1 45.9 53.2 9.6 52zM279.2 398c-5.5-11.4-11-23.5-16.5-36.4 43.3 1.3 62.4-18.7 63.3-20.4 0 .1-25 15.6-62.5 12.3a718.8 718.8 0 0 0 85.1-84q13.1-15.3 24.9-31.1c-.4-.3-1.5-3-16.5-12-51.7 60.3-102.3 98-132.8 115.9-20.6-11.2-40.8-31.8-55.7-61.5-20-39.9-30-82.4-31.6-116.1 12.3 .9 25.3 2.2 38.9 3.9-22.3 36.8-14.4 63-13.5 64.2 0-.1-1-29.2 20.1-59.6a695.2 695.2 0 0 0 44.7 152.8c.9-.4 1.8 .9 18.7-8.3-26.3-74.5-33.8-138.2-34-173.4 20-12.4 48.2-19.8 81.6-17.8 44.6 2.7 86.4 15.3 116.3 30.7q-10.7 15.7-23.3 32.5C365.6 152 339.1 145.8 337.5 146c.1 0 25.9 14.1 41.5 47.2a717.6 717.6 0 0 0 -115.3-31.7 646.6 646.6 0 0 0 -39.4-6.1c-.1 .5-1.8 1.9-2.2 20.3C300 190.3 358.8 215.7 389.4 233c.7 23.6-7 51.6-25.4 79.6-24.6 37.3-56.4 67.2-84.8 85.4zm27.4-287c-44.6-1.7-73.6 7.4-94.7 20.7 2-52.3 21.3-76.4 38.2-75.3C267 52.2 305 108.6 306.6 111zm-130.7 3.1c.5 12.1 1.6 24.6 3.2 37.3-14.6-.9-28.7-1.3-42.4-1.3-.1 3.2-.1-51 24.7-49.6h.1c5.8 1.1 10.6 6.9 14.4 13.6zm-28.1 162c20.8 39.7 43.3 60.6 65.3 72.3-46.8 24.8-77.5 20-84.9 4.5-.2-.2-11.1-15.3 19.7-76.8zm210.1 74.8"/>
    </svg>
        <div className="name-container">
          <div className="logo-name">Roshan</div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar scrollDirection={scrollDirection} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

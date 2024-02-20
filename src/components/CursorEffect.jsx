import React, { useState, useEffect } from 'react';
import '../style.css'; 

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className="cursor-effect"
      style={{
        left: `${position.x + 50}px`,
        top: `${position.y + 50}px`,
        opacity: hidden ? 0 : 1
      }}
    />
  );
};

export default CursorEffect;

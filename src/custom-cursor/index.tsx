import React, { useEffect, useState } from 'react';

import { Link as LinkRouter } from 'react-router-dom';

import CursorNormalState from './Cursor/cursor-normal-state.png';
import CursorHoverState from './Cursor/cursor-on-hover-state.png';
import './styles.css';

const useCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return cursorPosition;
};

const CursorComponent = () => {
  const { x, y } = useCursor();
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  useEffect(() => {
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      link.addEventListener('mouseover', handleMouseOver);
      link.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseover', handleMouseOver);
        link.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const customCursorClass = hovered ? 'cursor-hover' : 'cursor-normal'; // Define your CSS classes here

  const xOffset = -15;
  const yOffset = -15;

  return (
    <div
      className={customCursorClass}
      style={{
        position: 'fixed',
        left: `${x + xOffset}px`,
        top: `${y + yOffset}px`,
        pointerEvents: 'none',
        zIndex: 999,
      }}
    >
      <img
        src={hovered ? CursorHoverState : CursorNormalState}
        alt="Custom Cursor"
        style={{ display: 'block', width: '25px' }}
      />
    </div>
  );
};

export default CursorComponent;

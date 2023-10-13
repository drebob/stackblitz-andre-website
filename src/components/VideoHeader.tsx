import * as React from 'react';
const { useEffect, useRef } = React;
import p5 from 'p5';

const VideoHeader: React.FC = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(800, 400);
        p.background(200);
      };

      p.draw = () => {
        p.fill(31, 57, 33);
        p.ellipse(p.mouseX, p.mouseY, 200, 200);
      };
    };

    const myp5 = new p5(sketch, canvasRef.current);

    return () => {
      // Clean up on component unmount
      myp5.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default VideoHeader;
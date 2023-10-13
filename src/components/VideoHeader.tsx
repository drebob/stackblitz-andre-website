import * as React from 'react';
const { useEffect, useRef } = React;
import p5 from 'p5';

const VideoHeader: React.FC = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let rStart, rStop;
      let radii;
      let nX, nY, yY;
      let masterX, masterY;
      let models;
      let nRadius, outRadius;
      let degs;
      let inBetween, totalTweens;
      let circleNumber;

      p.setup = () => {
        p.colorMode(p.HSB);
        p.smooth();
        p.createCanvas(p.windowWidth, p.windowHeight);
        degs = 360;
        nRadius = 1.300;
        outRadius = 321;
        totalTweens = 27.0;
        inBetween = 0.0;
        circleNumber = 1;
        p.background(255);
        models = 199;
        radii = Array(models).fill(undefined).map(() => Array(degs).fill(0));
        doSetupModels();
        masterX = -300;
        masterY = p.height / 2;
        p.colorMode(p.HSB);
        p.strokeWeight(0.2);
        p.fill(255, 4, 255, 0);
      };

      const doSetupModels = () => {
        for (let i = 0; i < models; i++) {
          let ptTemp = Array(degs).fill(0);
          let zz = p.random(3);
          radii[i] = doNewCircle(zz, zz - 1);
        }
      };

      p.draw = () => {
        masterX = p.mouseX;
        masterY = p.mouseY;

        if (inBetween < totalTweens && circleNumber + 1 < models) {
          let hybridCircle = Array(degs).fill(0);
          hybridCircle = doInterpolate(radii[circleNumber], radii[circleNumber + 1], inBetween / totalTweens);
          doSimpleOutline(hybridCircle);
          inBetween++;
        } else {
          if (circleNumber + 1 < models) {
            circleNumber++;
            inBetween = 0;
          }
        }
      };

      const doInterpolate = (cOne, cTwo, beTwixt) => {
        let ptTemp = Array(degs).fill(0);
        for (let j = 0; j < degs; j++) {
          ptTemp[j] = coslerp(cOne[j], cTwo[j], beTwixt);
        }
        return ptTemp;
      };

      const doSimpleOutline = (myCircle) => {
        masterX = masterX + 3.0;
        doDrawCircle(Math.round(masterX), Math.round(masterY), myCircle);
      };

      const coslerp = (val1, val2, amt) => {
        amt = p.map(Math.cos(amt * p.PI), 1.0, -1.0, 0, 1.0);
        return p.lerp(val1, val2, amt);
      };

      const doDrawCircle = (xPos, yPos, ptRad) => {
        p.push();
        p.translate(xPos, yPos);
        p.rotate(p.radians(p.frameCount * 0.95125));
        let col = p.color(Math.round(p.map(xPos, 0, p.width, 80, 255)), 255, 180);
        p.stroke(col);
        p.beginShape();
        for (let j = 0; j < degs; j++) {
          let rj = p.radians(j);
          let xA = Math.sin(rj) * ptRad[j];
          let yA = Math.cos(rj) * ptRad[j];
          p.vertex(xA, yA);
        }
        p.endShape();
        p.pop();
      };

      const doNewCircle = (nXstart, nYstart) => {
        let theCircle = Array(degs).fill(0);
        for (let i = Math.round(p.frameCount / 2.0); i < degs + Math.round(p.frameCount / 2.0); i++) {
          nX = Math.sin(p.radians(i)) * nRadius + nXstart;
          nY = Math.cos(p.radians(i)) * nRadius + nYstart;
          theCircle[i] = p.map(p.noise(nX, nY), 0, 1, 0, outRadius);
        }
        return theCircle;
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const myp5 = new p5(sketch, canvasRef.current);

    return () => {
      // Clean up on component unmount
      myp5.remove();
    };
  }, []);

  return <div ref={canvasRef} id="canvasContainer"></div>;
};

export default VideoHeader;







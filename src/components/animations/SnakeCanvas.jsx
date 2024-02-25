import { useEffect, useRef } from "react";

const SnakeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let w, h, ctx, lines;
    const animationSpeed = 35;

    const hexToRgb = (hex) => {
      hex = hex.replace(/^#/, "");
      let bigint = parseInt(hex, 16);
      let r = (bigint >> 16) & 255;
      let g = (bigint >> 8) & 255;
      let b = bigint & 255;
      return { r, g, b };
    };

    const draw = () => {
      const snakeBgColor = document.getElementById("your-snake-canvas-id")
        .dataset.colorone;
      if (snakeBgColor && snakeBgColor.length > 1) {
        ctx.fillStyle = `rgba(${hexToRgb(snakeBgColor).r},${
          hexToRgb(snakeBgColor).g
        },${hexToRgb(snakeBgColor).b},0.05)`;
      } else {
        ctx.fillStyle = "rgba(11, 17, 21, 0.05)";
      }
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        const a = ~~(Math.random() * 4) * 90;
        const lL = Math.random() * 22;
        ctx.lineWidth = 1;
        ctx.strokeStyle = l.color;
        ctx.beginPath();
        ctx.moveTo(l.location.x, l.location.y);
        switch (a) {
          case 0:
            l.location.y -= lL;
            break;
          case 90:
            l.location.x += lL;
            break;
          case 180:
            l.location.y += lL;
            break;
          case 270:
            l.location.x -= lL;
            break;
          default:
            break;
        }
        ctx.lineTo(l.location.x, l.location.y);
        if (l.location.x < 0 || l.location.x > w)
          l.location.x = Math.random() * w;
        if (l.location.y < 0 || l.location.y > h)
          l.location.y = Math.random() * h;
        ctx.stroke();
      }
    };

    const loop = () => {
      draw();
      setTimeout(() => {
        requestAnimationFrame(loop);
      }, animationSpeed);
    };

    const initializeCanvas = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const canvas = canvasRef.current;
      canvas.width = w;
      canvas.height = h;
      ctx = canvas.getContext("2d");

      lines = [];
      for (let i = 0; i < 50; i++) {
        lines.push({
          location: { x: Math.random() * w, y: Math.random() * h },
          width: Math.random() * 0.5 + 0.5,
          color: document.getElementById("your-snake-canvas-id").dataset
            .colortwo,
        });
      }

      loop();
    };

    initializeCanvas();

    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <canvas
      id="your-snake-canvas-id"
      className="canvas canvas-snake"
      data-colorone="black"
      data-coloroned="#202020"
      data-colortwo="#a4ff91"
      ref={canvasRef}></canvas>
  );
};

export default SnakeCanvas;

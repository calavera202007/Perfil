import { useEffect, useRef } from "react";

export default function NetworkBackground({ nodeCount = 16 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame;
    let width, height, dpr;
    const pointer = { x: 0.5, y: 0.5, active: false };

    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0009,
      vy: (Math.random() - 0.5) * 0.0009,
      r: Math.random() * 2 + 2,
      phase: Math.random() * Math.PI * 2,
    }));

    function resize() {
      const rect = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function getAccent() {
      const styles = getComputedStyle(document.documentElement);
      return styles.getPropertyValue("--accent").trim() || "#22d3ee";
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      pointer.x = (clientX - rect.left) / rect.width;
      pointer.y = (clientY - rect.top) / rect.height;
      pointer.active = true;
    }
    function onLeave() {
      pointer.active = false;
    }

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    let t = 0;

    function draw() {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);
      const accent = getAccent();

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;

        if (pointer.active) {
          const dx = n.x - pointer.x;
          const dy = (n.y - pointer.y) * (height / width);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 0.16;
          if (dist < radius && dist > 0.0001) {
            const force = (radius - dist) / radius;
            n.x += (dx / dist) * force * 0.01;
            n.y += (dy / dist) * force * 0.01;
          }
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = (a.x - b.x) * width;
          const dy = (a.y - b.y) * height;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.min(width, height) * 0.5;
          if (dist < maxDist) {
            ctx.strokeStyle = accent;
            ctx.globalAlpha = 0.22 * (1 - dist / maxDist);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x * width, a.y * height);
            ctx.lineTo(b.x * width, b.y * height);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n, i) => {
        const pulse = Math.sin(t * 1.6 + n.phase) * 0.6 + 1;
        ctx.globalAlpha = 1;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(n.x * width, n.y * height, (i % 4 === 0 ? n.r + 1.5 : n.r) * pulse, 0, Math.PI * 2);
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [nodeCount]);

  return <canvas ref={canvasRef} className="network-bg" aria-hidden="true" />;
}

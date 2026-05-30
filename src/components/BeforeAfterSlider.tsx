import { useEffect, useRef, useState } from "react";

interface Props {
  before: string;
  after: string;
  label: string;
}

export function BeforeAfterSlider({ before, after, label }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const p = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.min(100, Math.max(0, p)));
    };
    const onMove = (e: MouseEvent) => dragging.current && move(e.clientX);
    const onTouch = (e: TouchEvent) => dragging.current && move(e.touches[0].clientX);
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{label}</p>
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lift select-none cursor-ew-resize"
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      >
        <img src={after} alt="After cleaning" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={before}
            alt="Before cleaning"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${(100 / pos) * 100}%`, filter: "brightness(0.7) saturate(0.8) sepia(0.15)" }}
            draggable={false}
          />
        </div>
        <span className="absolute top-4 left-4 rounded-full bg-navy-deep/80 px-3 py-1 text-xs font-semibold text-white tracking-wider">BEFORE</span>
        <span className="absolute top-4 right-4 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-navy-deep tracking-wider">AFTER</span>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lift pointer-events-none"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lift flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-navy">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

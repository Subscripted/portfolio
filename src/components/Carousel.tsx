import React, { useEffect, useRef } from "react";

type CarouselProps = {
    children: React.ReactNode;
    speed?: number; // px per frame
};

export function Carousel({ children, speed = 0.3 }: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollAccumulator = useRef(0);

    const childrenArray = React.Children.toArray(children);

    const minDuplicates = Math.max(3, Math.ceil(window.innerWidth / (300 * childrenArray.length)) + 1);
    const duplicatedChildren = Array(minDuplicates).fill(childrenArray).flat();

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let animationFrame: number;

        const scroll = () => {
            if (!el) return;

            scrollAccumulator.current += speed;

            if (scrollAccumulator.current >= 1) {
                const pixelsToMove = Math.floor(scrollAccumulator.current);
                el.scrollLeft += pixelsToMove;
                scrollAccumulator.current -= pixelsToMove;
            }

            const halfWidth = el.scrollWidth / 2;
            if (el.scrollLeft >= halfWidth) {
                el.scrollLeft = 0;
            }

            animationFrame = requestAnimationFrame(scroll);
        };

        setTimeout(() => {
            animationFrame = requestAnimationFrame(scroll);
        }, 100);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [speed]);

    return (
        <div className="overflow-hidden w-full hidden md:block relative">
            <div
                ref={containerRef}
                className="flex gap-4 overflow-x-hidden"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    scrollBehavior: "auto",
                }}
            >
                {duplicatedChildren.map((child, index) => (
                    <div key={index} className="min-w-[300px] shrink-0">
                        {child}
                    </div>
                ))}
            </div>

            <style>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
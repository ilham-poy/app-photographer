'use client'
import gsap from 'gsap';
import { useLayoutEffect, useRef, useEffect } from 'react';

export default function AboutUpperContent() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const threeText = useRef(null);
    const fourText = useRef(null);

    let xPercentTop = 0;
    let xPercentBottom = 0;

    useEffect(() => {
        const animateTop = () => {
            if (xPercentTop >= 0) xPercentTop = -100;
            gsap.set([firstText.current, secondText.current], { xPercent: xPercentTop });
            xPercentTop += 0.05;
            requestAnimationFrame(animateTop);
        };

        const animateBottom = () => {
            if (xPercentBottom <= -100) xPercentBottom = 0;
            gsap.set([threeText.current, fourText.current], { xPercent: xPercentBottom });
            xPercentBottom -= 0.05;
            requestAnimationFrame(animateBottom);
        };

        animateTop();
        animateBottom();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full bg-transparent h-[120px]">
                <div>
                    <div className="whitespace-wrap flex font-['Playfair_Display_SC'] font-medium text-6xl md:text-8xl text-[rgba(168,168,168,1)]">
                        <p ref={firstText}>ABOUT.ABOUT.ABOUT.ABOUT.ABOUT.ABOUT.</p>
                        <p ref={secondText}>ABOUT.ABOUT.ABOUT.ABOUT.ABOUT.ABOUT.</p>
                    </div>
                </div>
                <div>
                    <div className="whitespace-wrap flex text-center text-outline-white font-['Playfair_Display_SC'] font-medium text-6xl md:text-8xl">
                        <p ref={threeText}>ABOUT.ABOUT.ABOUT.ABOUT.ABOUT.ABOUT.</p>
                        <p ref={fourText}>ABOUT.ABOUT.ABOUT.ABOUT.ABOUT.ABOUT.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
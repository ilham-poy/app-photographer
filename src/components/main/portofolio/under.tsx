'use client'
import { useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UnderPortofolioPage() {
    useEffect(() => {
        gsap.utils.toArray(".grid div").forEach((el: any) => {
            gsap.fromTo(el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 110%",
                        end: "bottom 40%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <>

            <div className="grid grid-cols-2 grid-rows-8 sm:grid-cols-4 sm:grid-rows-4 md:grid-cols-4 gap-2 h-screen mt-2 sm:mt-10 p-4">
                <div className="bg-[url('/portofolio-img/image-1.png')] bg-cover bg-center bg-no-repeat col-span-2 row-span-2  sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 bg-gray-800 rounded-2xl"></div>
                <div className="bg-[url('/portofolio-img/image-2.png')] bg-cover bg-center bg-no-repeat col-span-1 row-span-1 bg-gray-700 rounded-2xl"></div>
                <div className="bg-[url('/portofolio-img/image-3.png')] bg-cover bg-center bg-no-repeat col-span-1 row-span-1 bg-gray-700 rounded-2xl"></div>
                <div className="bg-[url('/portofolio-img/image-4.png')] bg-cover bg-center bg-no-repeat col-span-1 row-span-1 bg-gray-700 rounded-2xl"></div>
                <div className="bg-[url('/portofolio-img/image-5.png')] bg-cover bg-no-repeat col-span-1 row-span-1 bg-gray-700 rounded-2xl"></div>
                <div className="bg-[url('/portofolio-img/image-6.png')] bg-cover bg-center bg-no-repeat col-span-2  row-span-2 sm:col-span-2 md:col-span-2 md:row-span-2 bg-gray-700 rounded-2xl"></div>
                <div className="bg-[url('/portofolio-img/image-7.png')] bg-cover bg-center bg-no-repeat col-span-2  row-span-2 sm:col-span-2 md:col-span-2 md:row-span-2 bg-gray-700 rounded-2xl"></div>
            </div>

        </>

    )
}
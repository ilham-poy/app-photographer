'use client';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
export default function NavbarContent() {

    //!!! Fungsi Buat dapetin width realtime
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // !!!!!

    return (
        <>
            {
                (() => {
                    if (width < 850) {
                        return (
                            <nav className="shadow-md px-4 py-3 fixed w-full top-0 z-50 bg-black/5 backdrop-blur-xs">
                                <div className="max-w-7xl mx-auto flex items-center justify-between">
                                    <div className="bg-[url('/logo-Snapfinity.png')] bg-contain bg-center bg-no-repeat w-[150px] h-[50px]" />
                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem className="relative">
                                                <NavigationMenuTrigger>

                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent className=" bg-black/20 backdrop-blur-xs">
                                                    <ul className="grid w-[125px] gap-3 p-4">
                                                        <Button>
                                                            <li><a href="#home">Home</a></li>
                                                        </Button>
                                                        <Button>
                                                            <li><a href="#about">About Me</a></li>
                                                        </Button>
                                                        <Button>
                                                            <li><a href="#portofolio">Portofolio</a></li>
                                                        </Button>
                                                        <Button>
                                                            <li><a href="#jobs">Services</a></li>
                                                        </Button>
                                                        <Button>
                                                            <li><a href="#contacts">Contacts</a></li>
                                                        </Button>
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                </div>
                            </nav>

                        );
                    } else {
                        return (
                            <nav className="shadow-md px-4 py-3 fixed w-full top-0 z-50 bg-black/5 backdrop-blur-xs">
                                <div className="max-w-7xl mx-auto flex items-center justify-between">
                                    <div className="bg-[url('/logo-Snapfinity.png')] bg-contain bg-center bg-no-repeat w-[150px] h-[50px]" />
                                    <ul className="font-['Playfair_Display_SC'] hidden md:flex gap-[36px] text-xl">
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#about">About Me</a></li>
                                        <li><a href="#portofolio">Portofolio</a></li>
                                        <li><a href="#jobs">Services</a></li>
                                        <li><a href="#contacts">Contacts</a></li>
                                    </ul>
                                </div>
                            </nav>
                        );
                    }
                })()
            }
        </>
    );
};


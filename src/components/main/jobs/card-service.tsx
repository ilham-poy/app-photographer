import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    HeartIcon,
    MessageCircleIcon,
    MoreHorizontalIcon,
    ShareIcon,
} from "lucide-react";
import Image from "next/image";

export default function CardService(props: any) {
    const { headline, children, title, imgs } = props;
    return (
        <div className="flex justify-center ">
            <Card className="w-sm sm:w-sm lg:w-xl shadow-none h-auto my-4 ">
                <CardContent className="p-0">
                    <Separator></Separator>
                    <div className={`relative aspect-video bg-muted bg-contain bg-center ${imgs}`} />
                    <Separator></Separator>
                    <div className="pt-1 pb-1 px-3 sm:pt-3 sm:pb-4 sm:px-6">
                        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl font-['Playfair_Display_SC'] text-white text-center"  >{headline}</h2>
                        <div className="m-4">
                            {/* <p className="mt-1 text-sm text-muted-foreground m-4"></p> */}
                            <p className="text-xl sm:text-xl lg:text-2xl text-center text-white">{title}</p>
                            <ul className="m-10  list-disc text-xl lg:text-2xl  text-white">
                                {children}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}
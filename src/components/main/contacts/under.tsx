'use client';
import { AppWindowIcon, CodeIcon, Divide } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { useEffect, useState } from 'react';


export default function UnderContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [title, setTittle] = useState('');
    const [sendProcess, setSendProcess] = useState(false);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        const hiddenInputProgrammer = document.getElementById('tabs-programmer');
        const hiddenInputUIUX = document.getElementById('tabs-uiux');

        let programmerValue: string | null = null;
        let uiuxValue: string | null = null;

        if (hiddenInputProgrammer) {
            programmerValue = (hiddenInputProgrammer as HTMLInputElement).value;
            setTittle("programmer");
        }
        if (hiddenInputUIUX) {
            uiuxValue = (hiddenInputUIUX as HTMLInputElement).value;
            setTittle('uiux')
        }

    }, [email]);


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            setSendProcess(true);

            const api = process.env.NEXT_PUBLIC_BACKEND_SERVICES_EMAIL;
            const response = await fetch(`${api}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, name, email, message }),
            });
            const data = await response.json();
            if (data) {
                setTimeout(() => {
                    setSendProcess(false)
                }, 2000)
            }

        } catch (error: any) {
            alert("Sedang Ada Masalah, Silahkan Coba Lagi");
        }
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto mx-8 my-4">
            {sendProcess && (
                <div
                    className="fixed top-20 right-4 z-50 bg-black border-l-4 border-gray-500  p-4 w-[280px] sm:w-[500px]"

                >
                    <p className="font-bold text-sm sm:text-xl text-white">Data Berhasil Terkirim</p>
                    <p className="text-xs sm:text-base text-white">Terima kasih sudah menghubungi kami.</p>
                    <p className="text-xs sm:text-base  text-white">Kami akan segera merespons pesan Anda secepat mungkin.</p>
                </div>
            )}
            <div className="p-5">
                <div className="bg-[url('/bg/bg-contact.png')] bg-cover bg-center bg-no-repeat opacity-50 h-[75vh]">
                </div>
            </div>

            <div className="flex w-full h-auto flex-col gap-6 items-center justify-center ">
                <Tabs defaultValue="programmer" className="sm:w-[320px] md:w-sm lg:w-md" >
                    <TabsList>
                        <TabsTrigger value="programmer" >Programmer</TabsTrigger>
                        <TabsTrigger value="uiux">UI/UX Design</TabsTrigger>
                    </TabsList>
                    <TabsContent value="programmer" >
                        <Card className="py-8">
                            <CardHeader className="mt-4 text-center text-2xl">
                                <CardTitle>Let’s Work Together</CardTitle>

                            </CardHeader>
                            <form onSubmit={handleSubmit}>
                                <CardContent className="grid gap-6">
                                    <Input id="tabs-programmer" type="hidden" value="programmer" name="title" />

                                    <div className="text-white grid gap-3">
                                        <Label htmlFor="tabs-demo-current">Your Name</Label>
                                        <Input id="tabs-demo-current" required type="text" onChange={e => setName(e.target.value)} name="name" />
                                    </div>
                                    <div className="text-white grid gap-3">
                                        <Label htmlFor="tabs-demo-current">Your Email</Label>
                                        <Input id="tabs-demo-current" required type="email" onChange={e => setEmail(e.target.value)} name="email" />
                                    </div>
                                    <div className="text-white grid gap-3">
                                        <Label htmlFor="tabs-demo-new">Your Text</Label>
                                        <Textarea id="message" rows={5} required placeholder="Tulis pesan Anda..." onChange={e => setMessage(e.target.value)} name="message" />
                                    </div>
                                    <br />
                                </CardContent>
                                <CardFooter className="mb-4 items-center">
                                    <Button type='submit' variant="secondary">Send to Programmer</Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>
                    <TabsContent value="uiux">
                        <Card className="py-8">
                            <CardHeader className="mt-4 text-center text-2xl">
                                <CardTitle>Let’s Work Together</CardTitle>
                            </CardHeader>
                            <form onSubmit={handleSubmit}>
                                <CardContent className="grid gap-6">
                                    <Input id="tabs-uiux" type="hidden" value='uiux' name="title" readOnly />

                                    <div className="text-white grid gap-3">
                                        <Label htmlFor="tabs-demo-current">Your Name</Label>
                                        <Input id="tabs-demo-current" required type="text" onChange={e => setName(e.target.value)} name="name" />
                                    </div>
                                    <div className="text-white grid gap-3">
                                        <Label htmlFor="tabs-demo-current">Your Email</Label>
                                        <Input id="tabs-demo-current" required type="email" onChange={e => setEmail(e.target.value)} name="email" />
                                    </div>
                                    <div className="text-white grid gap-3">
                                        <Label htmlFor="tabs-demo-new">Your Text</Label>
                                        <Textarea id="message" required rows={5} placeholder="Tulis pesan Anda..." onChange={e => setMessage(e.target.value)} name="message" />
                                    </div>
                                    <br />
                                </CardContent>
                                <CardFooter className="mb-4 items-center">
                                    <Button type='submit' variant="secondary">Send to UI/UX Design</Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div >
    )
}
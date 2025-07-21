export default function AboutUnderContent() {
    return (
        <div className="flex flex-col items-center md:items-end justify-center md:flex-row mt-[20px]">
            {/* Left heading block */}
            <div className="flex-1 md:flex-none">
                <h1
                    className="font-bold font-['Playfair_Display_SC'] leading-tight text-2xl sm:text-4xl md:text-6xl lg:text-8xl"
                    style={{
                        fontSize: `
                        clamp(1.5rem, 
                        calc(2.5rem + 3vw), 
                        6rem)
                        `,
                    }}
                >
                    EYYOHH!
                    <br />WHAT’S
                    <br />UP
                </h1>

            </div>

            {/* Middle image block */}
            <div
                className="
                    w-full 
                    max-w-sm 
                    aspect-[589/570] 
                    md:w-[589px] 
                    md:h-[570px] 
                    md:aspect-auto 
                    md:max-w-none 
                    bg-[url('/about.png')] 
                    bg-cover 
                    bg-center 
                    bg-no-repeat 
                    rounded-md
                "
            ></div>



            {/* Right text block */}
            <div className="flex flex-col mt-[30px] px-[10px] sm:mt-0 sm:px-0 justify-center w-full max-w-md md:w-[289px] h-auto md:h-[300px] md:px-[5px]">
                <h1 className="font-bold text-2xl sm:text-3xl mb-3">Hi, I'm James Rodriguez</h1>
                <p className="font-normal text-base sm:text-lg">
                    I believe that every picture tells a story. With 2 years of experience in [type of photography], I specialize in capturing authentic moments
                    that last a lifetime. Whether it's a wedding, a portrait, or a stunning landscape, I strive to bring out the best in every shot.
                </p>
            </div>
        </div>

    )
}
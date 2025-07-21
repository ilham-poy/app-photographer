

type HighlightProps = {
    children: React.ReactNode;
};

export default function Highlight({ children }: HighlightProps) {
    const data = children;
    return (
        <div className="overflow-hidden" id='home'>
            <div className="bg-[url('/bg-highlight.jpg')] bg-cover bg-center bg-no-repeat w-[100vw] h-[100vh] ">
            </div>
            {children}
        </div >
    )
}
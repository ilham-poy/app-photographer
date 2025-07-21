import AboutUpperContent from "./upper"
import AboutUnderContent from "./under"
export default function AboutContent() {
    return (
        <div className="overflow-hidden" id='about'>
            <div className="w-screen h-auto ">
                <AboutUpperContent />
                <AboutUnderContent />
            </div>
        </div>
    )
}
import UpperContactPage from "./upper"
import UnderContactPage from "./under"
export default function ContactPage() {
    return (
        <div className="overflow-hidden" id='contacts'>
            <div className="w-screen h-auto border-b border-white bg-[rgba(20,24,19,1)]">
                <UpperContactPage></UpperContactPage>
                <UnderContactPage></UnderContactPage>
            </div>
        </div>
    )
}
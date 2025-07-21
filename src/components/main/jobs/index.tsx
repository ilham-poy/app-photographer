import UnderServicePage from "./under"
import UpperServicePage from "./upper"
export default function ServicePage() {
    return (
        <div className="overflow-hidden" id='jobs'>
            <div className="w-screen h-auto bg-color-custom">
                <UpperServicePage></UpperServicePage>
                <UnderServicePage></UnderServicePage>

            </div>
        </div>
    )
}
import UpperPortofolioPage from "./upper";
import UnderPortofolioPage from "./under";
export default function PortofolioPage() {
    return (
        <div className="overflow-hidden" id='portofolio'>
            <div className="w-screen h-auto  ">
                <UpperPortofolioPage></UpperPortofolioPage>
                <UnderPortofolioPage></UnderPortofolioPage>
            </div>
        </div>
    );
}
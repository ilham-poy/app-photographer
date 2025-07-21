import UpperCreditPage from "./credit/upper"
import UnderCreditPage from "./credit/under"
export default function CreditPage() {
    return (
        <div className="overflow-x-hidden">
            <div className="w-screen h-auto font-['Playfair_Display_SC'] ">
                <UpperCreditPage></UpperCreditPage>
                <UnderCreditPage></UnderCreditPage>
            </div>
        </div>
    )
}
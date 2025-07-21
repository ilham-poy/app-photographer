import Highlight from "@/components/header/highlight"
import NavbarContent from "@/components/header/navbar"
import AboutContent from "@/components/main/about"
import PortofolioPage from "@/components/main/portofolio"
import ServicePage from "@/components/main/jobs"
import ContactPage from "@/components/main/contacts"
import CreditPage from "@/components/footer"
export default function AllPage() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap" rel="stylesheet" />

            <Highlight>
                <NavbarContent></NavbarContent>
            </Highlight>
            <AboutContent></AboutContent>
            <PortofolioPage></PortofolioPage>
            <ServicePage></ServicePage>
            <ContactPage></ContactPage>
            <CreditPage></CreditPage>
        </>

    )
}
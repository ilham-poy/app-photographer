import CardService from "./card-service"

export default function UnderServicePage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-screen m-4 place-self-center">
            <CardService imgs="bg-[url('/jobs-img/image-1.png')]" headline="Portrait" title="Authentic & creative portraits that showcase your personality.">
                <li>Professional headshots.</li>
                <li>Family & couple photography.</li>
                <li>Maternity & newborn sessions.</li>
                <li>Outdoor & studio shoots.</li>
            </CardService>
            <CardService imgs="bg-[url('/jobs-img/image-2.png')]" headline="Event" title="Capturing unforgettable moments at your events.">
                <li>E-commerce & catalog photography.</li>
                <li>Branding & social media content.</li>
                <li>Styled product shots & flat lays.</li>
                <li>High-quality retouching.</li>
            </CardService>
            <CardService imgs="bg-[url('/jobs-img/image-3.png')]" headline="Product & Brand" title="Showcase your products with stunning visuals.">
                <li>E-commerce & catalog photography.</li>
                <li>Branding & social media content.</li>
                <li>Styled product shots & flat lays.</li>
                <li>High-quality retouching.</li>
            </CardService>
            <CardService imgs="bg-[url('/jobs-img/image-4.png')]" headline="Travel & Landscape" title="Bringing destinations to life through breathtaking images.">
                <li>Custom travel photography for brands.</li>
                <li>Destination & tourism campaigns.</li>
                <li>Prints available for purchase.</li>
                <li>Licensing for commercial use.</li>
            </CardService>

        </div>


    )
}
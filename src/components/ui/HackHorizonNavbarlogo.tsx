import Image from "next/image"
import shieldLogo from "../../assets/svg/shield.png"

export default function HackHorizonNavbarLogo() {
    return ( 
        <Image 
            src={shieldLogo}
            alt="Innerve Logo" 
            width={64} // Adjusted size
            height={64} // Adjusted size
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" // Adjusted responsive sizes
            draggable={false}
        />
    )
}

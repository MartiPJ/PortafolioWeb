"use client"
import MotionTransition from "./transitioncomponents";
import Image from "next/image";

const AvatarPortfolio = () => {
    return ( 
        <MotionTransition position="bottom" className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/home-4.png" width={300} height={300} className="w-full h-full" alt="Avatarportfoli" />

        </MotionTransition>
     );
}
 
export default AvatarPortfolio;
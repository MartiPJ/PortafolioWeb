import MotionTransition from "./transitioncomponents";
import Image from "next/image";

const Avatar = () => {
    return ( 
        <MotionTransition position="bottom" className="right-0 hidden md:inline-block md:absolute">
            <Image src="/habilidades.png" width={370} height={370}
                className="w-full h-full" alt ="Avatar" />
        </MotionTransition>
     );
}
 
export default Avatar;
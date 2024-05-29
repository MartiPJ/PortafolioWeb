import MotionTransition from "./transitioncomponents";
import Image from "next/image";

const Avatar = () => {
    return ( 
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/home-4.png" width={5} height={5}
                className="w-full h-full" alt ="Avatar" />
        </MotionTransition>
     );
}
 
export default Avatar;
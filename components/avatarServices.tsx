import MotionTransition from "./transitioncomponents";
import Image from "next/image";
const AvatarServices = () => {
    return ( 
        <MotionTransition position="right"
        className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/home-4.png" width={200} height={200} className="w-[350px] h-full" alt="Avatar"/>
        </MotionTransition>
     );
}
 
export default AvatarServices;
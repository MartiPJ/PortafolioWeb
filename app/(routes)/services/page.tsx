
import AvatarServices from "@/components/avatarServices";
import CircleImage from "@/components/circleImage";
import SliderServies from "@/components/sliderServices";
import TransitionPage from "@/components/transitionPage";

const ServicesPage = () => {
    return (
        <>
        <TransitionPage/>
        {/* <CircleImage /> */}
        {/* <AvatarServices/> */}
        <div className="grid mt-10 items-start justify-center h-screen max-w-5xl
        gap-6 mx-auto md:grid-cols-2 md:px-20">           
            <div className="max-w-[450px] ">
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                    Mis {" "}
                    <span className="font-bold text-secondary">
                        servicios.
                    </span>
                </h1>
                <p className="mb-3 text-xl text-gray-300">
                        Desarrollo de aplicaciones de escritorio y movil
                </p>
                <button className="px-3 py-2 rounded-lg bg-secondary/65">Contactame</button>
                <div className="mt-20 mx-auto md:grid-cols-2 ">
                    <SliderServies />
                </div>
            </div>
            
        </div>
        
        </>
      );
}
 
export default ServicesPage;
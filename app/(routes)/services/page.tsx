import AvatarServices from "@/components/avatarServices";
import CircleImage from "@/components/circleImage";
import SliderServies from "@/components/sliderServices";
import TransitionPage from "@/components/transitionPage";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            
            <div className="grid mt-10 items-start justify-center max-w-5xl gap-6 mx-auto px-4 md:grid-cols-2 md:px-20 h-full">
                <div className="max-w-[450px] mx-auto md:mx-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis{" "}
                        <span className="font-bold text-secondary">
                            servicios.
                        </span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300 text-center md:text-left">
                        Desarrollo de aplicaciones de escritorio y móvil
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="px-4 py-2 rounded-lg bg-secondary/65">
                            Contáctame
                        </button>
                    </div>
                    <div className="mt-10 md:mt-20 w-full">
                        <SliderServies />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;

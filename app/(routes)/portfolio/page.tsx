
import AvatarPortfolio from "@/components/avatarPortfolio";
import CircleImage from "@/components/circleImage";
import ContainerPage from "@/components/container";
import Portfoliobox from "@/components/portfolioBox";
import TransitionPage from "@/components/transitionPage";
import { dataPortfolio } from "@/data";
import Image from "next/image";

const PortfolioPage = () => {
    return ( 
        <ContainerPage>
            <TransitionPage />
            
            <div className="bottom-0 right-1 hidden md:inline-block md:absolute">
                <Image src="/Trabajo.png" width={200} height={200} alt="CircleImage" className="w-full h-full" />

            </div>

            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 mt-5" >
                    Mis ultimos {" "}
                    <span className="text-secondary font-bold">
                        trabajos
                    </span>
                </h1>

                <div className="relative z-10 grid max-w-5xl
                gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
                    {dataPortfolio.map((data)=>(
                        <Portfoliobox key={data.id} data={data} />
                    ))}
                    

                </div>

            </div>
        </ContainerPage>
     );
}
 
export default PortfolioPage;

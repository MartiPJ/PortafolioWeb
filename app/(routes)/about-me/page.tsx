import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counterservices";
import TransitionPage from "@/components/transitionPage";

const PageAboutMe = () => {
    return ( 
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left 
                md:text-5xl md:mt-16">Toda mi{' '}
                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>
                <CounterServices />
            </ContainerPage>
        </>
     );
}
 
export default PageAboutMe;
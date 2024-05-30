import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counterservices";
import LineTime from "@/components/timeline";
import TransitionPage from "@/components/transitionPage";

const PageAboutMe = () => {
    return ( 
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left 
                md:text-5xl md:mt-16">Sobre{' '}
                    <span className="font-bold text-secondary">Mi</span>
                </h1>
                
                <LineTime />
                <CounterServices />
            </ContainerPage>
        </>
     );
}
 
export default PageAboutMe;
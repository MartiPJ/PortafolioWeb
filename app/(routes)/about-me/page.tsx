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
                <div className="flex flex-col items-center md:items-start w-full mt-8 md:mt-16">
                    <Avatar />
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl mt-4 w-full">
                        Sobre{' '}
                        <span className="font-bold text-secondary">Mi</span>
                    </h1>
                </div>
                
                <LineTime />
                <CounterServices />
                <div className="pb-40"></div> {/* Este div añade espacio inferior */}
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;


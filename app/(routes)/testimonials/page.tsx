import CircleImage from "@/components/circleImage";
import TransitionPage from "@/components/transitionPage";

const TestimonialsPage = () => {
    return ( 
        <>
        <TransitionPage />
        <div className="flex flex-col justify-center h-lvh">
            <CircleImage />
            <h1>
                Algunos comentarios de nuestros clientes
            </h1>

        </div>
        </>
     );
}
 
export default TestimonialsPage;
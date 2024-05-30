import Image from "next/image";
import Link from "next/link";
interface PorfolioboxProops{
    data:{
        id: number,
        title: string,
        image: string,
        descripcion: string;
        urlGithub: string,
        
    }
}

const Portfoliobox = (props:PorfolioboxProops) => {
    const {data} = props;
    const {id, title, image,descripcion, urlGithub} = data;

    return ( 
        <div className="p-4 border border-lime-300 rounded-xl">
            <div className="flex gap-5 ">
                <Link href={urlGithub} target="_blank"
                className="pg-2 transition duration-150 rounded-lg bg-secondary bg-secondary/80">
                    GitHub
                </Link>

            </div>
            <h3 className="mb-4 text-xl text-lime-300">
                {title}
            </h3>
            <h1 className="mb-4 text-xl">
                {descripcion}
            </h1>
            <Image src={image} alt="Image product" width={200} height={200}
            className="w-full md:w-[200px] rounded-2xl h-auto" />

            
            
        </div>
     );
}
 
export default Portfoliobox;
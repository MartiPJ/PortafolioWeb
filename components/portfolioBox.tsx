import Image from "next/image";
import Link from "next/link";
interface PorfolioboxProops{
    data:{
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}

const Portfoliobox = (props:PorfolioboxProops) => {
    const {data} = props;
    const {id, title, image, urlGithub, urlDemo} = data;

    return ( 
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">
                {title}
            </h3>
            <Image src={image} alt="Image product" width={200} height={200}
            className="w-full md:w-[200px] rounded-2xl h-auto" />

            <div className="flex gap-5 mt-5">
                <Link href={urlGithub} target="_blank"
                className="pg-2 transition duration-150 rounded-lg bg-secondary bg-secondary/80">
                    GitHub
                </Link>

            </div>
            
        </div>
     );
}
 
export default Portfoliobox;
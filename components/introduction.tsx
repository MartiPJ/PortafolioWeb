"use client"
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
const Introduction=()=>{
    return(
        <div className='z-20 w-full bg-darkBg/30'>
            <div className='z-auto grid items-center h-full p-14 py-20 md:py-0 md:grid-cols-2'>
                <Image src="/Perfil.jpg" priority width="250" height="250" alt="Profile pic" className="rounded-full" />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-right md:text-left
                    md:text-4xl md:mb-10">
                        Hola soy,<br />
                        <TypeAnimation
                        sequence={[
                            "Marti",
                            1000,
                            "buen líder",
                            1000,
                            "desarollador backend",
                            1000,
                            "administrador de BD",
                            1000
                        ]}
                        wrapper='span'
                        speed={60}
                        repeat={Infinity}
                        className="font-bold text-secondary"
                        />
                    </h1>
                    <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>
                        Soy un programador con el objetivo de poder ayudarte a optimizar tu tiempo
                    </p>
                    <div className='flex item-center justify-center gap-3 md:justify-start md:gap-10'>
                        <Link href="/portfolio" className='px-3 py2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                            Ver proyectos
                        </Link>
                        <Link href="/about-me" className='px-3 py2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary'>
                            Sobre mi
                        </Link> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Introduction;


"use client"
import { dataCounter } from "@/data";
import CountUp from 'react-countup';

const CounterServices = () => {
    return (
        <div className="grid max-w-2xl grid-cols-2 gap-3 mx-auto my-8 md:my-16 md:grid-cols-4 md:gap-6">
            {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                <div key={id} className={`relative ${lineRight ? 'border-r border-transparent md:border-r-gray-100' : ''}`}>
                    <div className={`text-center ${lineRightMobile ? 'border-r border-r-gray-100' : ''} px-4`}>
                        <p className="text-2xl font-extrabold text-secondary md:text-4xl mb-2">
                            %<CountUp end={endCounter} start={0} duration={5} />
                        </p>
                        <p className="text-xs uppercase mx-auto max-w-[100px]">{text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CounterServices;



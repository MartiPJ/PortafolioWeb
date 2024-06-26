import { dataAboutPage } from "@/data";

const LineTime = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full  mx-auto md:pb-40 md:pt-20">
                <div className="-my-6">
                    {dataAboutPage.map((data) => (
                        <div key={data.id} className="relative y-6 pl-8 sm:pl-32 group">
                            <h3 className="mb-1 text-2xl font-bold sm:mb-0">{data.title}</h3>
                            <div className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:-translate-y-5 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-secondary 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                        after:-translate-y-5"
                                    >

                                <p className="text-xl font-bold text-gray-400">{data.subtitle}</p>

                            </div>
                            <p className="text-slate-400 max-w-xl">{data.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LineTime;
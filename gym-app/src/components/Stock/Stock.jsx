import React from 'react'
import Image from 'next/image';
import TimeTablework from '/public/assets/images/time-table/dumbbell.png';

export const Stock = () => {
    return (
        <section className='stock my-28'>
            <div className="container mx-auto">

                <div className="stock-inner h-32 flex justify-center items-center ">

                    <div className="stock-text"> 

                        <h4 className="stock-title text-center text-3xl font-bold ">
                            Акция!
                        </h4>

                        <div className="stock-item flex justify-center items-center gap-4">
                            <Image width={1920} height={1080} className='stock-icon-img w-full' src={TimeTablework} alt="-_-" />

                            <p className="stock-subtitle text-xl font-medium">
                                Преведи друга и получи абанемент на три месяца бесплатно
                            </p>

                            <Image width={1920} height={1080} className='stock-icon-img w-full' src={TimeTablework} alt="-_-" />
                        </div>


                    </div>

                    <div className="stock-time">

                        {/* <p className="stock-time-title">
                            До конца акции осталось
                        </p> */}

                        {/* <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 15 }}></span>
                                </span>
                                days
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 10 }}></span>
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 24 }}></span>
                                </span>
                                min
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 8 }}></span>
                                </span>
                                sec
                            </div>
                        </div> */}

                    </div>

                </div>

            </div>
        </section>
    )
}

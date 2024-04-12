import React from 'react'
import Image from 'next/image';
import ShotImg from '/public/assets/images/shot/shot-1.jpg';
import Check from '/public/assets/images/shot/check.png';

export const ShotLeft = () => {
    return (
        <section className='shot my-28'>
            <div className="container mx-auto ">

                <div className="shot-inner">
                    <div className="shot-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 py-10 md:py-0">

                        <div className="shot-img-section w-full flex justify-center md:justify-start items-center">
                            <Image width={1920} height={1080} className='shot-img w-full' src={ShotImg} alt="-_-" />
                        </div>

                        <div className="shot-text-section flex flex-col justify-center items-start">

                            <div className="shot-top-section mb-10">
                                <p className="shot-top inline rounded-3xl border-2 border-green-500 p-3">
                                    Групповые занятия по кроссфиту
                                </p>
                            </div>

                            <div className="shot-title-section mb-10">
                                <h2 className='shot-title  text-lg sm:text4xl md:text-4xl lg:text-5xl font-medium'>
                                    Развивайтесь, развлекаясь на наших групповых занятиях CrossFit.
                                </h2>
                            </div>

                            <div className="shot-chek-section h-12 flex items-center gap-3 mb-4">

                                <div className="shot-chek-icon">
                                    <Image width={1920} height={1080} className='shot-chek-img w-full' src={Check} alt="-_-" />
                                </div>

                                <div className="shot-chek-subtitle-section">
                                    <p className="shot-chek-subtitle text-xl font-semibold">
                                        Всего 30 минут
                                    </p>
                                </div>

                            </div>

                            <div className="shot-chek-section h-12 flex items-center gap-3 mb-4">

                                <div className="shot-chek-icon">
                                    <Image width={1920} height={1080} className='shot-chek-img w-full' src={Check} alt="-_-" />
                                </div>

                                <div className="shot-chek-subtitle-section">
                                    <p className="shot-chek-subtitle text-xl font-semibold">
                                        Разминка и тренировка включены
                                    </p>
                                </div>

                            </div>

                            <div className="shot-chek-section h-12 flex items-center gap-3 mb-4">

                                <div className="shot-chek-icon">
                                    <Image width={1920} height={1080} className='shot-chek-img w-full' src={Check} alt="-_-" />
                                </div>

                                <div className="shot-chek-subtitle-section">
                                    <p className="shot-chek-subtitle text-xl font-semibold">
                                        Веселье гарантировано
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

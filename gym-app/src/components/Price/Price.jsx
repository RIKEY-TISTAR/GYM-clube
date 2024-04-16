"use client"
import React from 'react'
import Image from 'next/image';
import Check from '/public/assets/images/shot/check.png';
import usePriseces from '@/Hooks/usePrise';


export const Price = () => {

    const getPrise = usePriseces()

    return (

        <div className="price my-28" id='five-link'>

            <div className="container mx-auto">

                <div className="price-title-section mb-10">
                    <h2 className="price-title text-center text-4xl sm:text4xl md:text-5xl lg:text-5xl font-bold">
                        Абанемент
                    </h2>
                </div>

                <div className="price-card-section flex justify-center">

                    <div className="price-card-section-inner grid md:grid-cols-1 xl:grid-cols-3 gap-10">
                        {getPrise.map((item, index) => (
                            <>
                                <div className='price-card max-w-sm rounded-2xl overflow-hidden shadow-lg bg-neutral-900 border-2 border-green-500 py-6 px-6 flex flex-col justify-center'>
                                    <div className="px-2">
                                        <h2 className="card-title text-center text-3xl sm:text4xl md:text-5xl lg:text-5xl font-bold mb-1 uppercase pt-4">{item.attributes?.title}</h2>
                                        <p className="text-center uppercase text-3xl mb-10">
                                            {item.attributes?.prise}
                                        </p>
                                    </div>
                                    {item.attributes?.benef.map((item, index) => {
                                        return (
                                            <div className="shot-chek-section h-12 flex items-center gap-3 mb-4">


                                                <div className="shot-chek-icon">
                                                    <Image width={1920} height={1080} className='shot-chek-img w-full' src={Check} alt="-_-" />
                                                </div>

                                                <div className="shot-chek-subtitle-section">
                                                    <p className="shot-chek-subtitle text-base font-semibold">
                                                        {item.title}
                                                    </p>
                                                </div>


                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                        ))}
                    </div>

                </div>

            </div>

        </div>

    )
}

{/* <div>
{getPrise.map((item, index) => (
    <>
        <div className='price-card max-w-sm rounded-2xl overflow-hidden shadow-lg bg-neutral-900 border-2 border-green-500 py-6 px-6 flex flex-col justify-center'>
            <div className=''>{item.attributes?.title}</div>
            <div>{item.attributes?.prise}</div>
            <div>{item.attributes?.benefits}</div>
            <div>{item.attributes?.benef.map((item, index) => {
                return (
                    item.title
                )
            })}</div>
        </div>
    </>
))
}
</div> */}

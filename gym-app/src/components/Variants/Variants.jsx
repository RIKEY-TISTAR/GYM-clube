import React from 'react'
import Image from 'next/image';
import VariantsGymGuy1 from '/public/assets/images/variants/gym-1.jpg';
import VariantsGymGuy2 from '/public/assets/images/variants/gym-2.jpg';

export const Variants = () => {
    return (
        <section className='variants'>
            <div className="container mx-auto ">

                <div className="variants-inner flex flex-col justify-center items-center">

                    <div className="variants-title-section">
                        <h2 className="variants-title text-center text-5xl font-bold mb-12">
                            Мы подбирём тренера для каждого
                        </h2>
                    </div>
                    
                    <div className="variants-btn-section flex justify-center gap-10">

                        <div className="variants-card max-w-sm overflow-hidden shadow-lg rounded-2xl border-2 border-green-500">

                            <div className="variants-img-section flex justify-center">
                                <Image width={1920} height={1080} className='variants-img w-full' src={VariantsGymGuy1} alt="-_-" />
                            </div>
                            
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>

                            {/* <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div> */}

                        </div>

                        <div className="variants-card max-w-sm overflow-hidden shadow-lg rounded-2xl border-2 border-green-500">

                            <div className="variants-img-section flex justify-center">
                                <Image width={1920} height={1080} className='variants-img w-full' src={VariantsGymGuy1} alt="-_-" />
                            </div>
                            
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>

                            {/* <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div> */}

                        </div>

                        <div className="variants-card max-w-sm overflow-hidden shadow-lg rounded-2xl border-2 border-green-500">

                            <div className="variants-img-section flex justify-center">
                                <Image width={1920} height={1080} className='variants-img w-full' src={VariantsGymGuy1} alt="-_-" />
                            </div>
                            
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>

                            {/* <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div> */}

                        </div>

                        <div className="variants-card max-w-sm overflow-hidden shadow-lg rounded-2xl border-2 border-green-500">

                            <div className="variants-img-section flex justify-center">
                                <Image width={1920} height={1080} className='variants-img w-full' src={VariantsGymGuy1} alt="-_-" />
                            </div>
                            
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>

                            {/* <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div> */}

                        </div>

                    </div>

                </div>

            </div>

            {/* <div className="variants-btn-section">
                        <a className="variants-link">
                            <Image width={1920} height={1080} className='variants-img w-full' src={VariantsGymGuy1} alt="-_-" />
                        </a>
                        <a className="variants-link">
                            <Image width={1920} height={1080} className='variants-img w-full' src={VariantsGymGuy2} alt="-_-" />
                        </a>
                        <a className="variants-link">
                            <Image width={1920} height={1080} className='variants-img w-full' src={VariantsGymGuy1} alt="-_-" />
                        </a>
                        <a className="variants-link">
                            <Image width={1920} height={1080} className='variants-img w-full' src={VariantsGymGuy2} alt="-_-" />
                        </a>
            </div> */}

        </section>
    )
}

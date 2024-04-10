import React from 'react'
import Image from 'next/image';
import VariantsGymGuy1 from '/public/assets/images/variants/gym-1.jpg';
import VariantsGymGuy2 from '/public/assets/images/variants/gym-2.jpg';

export const Variants = () => {
  return (
    <section className='variants'>
        <div className="container mx-auto ">

            <div className="variants-inner">

                <div className="variants-title-section">
                    <h2 className="variants-title">
                    Мы предлагаем что-то для каждого
                    </h2>
                </div>

                <div className="variants-btn-section">
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
                </div>

            </div>              

        </div>
    </section>
  )
}

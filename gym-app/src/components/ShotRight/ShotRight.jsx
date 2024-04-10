import React from 'react'
import Image from 'next/image';
import ShotImg from '/public/assets/images/shot/shot-1.jpg';
import Check from '/public/assets/images/shot/check.png';

export const ShotRight = () => {
  return (
    <section className='shot'>
        <div className="container mx-auto ">
            
        <div className="shot-inner">

            <div className="shot-text-section">

                <div className="shot-top-section">
                    <p className="shot-top">
                    Групповые занятия по кроссфиту
                    </p>
                </div>

                <div className="shot-title-section">
                    <h2 className='shot-title shot-title'>
                    Развивайтесь, развлекаясь на наших групповых занятиях CrossFit.
                    </h2>
                </div>

                <div className="shot-chek-section">

                    <div className="shot-chek-icon">
                        <Image width={1920} height={1080} className='shot-chek-img w-full' src={Check} alt="-_-" /> 
                    </div>

                    <div className="shot-chek-subtitle-section">
                        <p className="shot-chek-subtitle">
                            Всего 30 минут
                        </p>
                    </div>

                </div>

                <div className="shot-chek-section">

                    <div className="shot-chek-icon">
                        <Image width={1920} height={1080} className='shot-chek-img w-full' src={Check} alt="-_-" /> 
                    </div>

                    <div className="shot-chek-subtitle-section">
                        <p className="shot-chek-subtitle">
                            Разминка и тренировка включены
                        </p>
                    </div>

                </div>

                <div className="shot-chek-section">

                    <div className="shot-chek-icon">
                        <Image width={1920} height={1080} className='shot-chek-img w-full' src={Check} alt="-_-" /> 
                    </div>

                    <div className="shot-chek-subtitle-section">
                        <p className="shot-chek-subtitle">
                            Веселье гарантировано
                        </p>
                    </div>

                </div>

            </div>

            <div className="shot-img-section">
                <Image width={1920} height={1080} className='shot-img w-full' src={ShotImg} alt="-_-" /> 
            </div>
            
        </div>

        </div>
    </section>
  )
}


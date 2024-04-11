import React from 'react'
import Image from 'next/image';
import Heroimg from '/public/assets/images/hero/bg.jpg';

export const Hero = () => {
  return (
    <section className='hero'>

      <div className="hero-inner relative w-full flex justify-center items-center ">

        <div className="hero-img-section object-cover absolute mix-blend-owerlay -z-10">
          <Image width={1920} height={1080} className='hero-img w-full' src={Heroimg} alt="-_-" />
        </div>

        <div className="text-section container mx-auto w-full flex flex-col justify-center items-center">

          <div className="hero-title-section full mb-4">
            <h2 className=" hero-title text-center text-6xl font-bold text-white">Достигните своих целей в области здоровья и фитнеса в кратчайшие сроки</h2>
          </div>

          <div className="hero-subtitle-section mb-6">
            <p className="hero-subtitle text-white text-center">
            Неважно, хотите ли вы стать сильнее,
            сжечь жир или просто оставаться в форме,
            наши тренеры мирового класса будут сопровождать вас на каждом этапе пути.
            </p>
          </div>

          <div className="button-section flex justify-center">
            <button className='hero-btn bg-yellow-300 hover:bg-yellow-700 hover:text-white text-black font-bold py-2 px-4 rounded-full'>Начать 7-дневную бесплатную пробную версию</button>
          </div>

        </div>

      </div>


    </section>
  )
}

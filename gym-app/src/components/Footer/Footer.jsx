import React from 'react'
import Image from 'next/image';
import TimeTablework from '/public/assets/images/time-table/dumbbell.png';

export const Footer = () => {
  return (

    <footer className=" rounded-lg shadow bg-neutral-900 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#logo-id-link" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <Image width={1920} height={1080} className='stock-icon-img w-full' src={TimeTablework} alt="-_-" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GYM</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#first-link" className="hover:underline me-4 md:me-6">Акции</a>
            </li>
            <li>
              <a href="#two-link " className="hover:underline me-4 md:me-6">Тренера</a>
            </li>
            <li>
              <a href="#three-link" className="hover:underline me-4 md:me-6">Виды тренеровок</a>
            </li>
            <li>
              <a href="#thour-link" className="hover:underline me-4 md:me-6">Расписание</a>
            </li>
            <li>
              <a href="#five-link" className="hover:underline me-4 md:me-6">Прайс</a>
            </li>
            <li>
              <a href="#six-link" className="hover:underline me-4 md:me-6">Форма</a>
            </li>

          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}

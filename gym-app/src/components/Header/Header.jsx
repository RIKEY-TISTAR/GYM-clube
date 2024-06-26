import React from 'react'
import Image from 'next/image';
import TimeTablework from '/public/assets/images/time-table/dumbbell.png';
import Logo from '/public/assets/images/logo/logo.jpg';

export const Header = () => {
  return (
    <header className='header' id='logo-id-link'>
      <div className="container mx-auto">

        <nav className="container mx-auto bg-transparent w-full absolute z-10">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

              <div id='burger-menu' className="burger-menu absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button--> */}
                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                  {/* <!--
                  Icon when menu is closed.

                  Menu open: "hidden", Menu closed: "block"
          --> */}
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  {/* <!--
                  Icon when menu is open.

                  Menu open: "block", Menu closed: "hidden"
          --> */}
                  <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="navbar flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <a href="#logo-id-link" className="flex flex-shrink-0 items-center">
                  <Image width={1920} height={1080} className='stock-icon-img w-full' src={TimeTablework} alt="-_-" />
                </a>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    {/* <a href="#" className=" text-gray-300 hover:text-white rounded-md px-3 py-2 text-mb font-medium" aria-current="page">Dashboard</a> */}
                    <a href="#first-link" className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-mb font-medium">Акции</a>
                    <a href="#two-link"   className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-mb font-medium">Тренера</a>
                    <a href="#three-link" className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-mb font-medium">Виды тренеровок</a>
                    <a href="#thour-link" className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-mb font-medium">Расписание</a>
                    <a href="#five-link"  className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-mb font-medium">Прайс</a>
                    <a href="#six-link"   className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-mb font-medium">Форма</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className="navbar-sm sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a href="#first-link" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Акции</a>
              <a href="#two-link" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Тренера</a>
              <a href="#three-link"  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Виды тренеровок</a>
              <a href="#thour-link" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Расписание</a>
              <a href="#five-link" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Прайс</a>
              <a href="#six-link" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Форма</a>
            </div>
          </div>
          
        </nav>
        
      </div>
    </header>
  )
}



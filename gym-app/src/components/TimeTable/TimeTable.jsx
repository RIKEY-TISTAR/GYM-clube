import React from 'react'
import Image from 'next/image';
import TimeTablework from '/public/assets/images/time-table/dumbbell.png';
import TimeTableweekends from '/public/assets/images/time-table/rest.png';

export const TimeTable = () => {
    return (
        <section className='timetable my-28'>

            <div className="container mx-auto">

                <div className="timetable-inner h-32 flex flex-col justify-center items-center ">

                    <h2 className="timetable-title text-center text-5xl font-bold">
                        Расписание
                    </h2>

                    <div className="timetable-section">

                        <div className="timetable-work">

                            {/* <div className="timetable-work-icon">
                        <Image width={1920} height={1080} className='timetable-work-icon-img w-full' src={TimeTablework} alt="-_-" />
                            </div> */}

                            <div className="timetable-work-desc-section p-2">
                                <p className="timetable-work-desc text-center">
                                    В буднии дни мы работаем с 6:00 до 18:00 вы также можете лично договоится с тренером на счет личных тренировочных сессий.
                                </p>
                            </div>
                            
                        </div>

                        <div className="timetable-weekends">

                        </div>

                    </div>


                </div>

            </div>

        </section>
    )
}

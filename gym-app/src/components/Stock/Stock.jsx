import React from 'react'

export const Stock = () => {
    return (
        <section className='stock'>
            <div className="container mx-auto">

                <div className="stock-inner">

                    <div className="stock-text">
                        <h4 className="stock-title text-center">
                            Акция!
                        </h4>

                        <p className="stock-subtitle">
                            Преведи друга и получи абанемент на 3м бесплатно
                        </p>
                    </div>

                    <div className="stock-time">

                        <p className="stock-time-title">
                            До конца акции осталось
                        </p>

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

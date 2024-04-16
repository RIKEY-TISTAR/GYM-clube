"use client";
import GlobalApi from '@/Utils/GlobalApi';
import React, { useEffect, useState } from 'react'

export const Form = () => {
    const [name,setName] = useState();
    const [password,setPassword] = useState();
    const [formField,setFormField] = useState(false);

    useEffect(() =>{
        if (name && password ) {
            setFormField(true);
        }else {
            setFormField(false)
        }
    }, [ name, password ]);

    const saveFields = () => {
        const data = {
            data: {
                name: name,
                password: password
            }
        }
        GlobalApi.createForms(data).then(resp => {
            console.log(resp);
            if (resp) {
                alert("Все отправилось");
            }
        })
    }

    

    return (
        <section className='form mb-20' id='six-link'>
            <div className="container mx-auto flex justify-center">

                <div className="w-full max-w-3xl shadow-lg bg-neutral-900 border-2 border-green-500 p-6 rounded-2xl">
                    
                    <div className="md:flex md:items-center mb-6">

                        <div className="md:w-full">
                            <input onChange={(e) => setName(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Full Name'/>
                        </div>

                    </div>

                    <div className="md:flex md:items-center mb-6">

                        <div className="md:w-full">
                            <input  onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="Password"/>
                        </div>

                    </div>

                    <div className="md:flex md:items-center mb-6">
                        {/* <div className="md:w-1/3"></div> */}

                        <label className="md:w-full block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox"/>
                                <span className="text-sm">
                                    Send me your newsletter!
                                </span>
                        </label>

                    </div>

                    <div className="md:flex md:items-center md:justify-center">
                        {/* <div className="md:w-1/3"></div> */}

                        <div className="md:w-full">
                            <button disabled={!formField} onClick={() => saveFields()} className="uppercase bg-transparent hover:bg-green-600 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" type="button">
                                Sign Up
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

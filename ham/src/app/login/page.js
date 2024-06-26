"use client"
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Loginpage() {

    const [email, setEmail] = useState("test1@example.com")
    const [password, setPassword] = useState("hammbebe")

    async function handleSubmitLogin(ev) {
        ev.preventDefault()
        try {
            const response = await signIn('credentials', { email, password })
            console.log(response, "response")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitLogin} className='flex flex-col justify-center items-center mx-auto shadow-lg w-[400px] bg-sekunder rounded-md  mt-6 gap-y-2 '>
                <h1 className='text-4xl mb-4 font-serif font-light '>Login</h1>
                <label className='font-bold' htmlFor="Email">
                    <input className='border-2 rounded-md w-[300px] ml-4 h-12 mb-3 bg-slate-200 px-4 text-black' placeholder='Email' type="text" value={email} onChange={(ev) => setEmail(ev.target.value)} />
                </label>
                <label className='font-bold' htmlFor="Password">
                    <input className='border-2 rounded-md w-[300px] ml-4 h-12 mb-3 bg-slate-200 px-4 text-black' type="text" placeholder='Password' value={password} onChange={(ev) => setPassword(ev.target.value)} />
                </label>
                <button type='submit' className='bg-primer text-black w-full'>
                    Login
                </button>
                <p className='text-center text-slate-500'>-Or Login with-</p>
                <button className='bg-sekunder flex justify-center items-center gap-x-5 w-full  hover:bg-slate-200 hover:text-black mb-2'>
                    <Image src={"/google.png"} alt='google' width={15} height={15} /> Google
                </button>
                <div>
                    no account yet? {" "}
                    <Link className='text-slate-600 ' href={"/register"} >Registration page here &raquo;</Link>
                </div>
            </form>
        </div>
    )
}

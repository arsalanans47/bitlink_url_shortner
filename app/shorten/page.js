"use client"
import { Code } from 'mongodb';
import React, { useState } from 'react';


const shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())

            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setShorturl("")
                console.log(result)})
            .catch ((error) => console.error(error));
    }


return (
    <div className='mx-auto max-w-lg bg-purple-100 my-15 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>Generate your short URLs.</h1>
        <div className='flex flex-col gap-2'>
            <input type="text"
                value={url}
                className=' bg-white px-4 py-2 focus:outline-purple-600 rounded-xl'
                placeholder='Enter your URL'
                onChange={e => { seturl(e.target.value) }} />

            <input type="text"
                value={shorturl}
                className=' bg-white px-4 py-2 focus:outline-purple-600 rounded-xl'
                placeholder='Enter your preferred short URL text'
                onChange={e => { setShorturl(e.target.value) }} />


            <button onClick={generate} className='bg-purple-400 shadow-lg text-white my-3 rounded-xl py-1 font-bold p-3'>Generate</button>


        </div>
        {generated && <Code>
            {generated}
            </Code>}
    </div>
)
}

export default shorten

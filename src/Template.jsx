import Head from 'next/head'
import ScrollToTop from "react-scroll-to-top";
import Loading from '../src/components/Global/Loading'
import React, { useState, useEffect } from 'react';
const Template = (props) => {
    let [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    return (

        loading ? <Loading></Loading> : <div>
            <Head>
                <title>SF Technologies - Software Development | Digital Solution | IT Services</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="apple-touch-icon" sizes="180x180" href="/website/2022/11/assets/apple-touch-icon.d047f6.png" />
                <link rel="icon" type="image/png" sizes="64x64" href="./images/Frame 14.svg"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/website/2023/06/assets/favicon-32x32.164049.png"></link>
                <script src="js.js"></script>
            </Head>
            <div >
                {props.children}
                <ScrollToTop smooth />
            </div>
        </div>

    )
}

export default Template
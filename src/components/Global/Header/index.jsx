import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const index = () => {
    const [activeBtn, Setactive] = useState(false)
    const btnToggle = ()=>{
        Setactive(!activeBtn)
    }

    const router = useRouter();
    useEffect (()=>{
        Setactive(router.pathname)
    },[router])


    return (
        <>
            <nav className="navbar">
                <div className="navbar__container" bis_skin_checked={1}>
                    <div className="main-content" bis_skin_checked={1}>
                        <div className="container container--full-width container--flex container--flex--space-between" bis_skin_checked={1}>
                            <div className="logo-container" bis_skin_checked={1}>
                                <Link className="logo" href="/"><img src="/images/header/Frame 14.svg" alt="NTQ SOLUTION" /></Link>
                                <Link className="logo_1" href="/"><img src="https://media.discordapp.net/attachments/1124173580960268328/1124243236949606491/CF_1-01.png?width=657&height=605" alt="NTQ SOLUTION" /></Link>
                            </div>
                            <div className="menu-container" bis_skin_checked={1}>
                                <ul className="menu">
                                    <li className="menu__item menu__item--main">
                                        <Link className={`menu__item__link menu__item__expandable-link ${activeBtn == '/services' ? 'active_link' : ''}`} href="/services" id="r-and-d-option" bis_skin_checked={1}>Services</Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link className={`menu__item__link menu__item__expandable-link ${activeBtn == '/Industrie' ? 'active_link' : ''}`} href="/Industrie" id="r-and-d-option" bis_skin_checked={1}>Industries</Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link href='/aboutus'><span className={`menu__item__link menu__item__expandable-link ${activeBtn == '/aboutus' ? 'active_link' : ''}`} id="insight-option">About Us</span></Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link href="/recruitment"><span className={`menu__item__link menu__item__expandable-link ${activeBtn == '/recruitment' ? 'active_link' : ''}`} id="insight-option">Recruitment</span></Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link href='/contacts'><span className={`menu__item__link menu__item__expandable-link ${activeBtn == '/contacts' ? 'active_link' : ''}`}>Contact us</span></Link>
                                    </li>
                                    <li className="menu__item menu__item--language"><span className="current-language"><span className="current-language__text">EN</span><i className="material-icons current-language__icon current-language__icon--expand">expand_more</i>
                                        <i className="material-icons current-language__icon current-language__icon--collapse">expand_less</i></span>
                                        <div className="language-dropdown" bis_skin_checked={1}> <a href="" className="language-dropdown__option" bis_skin_checked={1}> VN </a> </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default index
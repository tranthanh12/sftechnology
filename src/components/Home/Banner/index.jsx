import React from 'react'
import { useState, useEffect } from 'react'

const index = () => {
    const [bannerIndex, setBannerIndex] = useState(1)

    useEffect(()=>{
        let time = setInterval(()=>{
            setBannerIndex(bannerIndex + 1)
            if (bannerIndex >= 5) {
                setBannerIndex(1)
            }
        },5000)

        return function cleanup() {
            clearInterval(time)
        }
    }, [bannerIndex])

    return (
        <>
            <div className="slider" bis_skin_checked={1}>
                <div className="swiper-container page-banner-slider swiper-container-fade swiper-container-initialized swiper-container-horizontal" style={{ cursor: 'grab' }} bis_skin_checked={1}>
                    <div className="swiper-wrapper" id="swiper-wrapper-99dce5c0a52df8da" aria-live="off" style={{ transitionDuration: '0ms' }} bis_skin_checked={1}>
                        <div className={`swiper-slide slides__item swiper-slide-duplicate ${bannerIndex == 1 ? 'swiper-slide-active' : ''}`} style={{ backgroundImage: 'url("./images/banner/Group 8.png")', width: '1860px', transitionDuration: '0ms', opacity: `${bannerIndex == 1 ? 1 : 0}` , transform: 'translate3d(0px, 0px, 0px)' }} data-swiper-slide-index={4} role="group" aria-label="1 / 7" bis_skin_checked={1}>
                            <div className="container" bis_skin_checked={1}>
                                <div className="title" bis_skin_checked={1}>Mobile Application Development</div>
                                <div className="subtitle" bis_skin_checked={1}>The world is becoming more mobile. Why not
                                    profiting from this trend to develop your business idea? Tell us your story, we will
                                    tell you how to build it. </div>
                                <div className="action-container" bis_skin_checked={1}><a className="button button--primary" href="/mobile-application/" bis_skin_checked={1}> Read More </a></div>
                            </div>
                        </div>
                        <div className={`swiper-slide slides__item swiper-slide-duplicate ${bannerIndex == 2 ? 'swiper-slide-active' : ''}`} style={{ backgroundImage: 'url("./images/banner/Group 8.png")', width: '1860px', transitionDuration: '0ms', opacity: `${bannerIndex == 2 ? 1 : 0}`, transform: 'translate3d(-1860px, 0px, 0px)' }} data-swiper-slide-index={0} role="group" aria-label="2 / 7" bis_skin_checked={1}>
                            <div className="container" bis_skin_checked={1}>
                                <div className="title" bis_skin_checked={1}>sf-technology sawarded TOP 10 VIETNAM ICT 2022</div>
                                <div className="subtitle" bis_skin_checked={1}>This prestigious award honors top IT enterprises
                                    based on their high growth rate, high-quality solutions, and technological
                                    breakthroughs. </div>
                                <div className="action-container" bis_skin_checked={1}><a className="button button--primary" href="https://ntq.com.vn/newsroom/ntq-top-10-ict-2022/" bis_skin_checked={1}> Read
                                    more </a></div>
                            </div>
                        </div>
                        <div className={`swiper-slide slides__item swiper-slide-duplicate ${bannerIndex == 3 ? 'swiper-slide-active' : ''}`} style={{ backgroundImage: 'url("./images/banner/Group 9.png")', width: '1860px', transitionDuration: '0ms', opacity: `${bannerIndex == 3 ? 1 : 0}`, transform: 'translate3d(-3720px, 0px, 0px)' }} data-swiper-slide-index={1} role="group" aria-label="3 / 7" bis_skin_checked={1}>
                            <div className="container" bis_skin_checked={1}>
                                <div className="title" bis_skin_checked={1}>Mobile Application Development</div>
                                <div className="subtitle" bis_skin_checked={1}>Find best tech talent and rapidly scale your
                                    delivery capability. Let our engineers walk you through any challenges with deep
                                    expertise &amp; great experience.</div>
                                <div className="action-container" bis_skin_checked={1}><a className="button button--primary" href="/dedicated-development-team/" bis_skin_checked={1}> Read more </a></div>
                            </div>
                        </div>
                        <div className={`swiper-slide slides__item swiper-slide-duplicate ${bannerIndex == 4 ? 'swiper-slide-active' : ''}`} style={{ backgroundImage: 'url("./images/banner/Group 10.png")', width: '1860px', transitionDuration: '0ms', opacity: `${bannerIndex == 4 ? 1 : 0}`, transform: 'translate3d(-5580px, 0px, 0px)' }} data-swiper-slide-index={2} role="group" aria-label="4 / 7" bis_skin_checked={1}>
                            <div className="container" bis_skin_checked={1}>
                                <div className="title" bis_skin_checked={1}>Mobile Application Development</div>
                                <div className="subtitle" bis_skin_checked={1}>
                                    Find best tech talent and rapidly scale your delivery capability. Let our engineers walk you through any challenges with deep expertise & great experience.
                                </div>
                                <div className="action-container" bis_skin_checked={1}><a className="button button--primary" href="/enterprise-software-development/" bis_skin_checked={1}> Read more </a></div>
                            </div>
                        </div>
                        <div className={`swiper-slide slides__item swiper-slide-duplicate ${bannerIndex == 5 ? 'swiper-slide-active' : ''}`} style={{ backgroundImage: 'url("./images/banner/Group 8.png")', width: '1860px', transitionDuration: '0ms', opacity: `${bannerIndex == 5 ? 1 : 0}`, transform: 'translate3d(-7440px, 0px, 0px)' }} data-swiper-slide-index={3} role="group" aria-label="5 / 7" bis_skin_checked={1}>
                            <div className="container" bis_skin_checked={1}>
                                <div className="title" bis_skin_checked={1}>Website Application Development </div>
                                <div className="subtitle" bis_skin_checked={1}>Why wait and watch the way? Let our experts help
                                    build the best in class, end-to-end web solutions that cater your business needs. </div>
                                <div className="action-container" bis_skin_checked={1}><a className="button button--primary" href="/website-application/" bis_skin_checked={1}> Read more </a></div>
                            </div>
                        </div>
                        <div className="swiper-slide slides__item swiper-slide-duplicate" style={{ backgroundImage: 'url("https://ntq.com.vn/media/Z4ojS7kPTrCYmRwTAuiI")', width: '1860px', transitionDuration: '0ms', opacity: 0, transform: 'translate3d(-11160px, 0px, 0px)' }} data-swiper-slide-index={0} role="group" aria-label="7 / 7" bis_skin_checked={1}>
                            <div className="container" bis_skin_checked={1}>
                                <div className="title" bis_skin_checked={1}>sf-technology  awarded TOP 10 VIETNAM ICT 2022</div>
                                <div className="subtitle" bis_skin_checked={1}>This prestigious award honors top IT enterprises
                                    based on their high growth rate, high-quality solutions, and technological
                                    breakthroughs. </div>
                                <div className="action-container" bis_skin_checked={1}><a className="button button--primary" href="https://ntq.com.vn/newsroom/ntq-top-10-ict-2022/" bis_skin_checked={1}> Read
                                    more </a></div>
                            </div>
                        </div>
                    </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                </div>
                <div className="swiper-pagination page-banner-slider-pagination swiper-pagination-clickable swiper-pagination-bullets" bis_skin_checked={1}>
                    <span onClick={()=>{setBannerIndex(1)}} className={`swiper-pagination-bullet ${bannerIndex == 1 ? "swiper-pagination-bullet-active" : '' }`} tabIndex={0} role="button" aria-label="Go to slide 1" />
                    <span onClick={()=>{setBannerIndex(2)}} className={`swiper-pagination-bullet ${bannerIndex == 2 ? "swiper-pagination-bullet-active" : '' }`} tabIndex={0} role="button" aria-label="Go to slide 2" />
                    <span onClick={()=>{setBannerIndex(3)}} className={`swiper-pagination-bullet ${bannerIndex == 3 ? "swiper-pagination-bullet-active" : '' }`} tabIndex={0} role="button" aria-label="Go to slide 3" />
                    <span onClick={()=>{setBannerIndex(4)}} className={`swiper-pagination-bullet ${bannerIndex == 4 ? "swiper-pagination-bullet-active" : '' }`} role="button" aria-label="Go to slide 4" />
                    <span onClick={()=>{setBannerIndex(5)}} className={`swiper-pagination-bullet ${bannerIndex == 5 ? "swiper-pagination-bullet-active" : '' }`} role="button" aria-label="Go to slide 5" />
                </div>
            </div>
        </>
    )
}

export default index
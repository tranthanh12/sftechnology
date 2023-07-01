import React from 'react'
import style from './style.module.css'

const index = () => {
    return (
        <div>
            <div className={style.content_company}>
                <div className={style.content_company_title}>
                    <p>ABOUT US</p>
                    <div className={style.content_company_line}></div>
                </div>
                <div className={style.content_company_text}>
                    <p>Part of SF-Technologies , we are experts in technology</p>
                    <p>SF-Technologies exists in a group that boasts a global</p>
                    <p>technology talent solutions business.</p>
                    <p>We deliver smart solutions that solve business challenges and create value.</p>
                </div>
                <div className={style.content_company_img}>
                    <img src="./images/banner/Frame 42962 (1).png" alt="" />
                </div>

                <div className={style.content_company_text2}>

                    <span>We care, we share, we innovate</span>
                    <span>Supportive environment encouraging friendliness and openness</span>

                </div>
                <div className={style.content_company_imgbottom}>
                    <img src="./images/banner/Rectangle 1 (1).png" alt="" />
                    <img src="./images/banner/Rectangle 2 (1).png" alt="" />
                    <img src="./images/banner/Rectangle 3 (1).png" alt="" />
                    <img src="./images/banner/Rectangle 4 (1).png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default index

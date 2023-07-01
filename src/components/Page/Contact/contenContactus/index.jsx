import React from 'react'
import style from './style.module.css'
const index = () => {
    return (
        <div className={style.tonhat}>
            <div className={style.contenContactus}>
                <div className={style.contenContactus_text}>
                    <div className={style.contenContactus_text_title}>
                        <p>CONTACT US</p>
                    </div>
                    <div className={style.contenContactus_text_mota}>
                        <p>We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results</p>
                    </div>
                    <div className={style.contenContactus_text_input}>

                        <div className={style.contenContactus_text_input_child}>
                            <p className={style.contenContactus_text_input_title}>Name <span>*</span></p>
                            <input type="text" placeholder='joe smith' />
                        </div>
                        <div className={style.contenContactus_text_input_child}>
                            <p className={style.contenContactus_text_input_title}>Phone <span>*</span></p>
                            <input type="text" placeholder='123123123' />
                        </div>
                        <div className={style.contenContactus_text_input_child}>
                            <p className={style.contenContactus_text_input_title}>Quantily <span>*</span></p>
                            <input type="text" placeholder='Quantily' />
                        </div>
                        <div className={style.contenContactus_text_input_child}>
                            <p className={style.contenContactus_text_input_title}>Email Address <span>*</span></p>
                            <input type="text" placeholder='address' />
                        </div>
                        <div className={style.contenContactus_text_input_child}>
                            <p className={style.contenContactus_text_input_title}>Requested Completion Date <span>*</span></p>
                            <input type="date" placeholder='' className={style.contenContactus_text_input_title_date} />
                        </div>
                        <div className={style.contenContactus_text_input_child}>
                            <p className={style.contenContactus_text_input_title}>Company/Project Name <span>*</span></p>
                            <input type="text" placeholder='Project name' />
                        </div>
                    </div>

                </div>
                <div></div>
                <div className={style.contenContactus_img}>
                    <img src="./images/banner/BG.png" alt="" />
                </div>
            </div>

            <div className={style.textarena}>
                <div className={style.textarena_title}>
                    <p>Project Description <span>*</span></p>
                </div>
                <input type="text" />

            </div>
            <div className={style.policy}>
                <input type="checkbox" /><span>You agree to our friendly privacy policy.</span>
            </div>
            <div className={style.send}>
                <p>Send message</p>
            </div>
        </div>

    )
}

export default index
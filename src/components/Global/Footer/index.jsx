import React from 'react'
import style from './style.module.css'

const index = () => {
    return (
        <section>
            <div className={style.footer}>
                <div className={style.box_information}>
                    <div className={style.address_company}>
                        <div className={style.address_content}>
                            <div className={style.logo_company}>
                                <img src="/images/Frame 14.svg" alt="" />
                            </div>

                            <div className={style.address}>
                                <div className={style.address_title}>
                                    <p>Address</p>
                                </div>

                                <div className={style.address_detail}>
                                    <span>26 lane 57 Trung Van, Nam Tu Liem district,Hanoi city</span>
                                </div>
                            </div>

                            <div className={style.address}>
                                <div className={style.address_title}>
                                    <p>Working Hours:</p>
                                </div>

                                <div className={style.address_detail}>
                                    <span>9:00AM To 6:00PM</span>
                                </div>
                            </div>

                            <div className={style.address}>
                                <div className={style.address_title}>
                                    <p>Contact</p>
                                </div>

                                <div className={style.address_detail}>
                                    <span>088 685 54 44</span>
                                    <span>admin@sf-technologiesgroup.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.form_message}>
                        <div className={style.box_infor}>
                            <div className={style.title_message}>
                                <span>MESSAGE</span>
                            </div>

                            <div className={style.content_message}>
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </span>
                            </div>

                            <div className={style.form_infor} id={'form_infor'}>
                                <form action="">
                                    <div className={style.title_input}>
                                        <p>Name</p>
                                        <input type="text" name="Name" id="" />
                                    </div>

                                    <div className={style.title_input}>
                                        <p>Email</p>
                                        <input type="Email" name="Email" id="" />
                                    </div>

                                    <div className={style.input_textArea}>
                                        <p>Message</p>
                                        <input type="text" name="Message" id="" />
                                    </div>

                                    <div className={style.btn_submit}>
                                        <input type="submit" value="Send" />
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={style.Technologies}>
                    <p>2023 © SF Technologies Group</p>
                </div>
            </div>
        </section>
    )
}

export default index
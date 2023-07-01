import React from 'react'
import style from './style.module.css'

const index = () => {
    return (
        <div className='body'>
            <main>
                <div className={style.background_banner}></div>

                <div className={style.box_industrie}>
                    <div className={style.banner_industrie}>
                        <div className={style.img_banner}>
                            <div className={style.title_banner}></div>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.box_support}>
                        <div className={style.box_item}>
                            <div className={style.item}>
                                <div className={style.title_item}>Banking and finance</div>
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Group.png" alt="" />
                                </div>
                            </div>

                            <div className={style.item} id={'item_active'}>
                                <div className={style.title_item}>Banking and finance</div>
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Group (1).png" alt="" />
                                </div>
                            </div>

                            <div className={style.item}>
                                <div className={style.title_item}>Banking and finance</div>
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Group (3).png" alt="" />
                                </div>
                            </div>

                            <div className={style.item} id={'item_active'}>
                                <div className={style.title_item}>Banking and finance</div>
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Group (4).png" alt="" />
                                </div>
                            </div>

                            <div className={style.item}>
                                <div className={style.title_item}>Banking and finance</div>
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Group (3).png" alt="" />
                                </div>
                            </div>

                            <div className={style.item} id={'item_active'}>
                                <div className={style.title_item}>Banking and finance</div>
                                <div className={style.item_icon}>
                                    <img src="./images/industrie/Group (4).png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default index
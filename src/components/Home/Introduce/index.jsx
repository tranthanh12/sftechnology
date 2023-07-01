import React from 'react'
import style from './style.module.css'
import {Link} from 'react-scroll'

const index = () => {

    return (
        <div className={style.box_introduce}>
            <div className={style.introduce_container}>
                <div className={style.introduce_title}>
                    <p>Future SF-Technologies</p>
                </div>

                <div className={style.introduce_content}>
                    <div className={style.introduce_list_item}>
                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                    Be one of outstanding from Vietnam, SF-Technologies is a Development & Design expert company providing superior Software,
                                    Web, Mobile and Creative Designing solutions and services globally.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                    Be one of outstanding from Vietnam, SF-Technologies is a Development & Design expert company providing superior Software,
                                    Web, Mobile and Creative Designing solutions and services globally.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                    Be one of outstanding from Vietnam, SF-Technologies is a Development & Design expert company providing superior Software,
                                    Web, Mobile and Creative Designing solutions and services globally.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                    Be one of outstanding from Vietnam, SF-Technologies is a Development & Design expert company providing superior Software,
                                    Web, Mobile and Creative Designing solutions and services globally.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                    Be one of outstanding from Vietnam, SF-Technologies is a Development & Design expert company providing superior Software,
                                    Web, Mobile and Creative Designing solutions and services globally.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                    Be one of outstanding from Vietnam, SF-Technologies is a Development & Design expert company providing superior Software,
                                    Web, Mobile and Creative Designing solutions and services globally.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <ul>
                                <li>
                                    Quality, well-managed and try to best to scope customer's needs are our Definition of Done.
                                </li>
                            </ul>
                        </div>

                        <div className={style.item}>
                            <div className={style.line_1}></div>
                            <div className={style.button_contact_us}>
                                <Link to="form_infor" spy={true} smooth={true}>
                                    <input type="button" value="Contac Us" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default index
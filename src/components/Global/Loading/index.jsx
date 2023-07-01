import React from 'react'
import ReactLoading from "react-loading";
import style from './style.module.css'

const index = () => {

    return (
        <div className={style.loading}>
            <ReactLoading
                type={"bars"}
                color={"#03fc4e"}
                height={100}
                width={100}
            />
        </div>
    )
}

export default index
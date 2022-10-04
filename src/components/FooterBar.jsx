import React, { useRef } from 'react'
import style from './style.module.css'
import { useAppContext } from '../utils/Contexto'

export const FooterBar = () => {
    const con = useAppContext()
    const ref = useRef()

    function handleClick(e){
      const info = ref.current.innerHTML
      navigator.clipboard.writeText(info)
      e.target.className = 'bi bi-clipboard-check'
    }

  return (
    <div className={style.footerContainer}>
        <h3 ref={ref}>box-shadow: {con.inset} {con.h}px {con.v}px {con.blur}px {con.spread}px {con.shadow};</h3>
        <span className={style.fotterCopy}>
        <i onClick={handleClick} className="bi bi-clipboard"></i>
        </span>
    </div>
  )
}

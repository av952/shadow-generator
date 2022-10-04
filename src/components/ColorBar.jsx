import React from 'react'
import style from './style.module.css'
import { useAppContext } from '../utils/Contexto'

export const ColorBar = () => {
    const contexto = useAppContext()
  return (
    <div className={style.colorBar}>
      <input value={contexto.colorback} onChange={(e)=>contexto.changeColorback(e.target.value)} type="color" name="color-back"/>
        <input value={contexto.color} onChange={(e)=>contexto.changeColor(e.target.value)} type="color" name="color-left"/>
        <input  onChange={(e)=>contexto.changeShadow(e.target.value)} type="color" name="color-right"/>
    </div>
  )
}

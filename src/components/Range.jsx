import React from 'react'
import style from './style.module.css'
import { useAppContext } from '../utils/Contexto'
import { InputRange } from './InputRange'

export const Range = () => {
  const con = useAppContext()
  function hanleClick(e){
    const value = e.target.value
    switch(e.target.name){
      case 'h':
        con.changeH(value)
        break
      case 'v':
        con.changeV(value)
        break
      case 'blur':
        con.changeBlur(value)
        break
      case 'spread':
        con.changeSpread(value)
        break
    }
  }

  function handleChange() {
    if(con.inset=='inset'){
      con.changeInset('')
      return
    }
    con.changeInset('inset')
  }

  return (
    <div className={style.rangeContainer}>
        <InputRange info={con.h} name={'h'}  onchage={hanleClick} ></InputRange>
        <InputRange info={con.v} name={'v'} onchage={hanleClick}></InputRange>
        <InputRange info={con.blur} name={'blur'} onchage={hanleClick}></InputRange>
        <InputRange info={con.spread} name={'spread'} onchage={hanleClick}></InputRange>
        <div className={style.checkBoxRange}>
        <input  onChange={handleChange} type="checkbox" name="check"/><span>inset</span>
        </div>
    </div>
  )
}

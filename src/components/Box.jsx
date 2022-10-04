import style from './style.module.css'
import { useAppContext } from '../utils/Contexto'

export const Box = () => {
    const con = useAppContext()
    console.log(con.inset);

  return (

    <div style={{padding:'1%'}}>
      
    <div  style={{
      height:'200px',
      width: '200px',
      backgroundColor:`${con.color}`,
      margin:'0 auto',
      boxShadow: ` ${con.inset} ${con.h}px  ${con.v}px ${con.blur}px ${con.spread}px ${con.shadow}`
    }} >

    </div>
      </div>

  )
}

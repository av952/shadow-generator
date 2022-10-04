import { createContext, useContext, useState } from "react";

const Appcontext = createContext({
    h:0,
    v:0,
    blur:0,
    spread:0,
    color:'',
    shadow:'',
    inset:'',
    colorback:'',
    changeColor:()=>{},
    changeH:()=>{},
    changeV:(e)=>{},
    changeBlur:(e)=>{},
    changeShadow:(e)=>{},
    changeSpread:(e)=>{},
    changeInset:(e)=>{},
    changeColorback:(e)=>{},
})

export default function Contexto({children}){
    const [h,setH] = useState(10)
    const [v,setV] = useState(0)
    const [blur,setBlur] = useState(0)
    const [spread,setSpread] = useState(0)
    const [color,setColor] = useState('#800080')
    const [shadow,setShadow] = useState('black')
    const [colorback,setColorback] = useState('#ffffff')
    const [inset,setInset] = useState('')

    const changeColor =(e)=>{
        setColor(e)
    }
    const changeH=(e)=>{
        setH(e)
    }
    const changeV=(e)=>{
        setV(e)
    }
    const changeBlur=(e)=>{
        setBlur(e)
    }
    const changeShadow=(e)=>{
        setShadow(e)
    }
    const changeSpread=(e)=>{
        setSpread(e)
    }
    const changeInset=(e)=>{
        setInset(e)
    }
    const changeColorback=(e)=>{
        setColorback(e)
    }

    return(
        <Appcontext.Provider
        value={{
            h,
            v,
            blur,
            spread,
            color,
            shadow,
            inset,
            colorback,
            changeColor,
            changeH,
            changeV,
            changeBlur,
            changeShadow,
            changeSpread,
            changeInset,
            changeColorback

        }}
        >
            {children}
        </Appcontext.Provider>
    )
}

export function useAppContext(){
    
    return useContext(Appcontext)
  }
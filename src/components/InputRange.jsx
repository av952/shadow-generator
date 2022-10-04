import style from './style.module.css'
export const InputRange = ({info,name,onchage}) => {
    return<>
    <div className={style.inputContainer}>
        {name}
    <input type="range" name={name} value={info} onChange={onchage} min='0' max='100'/>
    </div>
    </>
}

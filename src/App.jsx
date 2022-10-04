
import './App.css'
import { Box } from './components/Box'
import { ColorBar } from './components/ColorBar'
import { FooterBar } from './components/FooterBar'
import { Range } from './components/Range'
import { useAppContext } from './utils/Contexto'
import style from './components/style.module.css'

function App() {
  const con = useAppContext()
  return (
    <div style={{backgroundColor:`${con.colorback}`}}>
      <div className={style.applink}>
      <a href="https://github.com/av952" target={'_blank'}>
      <i class="bi bi-github"></i>
      </a>
      </div>
    <ColorBar/>
    <Box/>
    <Range/>
    <FooterBar/>
    </div>
  )
}

export default App

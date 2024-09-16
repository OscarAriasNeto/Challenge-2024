import './app.css'
import Cabecalho from './componentes/main/Cabecalho';
import { Outlet } from 'react-router-dom';

export function App() {
  

  return (
    <><Cabecalho/>
    <Outlet /></>
  )
}

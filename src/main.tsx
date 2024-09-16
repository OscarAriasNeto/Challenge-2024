import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import{ createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './componentes/main/Home/index.tsx';
import Diagnosticos from './componentes/Diagnosticos/index.tsx';
import Oficinas from './componentes/Oficinas/index.tsx';
import Cadastro from './componentes/Cadastro/index.tsx';
import Integrantes from './componentes/Integrantes/index.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/diagnosticos",
                element: <Diagnosticos />
            },
            {
                path: "/Oficinas",
                element: <Oficinas />
            },
            {
                path: "/Cadastro",
                element: <Cadastro />
            },
            {
                path: "/Integrantes",
                element: <Integrantes />
            }
            ]
    },

])

render(<RouterProvider router={router}/>, document.getElementById('app')!)

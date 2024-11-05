import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

//PAGES
import HomePage from './routes/HomePage'
import SobreNosNewPage from './routes/SobreNosNewPage'
import CadastroPage from './components/Cadastro'
import LoginPage from './components/Login'
import Blog from './routes/BlogPage'
import AbastecendoVeiculo from './components/Abastecer'
import PequenasManutencoes from './components/Manutencao'
import DirecaoDefensiva from './components/Direcao'
import LimpezaAutomovel from './components/Limpar'
import Chat from './routes/ChatPage'
//const router = createBrowserRouter([
//  {
//    path:"/",
//    element: <HomePage/>
//  },
//  {
//    path:"blog-page",
//    element: <BlogPage/>
//  },
//  
//])


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <HomePage/>,
      },
      {
        path:"sobre-nos-new-page",
        element: <SobreNosNewPage/>,
      },
      {
        path:"chat-page",
        element: <Chat/>,
      },
      {
        path:"cadastro-page",
        element: <CadastroPage/>,
      },
      {
        path:"login-page",
        element: <LoginPage/>,
      },
      {
        path:"blog-page",
        element: <Blog/>,
      },
      {
        path:"blog-page-abastecer",
        element: <AbastecendoVeiculo/>,
      },
      {
        path:"blog-page-manutencao",
        element: <PequenasManutencoes/>,
      },
      {
        path:"blog-page-direcao",
        element: <DirecaoDefensiva/>,
      },
      {
        path:"blog-page-limpeza",
        element: <LimpezaAutomovel/>,
      },
    ]
  },
  
  
])

createRoot(document.getElementById('root')!).render(//
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)























//import CarAnalysysPage from './components/CarAnalysis.tsx';
//import PassosDoDiagnostcio from './components/Passos.tsx';
//import SobreNos from './components/SobreNos.tsx';
//import Footer from './components/Footer.tsx';
//import WaveSection from './components/Wave.tsx';
//import AlunosPage from './components/Alunos.tsx';
//import Navbar from './components/Navbar.tsx';
//
//createRoot(document.getElementById('root')!).render(//
//  <StrictMode>
//    <Navbar/>
//    <WaveSection/>
//    <CarAnalysysPage/>
//    <PassosDoDiagnostcio/>
//    <SobreNos/>
//    <AlunosPage/>
//    <Footer/>
//  </StrictMode>,
//)



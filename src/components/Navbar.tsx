import {IconMenu2} from "@tabler/icons-react"
import { useResponsive } from "../hooks/useResponsive"
import { useState } from "react"
interface MobileMenuProps {
  handler: () => void;
}

function MobileMenu({handler}:MobileMenuProps){
  return(
    <section className="fixed flex flex-col top-0 left-0 w-screen h-screen bg-zinc-800 z-50 items-center justify-center text-white gap-10">
      <a href="#services"><p className="text-center text-5xl hover:text-red-600" onClick={handler}>Servicios</p></a>
      <a href="#gallery"><p className="text-center text-5xl hover:text-red-600" onClick={handler}>Galeria</p></a>
      <a href="#products"><p className="text-center text-5xl hover:text-red-600" onClick={handler}>Productos</p></a>
      <a href="https://www.alejovilches.com.ar"><p className="text-center text-5xl hover:text-red-600" onClick={handler}>Contactar</p></a>
    </section>
  )
}

function MobileNavbar(){
  const [isMenuOpen, setIsMenuOpen]=useState(false);
  const handleMenuButton=()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="py-3 px-5 w-screen bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-between">
      <img className="w-24 " src="/logo.png" alt="Logo de EP Pulidos" />
      <IconMenu2 color="white" size={40} onClick={handleMenuButton} />
      {isMenuOpen && <MobileMenu handler={handleMenuButton} />}
    </nav>
  )
}

function ScreenNavbar(){
  return (
    <nav className="py-3 px-5 w-screen bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-between">
      <img className="w-24 " src="/logo.png" alt="Logo de EP Pulidos" />
      <div className="text-white">
        <ul className="flex gap-10">
          <a className="hover:underline underline-offset-4" href="#services"><li>Servicios</li></a>
          <a className="hover:underline underline-offset-4" href="#gallery"><li>Galería</li></a>
          <a className="hover:underline underline-offset-4" href="#products"><li>Productos</li></a>
        </ul>
      </div>
    </nav>
  )
}

export function Navbar(){
  const {isMobile}=useResponsive();
  return (
    <header>
      {isMobile ? <MobileNavbar /> : <ScreenNavbar />}
    </header>
  )
}
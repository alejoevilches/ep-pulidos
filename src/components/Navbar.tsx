import {IconMenu2} from "@tabler/icons-react"
import { useResponsive } from "../hooks/useResponsive"

function MobileNavbar(){
  return (
    <nav className="py-3 px-5 w-screen bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-between">
      <img className="w-24 " src="/logo.png" alt="Logo de EP Pulidos" />
      <IconMenu2 color="white" size={40} />
    </nav>
  )
}

function ScreenNavbar(){
  return (
    <nav className="py-3 px-5 w-screen bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-between">
      <img className="w-24 " src="/logo.png" alt="Logo de EP Pulidos" />
      <div className="text-white">
        <ul className="flex gap-10">
          <li>Servicios</li>
          <li>Galería</li>
          <li>Productos</li>
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
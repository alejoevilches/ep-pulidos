import {IconMenu2} from "@tabler/icons-react"

export function Navbar(){
  return (
    <header>
      <nav className="py-3 px-5 w-screen bg-gradient-to-r from-red-600 to-red-950 flex items-center justify-between">
        <img className="w-24 " src="/logo.png" alt="Logo de EP Pulidoss" />
        <IconMenu2 color="white" size={40} />
      </nav>
    </header>
  )
}
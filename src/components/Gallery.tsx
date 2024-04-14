import { Carousel } from "flowbite-react";
import { useResponsive } from "../hooks/useResponsive";

function MobileGallery(){
  return(
    <Carousel indicators={false} className="h-80 px-8 py-5 object-contain">
      <img src="c1.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
      <img src="c2.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
      <img src="c3.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
      <img src="c4.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
      <img src="c5.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
      <img src="c6.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
      <img src="c7.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
      <img src="c8.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
      <img src="c9.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
    </Carousel>
  )
}

export function Gallery(){
  const {isMobile}=useResponsive();
  return(
    <section className="w-screen h-max bg-zinc-500 flex flex-col">
      <p className="mx-auto pt-4 text-white text-xl">Mirá nuestro trabajo</p>
      {isMobile ? <MobileGallery /> : <p>Holi</p>}
    </section>
  )
}
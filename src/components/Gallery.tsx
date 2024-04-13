import { Carousel } from "flowbite-react";

export function Gallery(){
  return(
    <section className="w-screen h-max bg-zinc-800 flex flex-col">
      <p className="mx-auto pt-4 text-white text-xl">Mirá nuestro trabajo</p>
      <Carousel indicators={false} className="h-80 px-8 py-5 object-contain">
        <img src="public/c1.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
        <img src="public/c2.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
        <img src="public/c3.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
        <img src="public/c4.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
        <img src="public/c5.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
        <img src="public/c6.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
        <img src="public/c7.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
        <img src="public/c8.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
        <img src="public/c9.jpeg" alt="Foto de un auto luego del tratamiento ceramico" />
      </Carousel>
    </section>
  )
}
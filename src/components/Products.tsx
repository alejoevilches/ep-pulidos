export function Products(){
  return(
    <section className="bg-red-950 text-white flex flex-col items-center">
      <h4 className="text-2xl text-center px-3 py-5">Mantené tu tratamiento por mas tiempo con nuestros cubreautos</h4>
      <img src="/cubreautos-banner.jpeg" alt="Informacion sobre cubreautos" />
      <img src="/cubreautos-img.jpeg" alt="Imagen del cubreautos" />
      <button className="my-4 w-max p-4 bg-red-600 rounded-2xl overflow-hidden">Comprar</button>
      <h4 className="text-2xl text-center px-3 py-5">También podes comprar nuestros cubreasientos</h4>
      <img className="size-72 object-contain border-4 border-red-600 w-min" src="/cubreasiento.jpeg" alt="Imagen del cubreasientos" />
      <button className="my-4 w-max p-4 bg-red-600 rounded-2xl overflow-hidden">Comprar</button>
    </section>
  )
}
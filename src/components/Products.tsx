export function Products(){
  return(
    <section id="products" className="bg-red-950 text-white flex flex-col items-center">
      <h4 className="text-2xl text-center px-3 py-5">Mantené tu tratamiento por mas tiempo con nuestros cubreautos</h4>
      <div className="flex flex-col w-screen sm:flex-row">
        <img className="sm:w-1/2" src="/cubreautos-banner.jpeg" alt="Informacion sobre cubreautos" />
        <img className="sm:w-1/2" src="/cubreautos-img.jpeg" alt="Imagen del cubreautos" />
      </div>
      <a href="https://api.whatsapp.com/send/?phone=%2B5491132181199&text=Deseo+comprar+un+cubre+auto&type=phone_number&app_absent=0"><button className="my-4 w-max p-4 bg-red-600 rounded-2xl overflow-hidden">Comprar</button></a>
      <h4 className="text-2xl text-center px-3 py-5">También podes comprar nuestros cubreasientos</h4>
      <img className="size-72 object-contain border-4 border-red-600 w-min" src="/cubreasiento.jpeg" alt="Imagen del cubreasientos" />
      <a href="https://api.whatsapp.com/send/?phone=%2B5491132181199&text=Deseo+comprar+un+cubre+auto&type=phone_number&app_absent=0"><button className="my-4 w-max p-4 bg-red-600 rounded-2xl overflow-hidden">Comprar</button></a>
    </section>
  )
}
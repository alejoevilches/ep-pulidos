export function Services(){
  return(
    <section className="bg-zinc-800 text-white flex flex-col items-center py-5">
      <h2 className="text-3xl pb-6">Nuestros servicios</h2>
      <article className="border-2 border-red-600 flex flex-col items-center">
        <img className="size-72" src="public/opticas-card.jpeg" alt="Imagen de opticas pulidas" />
        <div className="flex flex-col items-center bg-gradient-to-r from-red-600 to-red-950 w-full h-full py-5">
          <h3 className="text-2xl mb-4">Ópticas</h3>
          <p className="mb-3">Pulido solo de ópticas</p>
          <button className="w-max p-4 mb-2 bg-zinc-900 rounded-2xl overflow-hidden">Me interesa</button>
        </div>
      </article>
    </section>
  )
}
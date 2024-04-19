export function Hero(){
  return(
    <section className="h-[84vh] bg-heroPattern bg-cover bg-center flex flex-col justify-center gap-10 pl-5 text-white">
      <h1 className="text-5xl leading-snug md2:text-6xl md:w-[60vw]">Pulido de ópticas y cerámicas</h1>
      <a href="https://api.whatsapp.com/send/?phone=%2B5491132181199&text=Deseo+reservar+un+turno&type=phone_number&app_absent=0"><button className="w-max bg-red-600 p-4 hover:bg-zinc-800 transition-all">Contactar</button></a>
    </section>
  )
}
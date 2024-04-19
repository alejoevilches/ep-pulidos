import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { useResponsive } from "../hooks/useResponsive";

//Tipado para cada card
interface Card{
  img:string,
  title:string,
  description:string,
  link:string
}

//Variable que aloja todas las cards
const cards:Card[]=[
  {
    img:"/opticas-card.jpeg",
    title:"Ópticas",
    description:"Pulido solo de ópticas",
    link:"https://api.whatsapp.com/send/?phone=%2B5491132181199&text=Deseo+el+pulido+de+%C3%B3ptica&type=phone_number&app_absent=0"
  },
  {
    img:"/acrilico-card.jpeg",
    title:"Tratamiento acrílico",
    description:"Incluye pulido de ópticas y carroceria con tratamiento acrílico",
    link:"https://api.whatsapp.com/send/?phone=%2B5491132181199&text=Deseo+el%25pulido+de+carrocer%C3%ADa+con+tratamiento+acr%C3%ADlico&type=phone_number&app_absent=0"
  },
  {
    img:"/ceramico-card.jpeg",
    title:"Tratamiento cerámico",
    description:"Incluye pulido de ópticas y carroceria con tratamiento cerámico",
    link:"https://api.whatsapp.com/send/?phone=%2B5491132181199&text=Deseo+el+pulido+de+carrocer%C3%ADa+con+tratamiento+cer%C3%A1mico&type=phone_number&app_absent=0"
  }
]

function MobileServices(){
  const [cardIndex, setCardIndex]=useState(0);

  const handleChangeCard=(dir:"left" | "right")=>{
    if (dir==="left"){
      setCardIndex(prevIndex => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1))
    }
    else{
      setCardIndex(prevIndex => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    }
  }
  const currentCard=cards[cardIndex];
  return(
    <div className="flex flex-row items-center justify-around w-screen">
      <IconChevronLeft size={50} className="hover:text-red-600" onClick={()=>handleChangeCard("left")}/>
      <article className="border-2 border-red-600 flex flex-col items-center justify-center max-w-80 overflow-hidden">
        <img src={currentCard.img} alt="Imagen de opticas pulidas" />
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-red-950 w-full min-h-60 py-5">
          <h3 className="text-2xl mb-4">{currentCard.title}</h3>
          <p className="mb-3 text-center">{currentCard.description}</p>
          <a href={currentCard.link}><button className="w-max p-4 mb-2 bg-zinc-900 rounded-2xl overflow-hidden">Me interesa</button></a>
        </div>
      </article>
      <IconChevronRight className="hover:text-red-600" size={50} onClick={()=>handleChangeCard("right")}/>
    </div>
  )
}

function ScreenServices(){
  return(
    <section className="flex w-screen">
      {
        cards.map(card=>{
          return (
            <div key={card.title} className="flex flex-row items-center justify-around w-screen">
            <article className="border-2 border-red-600 flex flex-col items-center justify-center overflow-hidden mx-5 max-w-[400px]">
              <img src={card.img} alt="Imagen de opticas pulidas" />
              <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-red-950 w-full min-h-60 py-5">
                <h3 className="text-2xl mb-4 text-center">{card.title}</h3>
                <p className="mb-3 text-center">{card.description}</p>
                <a href={card.link}><button className="w-max p-4 mb-2 bg-zinc-900 rounded-2xl overflow-hidden">Me interesa</button></a>
              </div>
            </article>
            </div>
          )
        })
      }
    </section>
  )
}

export function Services(){
  const {isMobile}=useResponsive();
  return(
    <section id="services" className="bg-zinc-800 text-white flex flex-col items-center py-5">
      <h2 className="text-3xl pb-6">Nuestros servicios</h2>
      {isMobile ? <MobileServices /> : <ScreenServices />}
    </section>
  )
}
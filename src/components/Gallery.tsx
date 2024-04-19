import { Carousel } from "flowbite-react";
import { useResponsive } from "../hooks/useResponsive";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const images=[
  "c1.jpeg",
  "c2.jpeg",
  "c3.jpeg",
  "c4.jpeg",
  "c5.jpeg",
  "c6.jpeg",
  "c7.jpeg",
  "c8.jpeg",
  "c9.jpeg"
]

function MobileGallery(){
  return(
    <Carousel indicators={false} className="h-80 px-8 py-5 object-contain">
      {images.map(img=>{
        return(
          <img src={img} alt="Imagen del servicio de pulidos" />
        )
      })}
    </Carousel>
  )
}

function ScreenGallery() {
  const [imgIndex, setImgIndex] = useState(0);
  const imagesPerPage = 3;

  const handleChangeCard = (dir:"left"|"right") => {
    if (dir === "left") {
      setImgIndex(prevIndex => (prevIndex === 0 ? images.length - imagesPerPage : prevIndex - imagesPerPage))
    } else {
      setImgIndex(prevIndex => (prevIndex >= images.length - imagesPerPage ? 0 : prevIndex + imagesPerPage));
    }
  };

  const imagesToShow = images.slice(imgIndex, imgIndex + imagesPerPage);

  return (
    <div className="flex items-center justify-between">
      <IconChevronLeft size={50} className="hover:text-red-600" onClick={() => handleChangeCard("left")} />
      <div className="flex size-72 w-screen justify-center items-center my-5 gap-7">
        {imagesToShow.map((img, index) => (
          <div key={index} className="flex items-center overflow-hidden object-cover h-[270px] max-w-72">
            <img className="items-center" src={img} alt="Imagen del servicio de pulidos" />
          </div>
        ))}
      </div>
      <IconChevronRight size={50} className="hover:text-red-600" onClick={() => handleChangeCard("right")} />
    </div>
  );
}

export function Gallery(){
  const {isMobile}=useResponsive();
  return(
    <section id="gallery" className="w-screen h-max bg-zinc-500 flex flex-col">
      <p className="mx-auto pt-4 text-white text-xl">Mirá nuestro trabajo</p>
      {isMobile ? <MobileGallery /> : <ScreenGallery/>}
    </section>
  )
}
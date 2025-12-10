"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function Home() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const [carrossel, setCarrossel] = useState(0);

  function handleCarrossel(direction: string) {
    if(direction === 'right') {
      if(carrossel >= 3) {
        setCarrossel(0);
        return;
      }
      setCarrossel((prev) => prev + 1);
    }
    else if(direction === 'left') {
      if(carrossel <= 0) {
        setCarrossel(3);
        return;
      }
      setCarrossel((prev) => prev - 1);
    }
  }
  return (
    <>
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
          {
            "@type": "Question",
            "name": "Quanto tempo leva para construir uma piscina?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O tempo de construção de uma piscina pode variar dependendo do tamanho, mas geralmente leva entre 1 a 2 meses."
            }
          },
          {
            "@type": "Question",
            "name": "Por que escolher a JC Piscinas em Cajazeiras?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A construtora em Cajazeiras JC Piscinas, atua no mercado a mais de 4 anos, realizando sonhos e melhorando seu futuro."
            }
          },
          {
            "@type": "Question",
            "name": "Vocês fazem manutenção e limpeza periódica?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, oferecemos serviços de manutenção e limpeza periódica para garantir que sua piscina esteja sempre em ótimas condições."
            }
          }
        ]
        })
      }}></script>
    </Head>
      <header className="flex justify-between p-5 border-b-black border-b-1">
        <Image className="rounded-4xl" src="/logo.webp" width={50} height={50} alt="logo-JC Piscinas" />
        <section className="flex gap-2">
          <button
            onClick={() => {
             document.querySelector("#inicio")!.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            inicio
          </button>
          <button
            onClick={() => {
              document.querySelector("#marketing")!.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            marketing
          </button>
          <button
            onClick={() => {
              document.querySelector("#construcoes")!.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            construções
          </button>
        </section>
      </header>
      <section
        id="inicio"
        className="flex flex-col justify-center items-center h-screen border-b-1 border-b-black"
      >
        <div className="video-bg">
          <video autoPlay loop muted playsInline preload="auto">
            <source src="/videos/bc.mp4" type="video/mp4" />
          </video>
        </div>
        <h1 className="text-3xl font-bold text-white">
          A melhor construtora em Cajazeiras
        </h1>
        <h2 className="text-xl text-white">
          Planeje o seu futuro investimento com a melhor construtora em
          Cajazeiras, realizando sonhos
        </h2>
      </section>
      <section id="marketing" className="flex flex-col gap-4 h-screen justify-center items-center border-b-1 border-b-black p-5">
        <h2 className="text-2xl font-medium">
          O seu futuro investimento está em boas mãos!
        </h2>
        <div className="flex flex-col gap-4 w-[70vw] bg-gray-400 p-4 rounded-2xl">
          <h3 className="text-xl font-medium flex items-center justify-between" onClick={() => setIsOpen1(!isOpen1)}>
            Por que escolher a JC Piscinas em Cajazeiras?
            {isOpen1 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </h3>
          {isOpen1 && (
            <p>
            A construtora em Cajazeiras JC Piscinas, atua no mercado a mais de 4
            anos, realizando sonhos e melhorando seu futuro.
          </p>)}
        </div>
        <div className="flex flex-col gap-4 w-[70vw] bg-gray-400 p-4 rounded-2xl">
          <h3 className="text-xl font-medium flex items-center justify-between" onClick={() => setIsOpen2(!isOpen2)}>
            Quanto tempo leva para construir uma piscina?
            {isOpen2 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </h3>
          {isOpen2 && (
            <p>
            O tempo de construção de uma piscina pode variar dependendo do tamanho, mas geralmente leva entre 1 a 2 meses.
          </p>)}
        </div>
        <div className="flex flex-col gap-4 w-[70vw] bg-gray-400 p-4 rounded-2xl">
          <h3 className="text-xl font-medium flex items-center justify-between" onClick={() => setIsOpen3(!isOpen3)}>
            Vocês fazem manutenção e limpeza periódica?
            {isOpen3 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </h3>
          {isOpen3 && (
            <p>
            Sim, oferecemos serviços de manutenção e limpeza periódica para garantir que sua piscina esteja sempre em ótimas condições.
          </p>)}
        </div>
      </section>
      <section id="construcoes" className="flex flex-col gap-4 h-screen justify-around items-center">
        <h2 className="text-2xl font-medium">Construções</h2>
        <div className="grid w-[80vw] h-screen max-[800px]:w-screen grid-cols-3 place-items-center">
          <button aria-label="back" onClick={() => {
            handleCarrossel('left')
          }}><BsArrowLeftCircleFill size={50} /></button>
          {carrossel === 0 ? <Image src="/1.webp" alt="construção 1" width={300} height={300} /> : carrossel === 1 ? <Image src="/2.webp" alt="construção 2" width={500} height={300} /> : carrossel === 2 ? <Image src="/3.webp" alt="construção 3" width={500} height={300} /> : <Image src="/4.webp" alt="construção 4" width={500} height={300} />}
          <button aria-label="next" onClick={() => {
            handleCarrossel('right')
          }}><BsArrowRightCircleFill size={50} /></button>
        </div>
      </section>
    </>
  );
}

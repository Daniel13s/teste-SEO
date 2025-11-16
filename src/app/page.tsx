"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-between p-5 border-b-black border-b-1">
        <div>logo</div>
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
        <h1 className="text-3xl font-bold">
          A melhor construtora em Cajazeiras
        </h1>
        <h2 className="text-xl">
          Planeje o seu futuro investimento com a melhor construtora em
          Cajazeiras, realizando sonhos
        </h2>
      </section>
      <section id="marketing" className="flex flex-col gap-4 h-screen justify-center items-center border-b-1 border-b-black p-5">
        <h2 className="text-xl font-medium">
          O seu futuro investimento está em boas mãos!
        </h2>
        <h2 className="text-xl font-medium">
          Por que escolher a JC Piscinas em Cajazeiras?
        </h2>
        <p>
          A construtora em Cajazeiras JC Piscinas, atua no mercado a mais de 4
          anos, realizando sonhos e melhorando seu futuro.
        </p>
      </section>
      <section id="construcoes" className="flex flex-col gap-4 h-screen justify-around items-center">
        <h2 className="text-2xl font-medium">Construções</h2>
        <div className="grid grid-cols-3 place-items-center">
          <Image src="" alt="Construtora em cajazeiras | Cosntrução 1" />
          <Image src="" alt="Construtora em cajazeiras | Construção 2" />
          <Image src="" alt="Construtora em cajazeiras | Construção 3" />
        </div>
      </section>
    </>
  );
}

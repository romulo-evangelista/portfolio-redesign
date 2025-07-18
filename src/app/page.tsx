"use client";

import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
} from "@geist-ui/icons";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="flex flex-col gap-16 p-8 sm:p-20 lg:px-[18vw] font-[family-name:var(--font-geist-sans)]">
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            900px at ${position.x}px ${position.y}px,
          rgba(0,105,168,0.2),
            transparent 80%
          )`,
        }}
      />

      <section className="flex flex-col gap-8 lg:fixed font-[family-name:var(--font-geist-mono)]">
        <header>
          <h1 className="font-bold text-3xl">Rômulo Evangelista</h1>
          <p className="text-lg">Full Stack Developer</p>
        </header>
        <footer className="flex gap-4">
          <a
            className="hover:text-sky-700 transition-all duration-300"
            href="https://www.linkedin.com/in/romulo-evangelista-ferreira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            className="hover:text-sky-700 transition-all duration-300"
            href="https://github.com/romulo-evangelista"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </footer>
      </section>

      <article className="flex flex-col gap-16 lg:pl-110">
        <section>
          <h1 className="font-bold text-2xl font-[family-name:var(--font-geist-mono)]">
            Sobre
          </h1>
          <p>
            Sou um desenvolvedor Full Stack com mais de 6 anos de experiência,
            especializado em JavaScript/TypeScript, Node.js, React, React
            Native, AWS e PostgreSQL. Minha experiência abrange tanto o front
            quanto o back, e já trabalhei com tecnologias como Kafka e AWS SQS
            em projetos anteriores. Além disso, integrei informações de serviços
            como SAP e ERP. Sou formado em Sistemas e Mídias Digitais pela
            Universidade Federal do Ceará. Mantenho um compromisso constante com
            o aprendizado e possuo certificações adicionais em desenvolvimento
            mobile. Tenho conhecimentos básicos de Machine Learning e estou
            sempre buscando expandir meus conhecimentos.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl font-[family-name:var(--font-geist-mono)]">
            Experiência Profissional
          </h1>
          <article className="flex flex-col gap-2">
            <header className="font-[family-name:var(--font-geist-mono)]">
              <h2 className="font-bold text-1xl">Maxxi</h2>
              <h3>Desenvolvedor Full Stack</h3>
              <h4 className="italic">Abril 2021 - Atual</h4>
            </header>
            <body>
              <p>
                Atuando como desenvolvedor Full Stack, pude participar do ciclo
                de vida de vários sistemas, tanto internos quanto para clientes
                em projetos BPO. Resolvendo bugs e implementando novas
                funcionalidades.
              </p>
              <p>
                Resultados:
                <ul>
                  <li>
                    • Tempo de espera do usuário, na primeira sincronização do
                    aplicativo, minimizado em 90%.
                  </li>

                  <li>
                    • Integrações entre sistemas SAP e APIs no NestJS por meio
                    de ferramentas de mensagens como Kafka e AWS SQS.
                  </li>

                  <li>
                    • Desenvolvimento web de um sistema de integração de
                    Blockchain e NFT.
                  </li>
                </ul>
              </p>
            </body>
            <footer className="italic font-[family-name:var(--font-geist-mono)]">
              Node.js · NestJS · React · React Native · Typescript · AWS · Jest
            </footer>
          </article>
        </section>

        <section>
          <h1 className="font-[family-name:var(--font-geist-mono)] font-bold text-1xl">
            Sobre
          </h1>
          <p>
            Sou um desenvolvedor Full Stack com mais de 6 anos de experiência,
            especializado em JavaScript/TypeScript, Node.js, React, React
            Native, AWS e PostgreSQL. Minha experiência abrange tanto o front
            quanto o back, e já trabalhei com tecnologias como Kafka e AWS SQS
            em projetos anteriores. Além disso, integrei informações de serviços
            como SAP e ERP. Sou formado em Sistemas e Mídias Digitais pela
            Universidade Federal do Ceará. Mantenho um compromisso constante com
            o aprendizado e possuo certificações adicionais em desenvolvimento
            mobile. Tenho conhecimentos básicos de Machine Learning e estou
            sempre buscando expandir meus conhecimentos.
          </p>
        </section>

        <section>
          <h1 className="font-[family-name:var(--font-geist-mono)] font-bold text-1xl">
            Sobre
          </h1>
          <p>
            Sou um desenvolvedor Full Stack com mais de 6 anos de experiência,
            especializado em JavaScript/TypeScript, Node.js, React, React
            Native, AWS e PostgreSQL. Minha experiência abrange tanto o front
            quanto o back, e já trabalhei com tecnologias como Kafka e AWS SQS
            em projetos anteriores. Além disso, integrei informações de serviços
            como SAP e ERP. Sou formado em Sistemas e Mídias Digitais pela
            Universidade Federal do Ceará. Mantenho um compromisso constante com
            o aprendizado e possuo certificações adicionais em desenvolvimento
            mobile. Tenho conhecimentos básicos de Machine Learning e estou
            sempre buscando expandir meus conhecimentos.
          </p>
        </section>
      </article>
    </main>
  );
}

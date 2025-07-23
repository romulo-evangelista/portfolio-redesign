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
    <div className="flex flex-col lg:flex-row gap-8 p-8 lg:px-[20vw] transition-all duration-700">
      <div
        className="flex-none pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            900px at ${position.x}px ${position.y}px,
          rgba(0,105,168,0.2),
            transparent 80%
          )`,
        }}
      />

      <header className="flex flex-col flex-3/5 gap-8 lg:sticky lg:top-0 lg:h-full lg:py-[4vw]">
        <div className="font-[family-name:var(--font-geist-mono)]">
          <h1 className="font-bold text-3xl">Rômulo Evangelista</h1>
          <p className="text-lg">Full Stack Developer</p>
        </div>
        <div className="flex gap-4">
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
        </div>
      </header>

      <main className="flex flex-col flex-4/5 gap-16 lg:py-[4vw] font-[family-name:var(--font-geist-sans)]">
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
          <div className="flex flex-col gap-2">
            <div className="font-[family-name:var(--font-geist-mono)]">
              <h2 className="font-bold text-1xl">Maxxi</h2>
              <h3>Desenvolvedor Full Stack</h3>
              <h4 className="italic">Abril 2021 - Atual</h4>
            </div>

            <p>
              Atuando como desenvolvedor Full Stack, pude participar do ciclo de
              vida de vários sistemas, tanto internos quanto para clientes em
              projetos BPO. Resolvendo bugs e implementando novas
              funcionalidades.
            </p>
            <p>Resultados:</p>
            <ul>
              <li>
                • Tempo de espera do usuário, na primeira sincronização do
                aplicativo, minimizado em 90%.
              </li>

              <li>
                • Integrações entre sistemas SAP e APIs no NestJS por meio de
                ferramentas de mensagens como Kafka e AWS SQS.
              </li>

              <li>
                • Desenvolvimento web de um sistema de integração de Blockchain
                e NFT.
              </li>
            </ul>

            <div className="italic font-[family-name:var(--font-geist-mono)]">
              Node.js · NestJS · React · React Native · Typescript · AWS · Jest
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-[family-name:var(--font-geist-mono)]">
              <h2 className="font-bold text-1xl">Lanlink</h2>
              <h3>Desenvolvedor Full Stack</h3>
              <h4 className="italic">Julho 2019 - Abril 2021</h4>
            </div>

            <p>
              Desenvolvimento e manutenção do sistema interno da empresa.
              Aplicação de novas tecnologias, como mensageria em tempo real.
              Criação e validação de novas funcionalidades do sistema.
              Participação em projetos com clientes.
            </p>
            <p>De julho de 2019 a maio de 2020, fui estagiário.</p>

            <div className="italic font-[family-name:var(--font-geist-mono)]">
              Node.js · NestJS · React · PHP · Microsoft SQL Server · MySQL
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-[family-name:var(--font-geist-mono)]">
              <h2 className="font-bold text-1xl">IMMI FS</h2>
              <h3>Estagiário de Desenvolvimento</h3>
              <h4 className="italic">Dezembro 2018 - Junho 2019</h4>
            </div>

            <p>
              Desenvolvimento de novas funcionalidades para um sistema baseado
              em template. CI/CD dos ambientes com GitLab.
            </p>

            <div className="italic font-[family-name:var(--font-geist-mono)]">
              JavaScript · PHP · Laravel · MySQL
            </div>
          </div>
        </section>

        <section>
          <h1 className="font-bold text-2xl font-[family-name:var(--font-geist-mono)]">
            Habilidades
          </h1>
          <p>Node.js</p>
          <p>NestJS</p>
          <p>React</p>
          <p>React Native</p>
          <p>Typescript</p>
          <p>Javascript</p>
          <p>Git</p>
          <p>SQL</p>
          <p>PostgreSQL</p>
          <p>AWS</p>
          <p>Docker</p>
        </section>

        <section>
          <h1 className="font-bold text-2xl font-[family-name:var(--font-geist-mono)]">
            Formação Acadêmica
          </h1>
          <div className="font-[family-name:var(--font-geist-mono)]">
            <h2 className="font-bold text-1xl">
              SMD - Sistemas e Mídias Digitais
            </h2>
            <h3>Universidade Federal do Ceará - UFC</h3>
            <h4 className="italic">Janeiro 2017 - Dezembro 2022</h4>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl font-[family-name:var(--font-geist-mono)]">
            Cursos
          </h1>

          <div className="font-[family-name:var(--font-geist-mono)]">
            <h2 className="font-bold text-1xl">Flutter</h2>
            <h3>Dell Lead</h3>
            <h4 className="italic">Fevereiro 2021</h4>
          </div>
          <div className="font-[family-name:var(--font-geist-mono)]">
            <h2 className="font-bold text-1xl">Machine Learning</h2>
            <h3>Dell Lead</h3>
            <h4 className="italic">Novembro 2020</h4>
          </div>
          <div className="font-[family-name:var(--font-geist-mono)]">
            <h2 className="font-bold text-1xl">
              Scrum Foundation Professional Certificate (SFPC)
            </h2>
            <h3>CertiProf</h3>
            <h4 className="italic">Junho 2020</h4>
          </div>
          <div className="font-[family-name:var(--font-geist-mono)]">
            <h2 className="font-bold text-1xl">iOS Foundation</h2>
            <h3>
              Instituto Federal de Educação, Ciência e Tecnologia do Ceará
              (IFCE)
            </h3>
            <h4 className="italic">Outubro 2019</h4>
          </div>
        </section>
      </main>
    </div>
  );
}

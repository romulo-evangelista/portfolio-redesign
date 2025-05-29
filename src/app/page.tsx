import {
  Linkedin as LinkedinIcon,
  Github as GithubIcon,
} from "@geist-ui/icons";

export default function Home() {
  return (
    <main className="flex flex-col xl:flex-row gap-16 p-8 sm:p-20 lg:px-[20vw] font-[family-name:var(--font-geist-sans)]">
      <section className="flex flex-col gap-12 justify-between font-[family-name:var(--font-geist-mono)] lg:fixed">
        <header className="w-[260px]">
          <h1 className="font-bold text-2xl">Rômulo Evangelista</h1>
          <p>Full Stack Developer</p>
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

      <article className="flex flex-col gap-16 pl-auto lg:pl-70">
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

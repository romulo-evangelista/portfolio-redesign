import { GradientTitle } from "../gradient-title";
import { WorkExperienceItem } from "./components";

export const WorkExperience = () => {
  return (
    <section className="flex flex-col gap-4">
      <GradientTitle title="Experiência Profissional" />

      <WorkExperienceItem
        workExperienceInfo={{
          companyName: "Maxxi",
          role: "Desenvolvedor Full Stack",
          period: "Abril 2021 - Atual",
          resume:
            "Atuando como desenvolvedor Full Stack, pude participar do ciclo de vida de vários sistemas, tanto internos quanto para clientes em projetos BPO. Resolvendo bugs e implementando novas funcionalidades.",
          results: [
            "Tempo de espera do usuário, na primeira sincronização do aplicativo, minimizado em 90%.",
            "Integrações entre sistemas SAP e APIs no NestJS por meio de ferramentas de mensagens como Kafka e AWS SQS.",
            "Desenvolvimento web de um sistema de integração de Blockchain e NFT.",
          ],
          stack: [
            "Node.js",
            "NestJS",
            "React",
            "React Native",
            "Typescript",
            "AWS",
            "Jest",
          ],
        }}
      />

      <WorkExperienceItem
        workExperienceInfo={{
          companyName: "Lanlink",
          role: "Desenvolvedor Full Stack",
          period: "Julho 2019 - Abril 2021",
          resume:
            "Desenvolvimento e manutenção do sistema interno da empresa. Aplicação de novas tecnologias, como mensageria em tempo real. Criação e validação de novas funcionalidades do sistema. Participação em projetos com clientes. De julho de 2019 a maio de 2020, fui estagiário.",
          stack: [
            "Node.js",
            "NestJS",
            "React",
            "PHP",
            "Microsoft SQL Server",
            "MySQL",
          ],
        }}
      />

      <WorkExperienceItem
        workExperienceInfo={{
          companyName: "IMMI FS",
          role: "Estagiário de Desenvolvimento",
          period: "Dezembro 2018 - Junho 2019",
          resume:
            "Desenvolvimento de novas funcionalidades para um sistema baseado em template. CI/CD dos ambientes com GitLab.",
          stack: ["JavaScript", "PHP", "Laravel", "MySQL"],
        }}
      />
    </section>
  );
};

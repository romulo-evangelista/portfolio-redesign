import { Card } from "../card";
import { GradientTitle } from "../gradient-title";

export const AcademicFormation = () => {
  return (
    <section>
      <GradientTitle title="Formação Acadêmica" />

      <Card>
        <div className="font-[family-name:var(--font-geist-mono)]">
          <h2 className="font-bold text-1xl">
            SMD - Sistemas e Mídias Digitais
          </h2>
          <h3>Universidade Federal do Ceará - UFC</h3>
          <h4 className="italic">Janeiro 2017 - Dezembro 2022</h4>
        </div>
      </Card>
    </section>
  );
};

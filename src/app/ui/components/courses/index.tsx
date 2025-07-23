import { GradientTitle } from "../gradient-title";
import { CourseItem } from "./components";

export const Courses = () => {
  return (
    <section className="flex flex-col gap-4 font-[family-name:var(--font-geist-mono)]">
      <GradientTitle title="Cursos" />

      <CourseItem
        title="Flutter"
        platform="Dell Lead"
        period="Fevereiro 2021"
      />

      <CourseItem
        title="Machine Learning"
        platform="Dell Lead"
        period="Novembro 2020"
      />

      <CourseItem
        title="Scrum Foundation Professional Certificate (SFPC)"
        platform="CertiProf"
        period="Junho 2020"
      />

      <CourseItem
        title="iOS Foundation"
        platform="Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)"
        period="Outubro 2019"
      />
    </section>
  );
};

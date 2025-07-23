type GradientTitleProps = { title: string; style?: string };
export const GradientTitle = ({
  title,
  style = "font-bold text-2xl font-[family-name:var(--font-geist-mono)]",
}: GradientTitleProps) => {
  return (
    <h1
      className={`bg-gradient-to-r from-sky-700 to-sky-400 inline-block text-transparent bg-clip-text ${style}`}
    >
      {title}
    </h1>
  );
};

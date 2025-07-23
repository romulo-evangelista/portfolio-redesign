export const Skills = () => {
  const stack = [
    "Node.js",
    "NestJS",
    "React",
    "React Native",
    "Typescript",
    "Javascript",
    "Git",
    "SQL",
    "PostgreSQL",
    "AWS",
    "Docker",
  ];

  return (
    <section>
      <div className="flex flex-row flex-wrap gap-3 mt-8 lg:mt-20 italic font-[family-name:var(--font-geist-mono)]">
        {stack.map((item, key) => (
          <div
            key={key}
            className="px-2 py-1 rounded-[20px] text-sm border border-[rgba(0,105,168,0.5)] hover:bg-[rgba(0,105,168,1)] transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

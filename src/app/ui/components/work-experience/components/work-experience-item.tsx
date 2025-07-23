import { Card } from "../../card";

type WorkExperienceItemProps = {
  workExperienceInfo: {
    companyName: string;
    role: string;
    period: string;
    resume: string;
    results?: string[];
    stack: string[];
  };
};

export const WorkExperienceItem = ({
  workExperienceInfo,
}: WorkExperienceItemProps) => {
  const { companyName, role, period, resume, results, stack } =
    workExperienceInfo;

  return (
    <Card>
      <div className="font-[family-name:var(--font-geist-mono)]">
        <h2 className="font-bold text-1xl">{companyName}</h2>
        <h3>{role}</h3>
        <h4 className="italic">{period}</h4>
      </div>
      <p>{resume}</p>
      {results && (
        <>
          <p>Resultados:</p>
          <ul className="flex flex-col gap-2">
            {results.map((result, key) => (
              <li key={key}>• {result}</li>
            ))}
          </ul>
        </>
      )}
      <div className="flex flex-row flex-wrap gap-3 italic font-[family-name:var(--font-geist-mono)]">
        {stack.map((item, key) => (
          <div
            key={key}
            className="px-2 py-1 rounded-[20px] text-sm border border-[rgba(0,105,168,0.5)] hover:bg-[rgba(0,105,168,1)] transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
};

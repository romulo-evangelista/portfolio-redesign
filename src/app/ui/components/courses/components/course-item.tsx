import { Card } from "../../card";

type CourseProps = { title: string; platform: string; period: string };

export const CourseItem = ({ title, platform, period }: CourseProps) => {
  return (
    <Card>
      <h2 className="font-bold text-1xl">{title}</h2>
      <h3>{platform}</h3>
      <h4 className="italic">{period}</h4>
    </Card>
  );
};

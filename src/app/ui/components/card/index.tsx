type CardProps = { children: React.ReactNode };

export const Card = ({ children }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 p-8 hover:bg-[rgba(0,105,168,0.07)] hover:rounded-[8px] transition-all duration-300">
      {children}
    </div>
  );
};

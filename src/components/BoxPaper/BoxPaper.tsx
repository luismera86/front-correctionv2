interface BoxPaperProps {
  children: React.ReactNode;
  space?: string;
}
export const BoxPaper = ({ children, space = "4" }: BoxPaperProps) => {
  return (
    <div className={`flex flex-col bg-[#27282D] h-auto p-11 w-96 justify-center space-y-${space} `}>{children}</div>
  );
};

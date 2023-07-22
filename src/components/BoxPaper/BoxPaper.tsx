interface BoxPaperProps {
  children: React.ReactNode;
  space?: string;
}
export const BoxPaper = ({ children, space = "4" }: BoxPaperProps) => {
  return <div className={`flex flex-col bg-[#27282D] h-auto p-11 w-2/3 justify-center space-y-2`}>{children}</div>;
};

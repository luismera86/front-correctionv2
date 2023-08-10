interface BoxPaperProps {
  children: React.ReactNode;
}
export const BoxPaper = ({ children }: BoxPaperProps) => {
  return (
    <div className={"flex flex-col bg-[#27282D] h-auto p-11 w-2/4 justify-center space-y-3 rounded-md "}>
      {children}
    </div>
  );
};

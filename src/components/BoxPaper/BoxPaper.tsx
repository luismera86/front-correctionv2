interface BoxPaperProps {
  children: React.ReactNode;
  spaceY?: number;
}
export const BoxPaper = ({ children, spaceY = 1 }: BoxPaperProps) => {
  const classSpace = [
    "space-y-0",
    "space-y-1",
    "space-y-2",
    "space-y-3",
    "space-y-4",
    "space-y-5",
    "space-y-6",
    "space-y-7",
    "space-y-8",
    "space-y-9",
    "space-y-10",
  ];
  return (
    <div className={`flex flex-col bg-[#27282D] h-auto p-11 w-96 justify-center ${classSpace[spaceY]} `}>{children}</div>
  );
};

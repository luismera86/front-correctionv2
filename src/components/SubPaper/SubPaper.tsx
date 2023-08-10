
interface ISubPaperProps {
  children: React.ReactNode
}
export const SubPaper = ({children}: ISubPaperProps) => {
  return (
    <div className="flex flex-col bg-[#34353d] rounded-md h-auto p-11 w-auto justify-center space-y-2">
      {children}
    </div>
  )
}

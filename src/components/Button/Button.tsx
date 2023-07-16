interface ButtonProps {
  name: string;
}
export const Button = ({ name }: ButtonProps) => {
  return (
    <button
      className="bg-[#393B43] 
    text-[#E5F876] rounded-md hover:bg-[#E5F876]
    border border-[#E5F876] hover:border-[#E5F876] hover:text-[#393B43]
    p-2 px-7    "
    >
      {name}
    </button>
  );
};

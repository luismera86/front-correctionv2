interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className=" bg-[#1F2023] flex flex-col h-screen text-[#F2F2F2] pt-14 items-center">{children}</div>;
};

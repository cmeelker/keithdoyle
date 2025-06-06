import ProjectGrid from "../_lib/components/ProjectGrid";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProjectGrid />
      {children}
    </>
  );
}

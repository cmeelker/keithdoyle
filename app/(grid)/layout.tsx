import ProjectGrid from "../_lib/components/ProjectGrid";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <ProjectGrid />
      {children}
    </div>
  );
}

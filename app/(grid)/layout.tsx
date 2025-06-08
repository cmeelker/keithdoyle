import ProjectGrid from "../_lib/components/ProjectGrid";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <div className="h-full pb-5">
        <ProjectGrid />
      </div>
      {children}
    </div>
  );
}

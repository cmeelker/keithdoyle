export default function ThreeDBorder({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section className={`pointer-events-auto relative flex ${className}`}>
      <div
        className="absolute h-full w-full bg-[#6F6F6F]"
        style={{
          boxShadow:
            "0px 0px 4px 6px #00000099 inset, 0px 4px 4px 0px #00000040",
        }}
      ></div>
      <div className="bg-white-smoke absolute top-3 right-3 h-[calc(100%-24px)] w-[calc(100%-24px)]">
        {children}
      </div>
    </section>
  );
}

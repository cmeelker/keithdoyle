export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <p className="text-cursed-grey font-[Univers] text-sm">
      © Keith Doyle {year}
    </p>
  );
}

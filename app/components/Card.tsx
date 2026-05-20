export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[20px] border border-cream/25 bg-cream/10 backdrop-blur-[10px] p-8 ${className}`}
    >
      {children}
    </div>
  );
}

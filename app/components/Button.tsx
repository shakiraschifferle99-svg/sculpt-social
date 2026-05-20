type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-rose-deep text-cream hover:bg-rose-hover",
  secondary: "bg-transparent text-charcoal border border-charcoal/30 hover:bg-blush",
  ghost: "bg-cream/10 text-cream border border-cream/40 hover:bg-cream/20",
};

export default function Button({
  variant = "primary",
  children,
  onClick,
  className = "",
}: {
  variant?: Variant;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-sans text-sm font-medium uppercase tracking-widest transition-transform duration-300 ease-out hover:-translate-y-px cursor-pointer ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

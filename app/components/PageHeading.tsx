export default function PageHeading({
  italic,
  upright,
}: {
  italic?: string;
  upright: string;
}) {
  return (
    <h1 className="font-serif text-[clamp(3.25rem,7vw,5rem)] leading-[1.12] text-cream max-w-[20ch] mx-auto">
      {italic && <span className="italic block">{italic}</span>}
      <span className="not-italic block">{upright}</span>
    </h1>
  );
}

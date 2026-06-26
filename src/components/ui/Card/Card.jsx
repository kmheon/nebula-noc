export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-cyan-500/20
        bg-[#0B1220]/80
        backdrop-blur-xl
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
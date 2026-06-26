const variants = {
  primary:
    "bg-cyan-500 text-black hover:bg-cyan-400",

  secondary:
    "border border-cyan-500/30 bg-[#0B1220] text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/10",

  danger:
    "bg-red-600 text-white hover:bg-red-500",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`
        rounded-xl
        px-5
        py-2.5
        font-semibold
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
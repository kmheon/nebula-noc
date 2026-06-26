export default function PageHeader({
  title,
  subtitle,
  actions,
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div>
        <h1 className="text-4xl font-bold text-cyan-400">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-gray-400">
            {subtitle}
          </p>
        )}
      </div>

      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}

    </div>
  );
}
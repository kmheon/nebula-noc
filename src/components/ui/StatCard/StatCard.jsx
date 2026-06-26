import Card from "../Card/Card";

export default function StatCard({
  title,
  value,
  icon: Icon,
  iconColor = "text-cyan-400",
  children,
}) {
  return (
    <Card className="group">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {value}
          </h2>

          {children}
        </div>

        {Icon && (
          <Icon
            size={34}
            className={`${iconColor} transition-transform duration-300 group-hover:scale-110`}
          />
        )}

      </div>
    </Card>
  );
}
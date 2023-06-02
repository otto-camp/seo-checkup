interface Metric {
  id: string;
  weight: number;
  group: string;
}

export default function MetricCard({ metric }: { metric: Metric }) {
  const { id, weight, group } = metric;
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">{id}</h3>
      <p className="text-gray-600 mb-2">Weight: {weight}</p>
      <p className="text-gray-600 mb-2">Group: {group}</p>
    </div>
  );
}

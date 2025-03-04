interface ProductSpecificationsProps {
  specifications: { attribute_code: string; value: string }[];
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Specifications</h2>
      <ul className="list-disc pl-5">
        {specifications.map((spec) => (
          <li key={spec.attribute_code}>
            <strong>{spec.attribute_code.replace('_', ' ')}:</strong>{' '}
            {spec.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

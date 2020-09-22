import Link from "next/link";

const perple = [
  { v: "car", name: "bruno" },
  { v: "bike", name: "John" },
  { v: "airplane", name: "Mick" },
];

export default function Details() {
  return (
    <div>
      {people.map((e) => (
        <Link as={`/${e.v}/${e.name}`} href="/[vehivle]/[person]">
          <a>
            Navigate to {e.name}'s {e.v}
          </a>
        </Link>
      ))}
    </div>
  );
}

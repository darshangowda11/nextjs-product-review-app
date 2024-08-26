import Link from "next/link";
import Layout from "./components/Layout";

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Smartphone' },
  { id: 3, name: 'Headphones' },
];

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mt-2 text-gray-600">Click to view details and reviews</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
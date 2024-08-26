import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '../../components/Layout';

const products = [
  { id: 1, name: 'Laptop', reviews: [
    { id: 101, text: 'Great laptop!' },
    { id: 102, text: 'Good value for money.' },
  ]},
  { id: 2, name: 'Smartphone', reviews: [
    { id: 201, text: 'Amazing camera!' },
    { id: 202, text: 'Battery life could be better.' },
  ]},
  { id: 3, name: 'Headphones', reviews: [
    { id: 301, text: 'Excellent sound quality.' },
    { id: 302, text: 'Very comfortable.' },
  ]},
];

export default function Product({ params }: { params: { productId: string } }) {
  const product = products.find(p => p.id === parseInt(params.productId));

  if (!product) {
    notFound();
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <h2 className="text-2xl font-semibold mb-2">Reviews:</h2>
        <ul className="space-y-4">
          {product.reviews.map((review) => (
            <li key={review.id} className="border rounded-lg p-4 hover:bg-gray-50">
              <Link href={`/products/${product.id}/reviews/${review.id}`} className="block">
                <h3 className="text-lg font-medium text-blue-600">Review {review.id}</h3>
                <p className="text-gray-600 mt-1">{review.text.substring(0, 50)}...</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
          &larr; Back to all products
        </Link>
      </div>
    </Layout>
  );
}
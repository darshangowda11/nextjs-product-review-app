import { notFound } from 'next/navigation';
import Link from 'next/link';
import Layout from '../../../../components/Layout';

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

export default function Review({ params }: { params: { productId: string, reviewId: string } }) {
  const product = products.find(p => p.id === parseInt(params.productId));
  const review = product?.reviews.find(r => r.id === parseInt(params.reviewId));

  if (!product || !review) {
    notFound();
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Review for {product.name}</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 mb-2">Review ID: {review.id}</p>
          <p className="text-lg">{review.text}</p>
        </div>
        <div className="mt-6 space-y-2">
          <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline block">
            &larr; Back to {product.name}
          </Link>
          <Link href="/" className="text-blue-600 hover:underline block">
            &larr; Back to all products
          </Link>
        </div>
      </div>
    </Layout>
  );
}
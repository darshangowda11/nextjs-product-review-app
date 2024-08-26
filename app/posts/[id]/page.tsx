import { notFound } from 'next/navigation';

const posts = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
];

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{post.title } darshan 1</h1>
      <p>{post.content}</p>
    </main>
  );
}
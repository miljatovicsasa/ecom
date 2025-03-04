'use client';

import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '@/lib/graphql/categories';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Tire Shop" width={150} height={50} />
        </Link>
        <nav>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error</p>
          ) : (
            <ul className="flex space-x-4">
              {data?.categories?.items.map((category: any) => (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.url_key}`}
                    className="hover:underline"
                  >
                    {category.name} ({category.product_count})
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

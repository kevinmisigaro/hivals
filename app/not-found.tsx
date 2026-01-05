import Link from 'next/link';
import { Home } from 'lucide-react';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-800 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or deleted.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            <Home className="w-5 h-5 mr-2" aria-hidden="true" />
            Go to Homepage
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services" className="text-blue-800 hover:underline font-medium">
              Services
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/foundation" className="text-blue-800 hover:underline font-medium">
              Foundation
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/about" className="text-blue-800 hover:underline font-medium">
              About Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/contact" className="text-blue-800 hover:underline font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-velatrix-dark text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <div className="bg-white/10 p-8 rounded-lg backdrop-blur-lg">
        <p className="mb-4">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          href="/" 
          className="text-center w-full inline-block py-2 px-4 bg-white/20 hover:bg-white/30 rounded-md transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 
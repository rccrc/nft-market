import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Reward Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-rose-500">ALL NFTs</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-rose-500">Upload Digital Asset</a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-rose-500">My NFTs</a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-rose-500">Creator View</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

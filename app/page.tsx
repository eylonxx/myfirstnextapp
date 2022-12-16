import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section>
      <div className="center py-4">
        <h1 className="text-2xl font-semibold tracking-tight">Homepage</h1>
      </div>
    </section>
  );
}

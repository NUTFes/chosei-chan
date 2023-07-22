import Image from 'next/image';
import { Inter } from 'next/font/google';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const insertUser = async () => {
    await axios.post('/api/user');
  };

  const getUser = async () => {
    await axios.get('/api/user');
  };

  return (
    <main>
      <button className="btn" onClick={() => insertUser()}>
        Post Test
      </button>
      <button className="btn" onClick={() => getUser()}>
        Get Test
      </button>
      <input className="input"></input>
    </main>
  );
}

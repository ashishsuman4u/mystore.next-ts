import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import { FaShoppingCart, FaRegUser, FaPowerOff } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-black text-white p-2 flex justify-between items-center shadow-sm">
      <Link href="/">
        <Image src={logo} width="100" alt="My Store" />
      </Link>
      <nav className="text-3xl flex gap-4 items-end">
        <Link href="/cart" className="flex flex-col items-end">
          <span className="text-xs">{0}</span>
          <FaShoppingCart />
        </Link>
        <Link href="/dashboard">
          <FaRegUser />
        </Link>
        {/* {user.authenticated && (
          <button onClick={handleSignOut}>
            <FaPowerOff />
          </button>
        )} */}
      </nav>
    </header>
  );
}

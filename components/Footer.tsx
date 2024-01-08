import { ReactNode } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <div className="p-4 container mx-auto max-w-2xl py-14">
      <div className="border-t-2 border-gray-100 dark:border-gray-900 mb-4" />
      <h1 className="text-gray-500 dark:text-gray-500">&copy; 2023 Alex Scott</h1>
    </div>
  );
};

export default Footer;
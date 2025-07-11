import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className="flex flex-col space-y-4 p-4 bg-gray-100 h-full">
      <Link href="/dashboard/customers" className="text-blue-600 hover:underline">
        Customers
      </Link>
      <Link href="/dashboard/invoices" className="text-blue-600 hover:underline">
        Invoices
      </Link>
    </nav>
  );
}
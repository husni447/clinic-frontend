import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side navigation */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top header */}
        <Header />

        {/* Page content */}
        <main className="p-6 bg-white m-4 rounded-lg shadow">
          {children}
        </main>
      </div>
    </div>
  );
}

'use client';
export function Navbar() { /* … */ }



export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example widgets */}
          <div className="bg-white p-4 rounded-lg shadow">Total Patients: 120</div>
          <div className="bg-white p-4 rounded-lg shadow">Upcoming Appointments: 8</div>
          <div className="bg-white p-4 rounded-lg shadow">New Messages: 5</div>
          <div className="bg-white p-4 rounded-lg shadow">Settings Overview</div>
        </div>
      </main>
    </>
  );
}
import { Outlet } from "react-router-dom";
import Header from './Header';
export default function SecondLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
     <Header/>

      {/* Main Content */}
      <main className="mt-20">
        <Outlet/>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 mt-auto">
        &copy; 2025 My Website. All rights reserved.
      </footer>
    </div>
  );
}

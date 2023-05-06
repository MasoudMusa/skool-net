import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="/next.svg" alt="Logo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/students" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Students
                  </Link>
                  <Link href="/teachers" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Teachers
                  </Link>
                  <Link href="/staff" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Staff
                  </Link>
                  <Link href="/dashboard" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/students" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>

          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to our School Management System</h1>
            <p className="text-lg text-gray-700">Our system provides a centralized platform for managing your school's information and data. From student records to staff management, everything is organized and easily accessible.</p>
            <div className="mt-6">
              <Link href="/signup" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-bold text-gray-900">What our users are saying</h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">Read some testimonials from our satisfied users.</p>
            </div>

            <div className="mt-10">
              <div className="max-w-2xl mx-auto space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8">
                    <p className="text-lg font-semibold text-gray-900 mb-2">Efficient and user-friendly</p>
                    <p className="text-gray-700 text-base">As a teacher, I really appreciate how easy it is to use this system. I can quickly find student information and manage my classes. It has definitely made my job easier.</p>
                  </div>
                  <div className="bg-gray-100 px-6 py-4">
                    <p className="text-gray-600 text-base">- Jane Smith, Teacher</p>
                  </div>
                </div>

                <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8">
                    <p className="text-lg font-semibold text-gray-900 mb-2">Efficient and user-friendly</p>
                    <p className="text-gray-700 text-base">As a teacher, I really appreciate how easy it is to use this system. I can quickly find student information and manage my classes. It has definitely made my job easier.</p>
                  </div>
                  <div className="bg-gray-100 px-6 py-4">
                    <p className="text-gray-600 text-base">- Jane Smith, Teacher</p>
                  </div>
                </div>

                <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8">
                    <p className="text-lg font-semibold text-gray-900 mb-2">Efficient and user-friendly</p>
                    <p className="text-gray-700 text-base">As a teacher, I really appreciate how easy it is to use this system. I can quickly find student information and manage my classes. It has definitely made my job easier.</p>
                  </div>
                  <div className="bg-gray-100 px-6 py-4">
                    <p className="text-gray-600 text-base">- Jane Smith, Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </main>
    </div>
  );
};

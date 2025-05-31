import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2023 NAPS Finance. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
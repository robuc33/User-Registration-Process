import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="mx-auto h-16 w-16 bg-white rounded-lg flex items-center justify-center">
            <LogIn className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="mt-6 text-4xl font-extrabold text-white">
            Welcome to Our Platform
          </h1>
          <p className="mt-2 text-lg text-blue-100">
            Get started by creating your account
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Link
            to="/signup"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign up
          </Link>
          <Link
            to="/signin"
            className="w-full flex justify-center py-3 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
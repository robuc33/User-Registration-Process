import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';

export default function CheckEmail() {
  return (
    <AuthLayout title="Check your email">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
          <Mail className="h-6 w-6 text-blue-600" />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          We sent a verification link to your email address. Please check your email and click the link to verify your account.
        </p>
        <div className="mt-6">
          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => window.location.reload()}
          >
            Resend email
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500">
            Back to sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
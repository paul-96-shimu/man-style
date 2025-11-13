import React from 'react';
import { Link } from 'react-router';

const ForbiddenPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
            <div className="bg-white shadow-lg rounded-lg p-10 max-w-md">
                <h1 className="text-6xl font-extrabold text-red-500 mb-4">403</h1>
                <h2 className="text-2xl font-bold mb-2">Access Forbidden</h2>
                <p className="text-gray-600 mb-6">
                    Sorry, you don't have permission to access this page.
                </p>
                <Link 
                    to="/" 
                    className="btn btn-primary btn-md hover:btn-secondary transition-colors"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ForbiddenPage;

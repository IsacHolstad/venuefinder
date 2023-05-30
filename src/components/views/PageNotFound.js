import React from 'react';
import {Link} from "react-router-dom";
const PageNotFound = () => {
    return (
        <>
            <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8 relative">
                <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10">
                    <Link to="/" className="text-sm font-semibold leading-7 text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                        </svg>
                        Go Home
                    </Link>
                </div>
            </main>
        </>
    );
};

export default PageNotFound;

"use client";
import { useState } from "react"; 
import Link from "next/link";
import { useUserAuth } from "./auth-context"; 

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // TODO: Implement handleSignIn and handleSignOut functions using gitHubSignIn and firebaseSignOut from useUserAuth
  const handleSignIn = () => {
    gitHubSignIn().catch(error => console.error("Error signing in:", error));
  };

  const handleSignOut = () => {
    firebaseSignOut().catch(error => console.error("Error signing out:", error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Welcome to the weather dashboard, {user.displayName}!</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/weather">
                <button className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md text-sm leading-tight uppercase shadow-md transition duration-150 ease-in-out">View Weather</button>
              </Link>
              <button onClick={handleSignOut} className="inline-flex items-center justify-center px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md text-sm leading-tight uppercase shadow-md transition duration-150 ease-in-out">Sign Out</button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-800 mb-6">Please sign in to access the weather information.</p>
            <button onClick={handleSignIn} className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md text-sm leading-tight uppercase shadow-md transition duration-150 ease-in-out">Sign In with GitHub</button>
          </div>
        )}
      </div>
    </div>
  );
}

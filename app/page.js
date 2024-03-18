"use client";
import { useState } from "react"; // No need for useEffect here if not used
import Link from "next/link";
import { useUserAuth } from "./auth-context"; // Assuming this is the correct path

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
    <div className="container mx-auto my-8 p-4">
      {user ? (
        <>
          <p className="text-lg font-semibold mb-4">Welcome to weather dashboard {user.displayName}!</p>
          {/* TODO: Render a button that links to the weather page. Use the Next.js Link component. */}
          <Link href="/weather">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">View Weather</button>
          </Link>
          {/* TODO: Render a Sign Out button that calls handleSignOut when clicked */}
          <button onClick={handleSignOut} className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Sign Out</button>
        </>
      ) : (
        <>
          <p>Please sign in to access the weather information.</p>
          {/* TODO: Render a Sign In button that calls handleSignIn when clicked */}
          <button onClick={handleSignIn} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Sign In with GitHub</button>
        </>
      )}
    </div>
  );
}

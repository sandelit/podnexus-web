import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex w-screen items-center justify-between h-24 text-white bg-gray-700">
      <div className="flex gap-4 ml-12">
        <h2>
          <a href="/">Logo</a>
        </h2>
        <h2>
          <a href="/dashboard">Dashboard</a>
        </h2>
        <h2>
          <a href="/pricing">Pricing</a>
        </h2>
      </div>
      <div className="flex items-center gap-4 mr-12">
        <h2>Schedule a Demo</h2>
        {!session
          ? (
            <div className="flex gap-2">
              <LoginButton text="Log in" />
              <RegisterButton text="Get started for free" />
            </div>
          )
          : <LogoutButton text="Log out" />}
      </div>
    </header>
  );
}

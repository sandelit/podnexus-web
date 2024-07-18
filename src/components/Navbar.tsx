import { Button } from "@/components/ui/button";

export default function Navbar() {
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
        <h2>
          Schedule a Demo
        </h2>
        <h2>
          <a href="/login">Log in</a>
        </h2>
        <Button>
          <a href="/register">Get started for free</a>
        </Button>
      </div>
    </header>
  );
}

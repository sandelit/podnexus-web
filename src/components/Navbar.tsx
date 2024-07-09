import { Button } from "@/components/ui/button"

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
        Pricing
      </h2>
    </div>
    <div className="flex items-center gap-4 mr-12">
      <h2>
        Schedule a Demo
      </h2>
      <h2>
        Log In
      </h2>
      <Button>
        Get Started for Free
      </Button>
    </div>
  </header>
  )
  
}

"use client";
export default function Home() {
  const handleLogin = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };
  return (
    <main>
      HOME

      <button onClick={handleLogin}>login with google</button>
    </main>
  );
}

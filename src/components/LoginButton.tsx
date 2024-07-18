// src/app/components/LoginButton.jsx
"use client";

import { Button } from "./ui/button";

export default function LoginButton() {
  const handleLogin = () => {
    // handle login
  };

  return <Button onClick={handleLogin}>Login with Google</Button>;
}

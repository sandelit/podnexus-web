"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function LoginButton({ text }: any) {
  const handleLogin = () => {
    signIn();
  };

  return <Button onClick={handleLogin}>{text}</Button>;
}

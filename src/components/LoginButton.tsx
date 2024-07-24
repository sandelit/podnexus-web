"use client";

import { Button } from "./ui/button";

export default function LoginButton({ text }: any) {
  const handleLogin = () => {
    //
  };

  return <Button onClick={handleLogin}>{text}</Button>;
}

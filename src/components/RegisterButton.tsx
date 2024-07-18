"use client";

import { Button } from "./ui/button";

export default function RegisterButton({ text }: any) {
  const handleRegister = () => {
    // handle login
  };

  return <Button onClick={handleRegister}>{text}</Button>;
}

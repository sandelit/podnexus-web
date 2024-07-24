"use client";

import { Button } from "./ui/button";

export default function LogoutButton({ text }: any) {
  const handleLogout = () => {
    //
  };

  return <Button onClick={handleLogout}>{text}</Button>;
}

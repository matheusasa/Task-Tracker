"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div className="p-10 flex flex-col">
      <Button
        onClick={() => {
          signIn("github", { callbackUrl: "/" });
        }}
      >
        Login com GitHub
      </Button>
      <Button
        onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}
      >
        Login com Google
      </Button>
    </div>
  );
}

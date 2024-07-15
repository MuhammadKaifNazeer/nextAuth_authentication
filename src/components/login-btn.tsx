"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button className="mt-2" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}

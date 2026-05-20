"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AuthNav() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => {
      setLoggedIn(!!data.session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (loggedIn) {
    return (
      <li>
        <button
          onClick={handleLogout}
          className="b2-nav-link"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          Log out
        </button>
      </li>
    );
  }

  return (
    <>
      <li><Link href="/login" className="b2-nav-link">Log in</Link></li>
      <li>
        <Link
          href="/signup"
          className="b2-btn b2-btn-primary"
          style={{ padding: "0.45rem 1rem", fontSize: "var(--b2-text-xs)" }}
        >
          Sign up
        </Link>
      </li>
    </>
  );
}

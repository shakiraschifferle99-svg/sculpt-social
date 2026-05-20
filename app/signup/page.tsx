"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Check your email for a confirmation link!");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] b2-bg-hero flex items-center justify-center px-6">
      <div className="b2-card w-full max-w-md">
        <h1 className="b2-hero-headline" style={{ fontSize: "var(--b2-text-3xl)", marginBottom: "var(--b2-space-2)" }}>
          Join Sculpt
        </h1>
        <p className="b2-hero-subline" style={{ fontSize: "var(--b2-text-base)", marginBottom: "var(--b2-space-8)" }}>
          Create your instructor account
        </p>

        <form onSubmit={handleSignUp} style={{ display: "flex", flexDirection: "column", gap: "var(--b2-space-4)" }}>
          <div>
            <label className="b2-label" style={{ display: "block", marginBottom: "var(--b2-space-2)" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "0.7rem 1rem",
                borderRadius: "var(--b2-radius-md)",
                border: "1px solid var(--b2-border-light)",
                background: "rgba(249,246,240,0.15)",
                color: "var(--b2-cream)",
                fontFamily: "var(--b2-font-sans)",
                fontSize: "var(--b2-text-sm)",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label className="b2-label" style={{ display: "block", marginBottom: "var(--b2-space-2)" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="At least 6 characters"
              style={{
                width: "100%",
                padding: "0.7rem 1rem",
                borderRadius: "var(--b2-radius-md)",
                border: "1px solid var(--b2-border-light)",
                background: "rgba(249,246,240,0.15)",
                color: "var(--b2-cream)",
                fontFamily: "var(--b2-font-sans)",
                fontSize: "var(--b2-text-sm)",
                outline: "none",
              }}
            />
          </div>

          {message && (
            <p style={{ fontSize: "var(--b2-text-sm)", color: "var(--b2-cream)", opacity: 0.85, margin: 0 }}>
              {message}
            </p>
          )}

          <button type="submit" className="b2-btn b2-btn-primary" disabled={loading} style={{ width: "100%", marginTop: "var(--b2-space-2)" }}>
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p style={{ marginTop: "var(--b2-space-6)", textAlign: "center", fontSize: "var(--b2-text-sm)", color: "rgba(249,246,240,0.7)" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "var(--b2-cream)", textDecoration: "underline" }}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

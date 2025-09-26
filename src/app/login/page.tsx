"use client";

import { PageLayout, PageSection } from "@/components/ui/page-layout";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageLayout>
      <PageSection className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold  mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your Creation Rights account</p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-card backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <label className="block  mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block  mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full pl-11 pr-11 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover: transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-border bg-card  focus:ring-foreground focus:ring-offset-0"
                  />
                  <span className=" text-sm">Remember me</span>
                </label>
                <Link href="#" className="text-foreground hover:text-muted-foreground text-sm transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button className="w-full rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-foreground hover:text-muted-foreground transition-colors">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-slate-900 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-3 px-4 rounded-xl border border-border bg-card  hover:bg-muted/50 transition-colors">
                  <span>Google</span>
                </button>
                <button className="w-full inline-flex justify-center py-3 px-4 rounded-xl border border-border bg-card  hover:bg-muted/50 transition-colors">
                  <span>GitHub</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}

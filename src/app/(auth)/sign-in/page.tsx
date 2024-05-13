import SignInForm from "@/components/SignInForm";
import { Separator } from "@/components/ui/separator";
import { socialIcons } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Signin() {
  return (
    <main className="main-container mt-5 pb-10 lg:pb-20">
      <div className="flex flex-col gap-5 max-w-sm mx-auto">
        <h2 className="text-secondary text-xl font-extrabold">
          Welcome back! Sign in
        </h2>
        <SignInForm />
        <span className="text-secondary-foreground text-xs text-center">
          Don&apos;t have an account{" "}
          <Link
            href={"/register"}
            className="text-primary-foreground hover:underline"
          >
            Register
          </Link>
        </span>
        <div className="flex-center gap-2">
          <Separator className="w-20" />
          <p className="text-xs sm:text-sm text-secondary-foreground text-nowrap font-medium">
            or use one of these options
          </p>
          <Separator className="w-20" />
        </div>

        <div className="flex items-center justify-around gap-4 py-3 sm:py-4 lg:py-5 px-8">
          {socialIcons.map((icon) => (
            <Link
              href={"#"}
              key={icon.label}
              className="rounded p-4 border border-zinc-200 hover:border-primary-foreground transition-all duration-500 ease-in-out"
            >
              <Image
                src={icon.path}
                alt={icon.label}
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </Link>
          ))}
        </div>

        <Separator />

        <div className="flex flex-col gap-2 sm:gap-3">
          <span className="text-secondary-foreground text-xs text-center">
            By signing in or creating an account, you agree with our{" "}
            <span className="text-primary-foreground cursor-pointer hover:underline">
              Terms & conditions
            </span>{" "}
            and{" "}
            <span className="text-primary-foreground cursor-pointer hover:underline">
              Privacy statement
            </span>
          </span>
          <span className="text-secondary-foreground text-xs text-center">
            All rights reserved. <br /> Copyright 204 - Hotel.com™
          </span>
        </div>
      </div>
    </main>
  );
}

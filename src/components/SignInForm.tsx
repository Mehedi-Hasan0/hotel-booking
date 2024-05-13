"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { signInValidation } from "@/lib/validation";
import { useState } from "react";
import { toast } from "sonner";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<z.infer<typeof signInValidation>>({
    resolver: zodResolver(signInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signInValidation>) {
    // Form data will be send to the backend
    console.log(values);
    // dummy response
    toast("Welcome back to Hotel.com", {
      action: {
        label: "Close",
        onClick: () => console.log("Close"),
      },
    });
    // redirecting to home page
    setTimeout(() => {
      window.location.href = "/";
    }, 700);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex-center gap-4 border border-slate-200 rounded-md">
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Password"
                    {...field}
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="cursor-pointer mr-2 hover:bg-zinc-100 transition-colors duration-300 ease-in-out rounded"
                  >
                    {showPassword ? (
                      <IoEyeOffOutline
                        size={24}
                        className="text-secondary-foreground w-8 h-8 p-2 "
                      />
                    ) : (
                      <IoEyeOutline
                        size={24}
                        className="text-secondary-foreground w-8 h-8 p-2 "
                      />
                    )}
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-primary-foreground text-white mt-2 md:mt-4"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;

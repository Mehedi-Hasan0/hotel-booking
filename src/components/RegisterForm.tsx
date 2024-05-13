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
import { registerValidation } from "@/lib/validation";
import { useState } from "react";
import { toast } from "sonner";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const form = useForm<z.infer<typeof registerValidation>>({
    resolver: zodResolver(registerValidation),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof registerValidation>) {
    // Form data will be send to the backend
    console.log(values);
    // dummy response
    toast("Your account is created", {
      action: {
        label: "Close",
        onClick: () => console.log("Close"),
      },
    });
    // redirecting to home paage
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
        {/* confirm password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <div className="flex-center gap-4 border border-slate-200 rounded-md">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Confirm password"
                    {...field}
                  />
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="cursor-pointer mr-2 hover:bg-zinc-100 transition-colors duration-300 ease-in-out rounded"
                  >
                    {showConfirmPassword ? (
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

export default RegisterForm;

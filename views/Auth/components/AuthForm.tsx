import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Input from "@/components/inputs/Input";
import { useCallback, useEffect, useState } from "react";
import {
  FieldValues,
  useForm,
  FieldErrors,
  SubmitHandler,
} from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm<FieldValues, FieldErrors>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      // confirmPassword: "",
    },
  });

  const password = watch("password");

  // const confirmPassword = watch("confirmPassword");

  // const isPasswordMatch = password === confirmPassword;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Something went wrong"))
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials");
          }

          if (callback?.ok && !callback?.error) {
            toast.success("Logged in!");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, {
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials");
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Logged in!");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div className="flex flex-col space-y-3">
        {/* header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            {variant === "REGISTER" ? "Register" : "Login"}
          </h1>
          <Logo />
        </div>
        {/* indicator */}
        <h3 className="text-center text-primary font-medium text-xl">
          {variant === "REGISTER"
            ? "Register as a Writer/Reader"
            : "Login as a Writer/Reader"}
        </h3>
      </div>
      <div>
        {/* form */}
        <form
          className="flex flex-col space-y-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === "REGISTER" && (
            <>
              <div className="flex flex-col space-y-4">
                <Input
                  label="Name"
                  id="name"
                  type="text"
                  placeholder="Name"
                  register={register}
                  required
                  errors={errors}
                  className="w-full"
                />
              </div>
            </>
          )}

          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Email"
            register={register}
            required
            errors={errors}
            className="w-full"
          />
          <Input
            label="Password"
            id="password"
            placeholder="Password"
            type="password"
            register={register}
            required
            errors={errors}
            className="w-full"
          />
          {/* {variant === "REGISTER" && (
            <>
              <Input
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                register={register} 
                required
                errors={errors}
                className="w-full"
              />
            </>
          )} */}

          <Button
            onClick={() => {}}
            className="w-full"
            buttonType="submit"
            isLoading={isLoading}
            disabled={isLoading}
          >
            {variant === "REGISTER" ? "Register" : "Login"}
          </Button>
        </form>
        {/* socials */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        {/* footer */}
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

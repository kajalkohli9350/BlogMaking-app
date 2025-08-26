"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Formfield from "../common/Formfield";
import Button from "../common/Button";
import Heading from "../common/Heading";
import Socialauth from "./Socialauth";
import { Registerschema, RegisterschemaType } from "@/schemas/Registerschema";

const Registerform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterschemaType>({ resolver: zodResolver(Registerschema) });
  const onSubmit: SubmitHandler<RegisterschemaType> = (data) => {
    console.log("data>>>", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[500px] mx-auto mt-8 gap-2"
    >
      <Heading title="create to your BlogMaking account" lg center />
      <Formfield
        id="name"
        label="name"
        register={register}
        errors={errors}
        placeholder="name"
      />
      <Formfield
        id="email"
        label="email"
        register={register}
        errors={errors}
        placeholder="Enter your email"
      />
      <Formfield
        id="password"
            label="password"
        type="password"
        register={register}
        errors={errors}
        placeholder="Enter your password"
      />
      <Formfield
        id="confirmPassword"
            label="confirmPassword"
        type="password"
        register={register}
        errors={errors}
        placeholder="confirmPassword"
      />
      <Button type="submit" label="Register" />
      <div className="flex justify-center my-2">Or</div>
      <Socialauth />
    </form>
  );
};

export default Registerform;

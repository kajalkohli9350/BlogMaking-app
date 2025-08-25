"use client";

import { Loginschema, LoginschemaType } from "@/schemas/Loginschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Formfield from "../common/Formfield";
import Button from "../common/Button";
import Heading from "../common/Heading";

const Loginform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginschemaType>({ resolver: zodResolver(Loginschema) });
    const onSubmit: SubmitHandler<LoginschemaType> = (data) => {
  console.log("data>>>", data);
};

    
  return <form onSubmit ={handleSubmit(onSubmit)} className="flex flex-col max-w-[500px] mx-auto mt-8 gap-2"> 
  <Heading title="Login to your account" lg center/>
    <Formfield
    id="email"
    register={register}
    errors={errors}
    placeholder="Enter your email"
    />
    <Formfield
    id="password"
    type="password"
    register={register}
    errors={errors}
    placeholder="Enter your password"
    />
    <Button type="submit" label="Login" />
  </form>;
};

export default Loginform;

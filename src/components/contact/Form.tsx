"use client";
import { Toaster } from "sonner";
import { motion } from "framer-motion";
import FormError from "@/utils/FormError";
import Input from "@/utils/Input";
import useContactForm from "@/hooks/useContactForm";
import { Mail, Phone } from "lucide-react";
import IconLink from "@/utils/IconLink";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};
export default function Form() {
  const { errors, handleSubmit, onSubmit, register } = useContactForm();

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        {/* email */}
        <Input
          errors={{
            required: `Email is required!`,
          }}
          name="email"
          placeholder="Email"
          register={register}
          type="email"
        />
        {errors.email && (
          <FormError
            message={errors.email.message ? errors.email.message : ""}
          />
        )}
        {/* name */}
        <Input
          errors={{
            required: `Name is required!`,
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long.",
            },
          }}
          name="name"
          placeholder="Subject"
          register={register}
          type="text"
        />
        {errors.name && (
          <FormError message={errors.name.message ? errors.name.message : ""} />
        )}
        {/* message */}
        <motion.textarea
          variants={item}
          rows={3}
          placeholder="Message"
          {...register("message", {
            required: "Message is required!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters",
            },
            minLength: {
              value: 50,
              message: "Message should be more than 50 characters",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <FormError
            message={errors.message.message ? errors.message.message : ""}
          />
        )}
        <motion.input
          variants={item}
          value="Cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
        <hr className="text-muted bg-muted w-full" />
        <motion.div
          variants={item}
          className="flex flex-row flex-wrap gap-7 justify-center items-center"
        >
          <IconLink
            href="mailto:symaherhiba@gmail.com?subject=Front End Developer (ReactJS | NextJS)"
            title="Email"
            target="_blank"
          >
            <Mail />
          </IconLink>
          <IconLink href="tel:+963952457853" title="Phone" target="_blank">
            <Phone />
          </IconLink>
        </motion.div>
      </motion.form>
    </>
  );
}

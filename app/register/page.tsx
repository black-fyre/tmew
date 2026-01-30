import type { Metadata } from "next";
import RegisterForm from "@/components/sections/RegisterForm";

export const metadata: Metadata = {
  title: "Register | The Mechanics of Learning 2.0",
  description:
    "Register for The Mechanics of Learning 2.0 — a student learning conference by The More Excellent Way at the University of Ibadan.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}

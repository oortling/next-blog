"use server";

import { db } from "@/db";
import { Prisma } from "@/generated/prisma";
import { revalidatePath } from "next/cache";
import z from "zod";

const FormSchema = z.object({
  id: z.number(),
  email: z.string().min(1, { message: "Email is required" }),
  isSubscribed: z.boolean(),
});

const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

type State = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};

export async function createSubscriber(prevState: State, formData: FormData) {
  const validatedField = CreateSubscriber.safeParse({
    email: formData.get("email"),
  });

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Email is required",
    };
  }

  const { email } = validatedField.data;

  try {
    await db.subscriber.create({
      data: {
        email: email,
      },
    });
    revalidatePath("/");
    return { message: "Subcriber created successfully" };
  } catch (error) {
    if (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return {
            message: "Email already exists",
          };
        }
      }
    }
    return { message: "Database Error: Failed to create subcriber" };
  }
}

"use server"
import { cookies } from "next/headers";

export default async function setLanguageValue(value) {
    (await cookies()).set('language', value)
}
import { defineNuxtPlugin } from "#app";
import emailjs from "@emailjs/browser";

export default defineNuxtPlugin(() => {
    emailjs.init(useRuntimeConfig().public.EMAILJS_PUBLIC_KEY);

    return {
        provide: {
            emailjs
        }
    }
})
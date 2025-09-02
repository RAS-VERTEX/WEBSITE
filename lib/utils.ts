// FILE PATH: /lib/utils.ts
// Create the /lib directory and add this utils.ts file

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

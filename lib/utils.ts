import type { ClassValue } from "clsx"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

// Tailwind CLSX + twMerge
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

// Capitalizes the first letter of a string
export const firstToUpperCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

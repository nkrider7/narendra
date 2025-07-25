import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const truncateText = (str: string, n: number) => {
  return str.length > n ? str.slice(0, n - 3) + '...' : str
}
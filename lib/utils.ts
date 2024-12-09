import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { customAlphabet } from 'nanoid'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10)

export async function generateFeedbackLink(customSlug?: string): Promise<string> {
  const slug = customSlug || nanoid()
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  return `${baseUrl}/feedback/${slug}`
}


import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getTodayDateAndMonth() {
  const today = new Date();
  const date = today.getDate(); // Gets the current day of the month (1-31)
  const month = today.getMonth() + 1; // Gets the current month (0-11), so add 1 to make it (1-12)
  
  return { date, month };
}
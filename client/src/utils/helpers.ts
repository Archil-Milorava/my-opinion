import { format } from "date-fns";

export const formatDate = (date: string) => {
  return format(new Date(date), "MMM dd,yyyy");
};

export const readTime = (text: string) => {
  const words = text.trim().split(" ").length;
  const minutes = Math.ceil(words / 200);

  return ` ${minutes} minute${minutes > 1 ? "s" : ""} read`;
};

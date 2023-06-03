import { ENV } from "@/lib/helpers/config";

export const BASE_URL: string = ENV("BASE_API") ?? "https://dummyjson.com";

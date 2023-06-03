/**
 * Environment Variable getter helper
 * @param key
 * @returns Environment value of passed key
 */
export function ENV(key: string): string | undefined {
  return process.env[key];
}

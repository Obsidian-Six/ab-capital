const ORIGIN = process.env.NEXT_PUBLIC_ASSET_ORIGIN ?? "";

/** Prefix WordPress upload paths with the asset origin (empty in production). */
export function asset(src: string): string;
export function asset(src: string | undefined): string | undefined;
export function asset(src: string | undefined) {
  if (!src || !ORIGIN || !src.startsWith("/wp-content/")) return src;
  return ORIGIN + src;
}

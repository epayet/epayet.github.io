// export { classNames } from "@quartz-community/utils/lang";

// quick fix
export function classNames(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

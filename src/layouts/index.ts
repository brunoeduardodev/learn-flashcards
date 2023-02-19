import type { ReactNode } from "react";

export type WithLayout<T> = T & {
  Layout: ({ children }: { children: ReactNode }) => JSX.Element;
};

export function hasLayout<T extends object>(arg: T): arg is WithLayout<T> {
  return "Layout" in arg;
}

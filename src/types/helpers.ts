import type { ComponentProps, ComponentType } from "react";
import type { VariantProps } from "class-variance-authority";

export type ComponentWithClassname = ComponentType<{
  className?: string;
}>;

type ValidComponent = ComponentWithClassname | keyof JSX.IntrinsicElements;

export type PropsWithVariants<
  BaseComponent extends ValidComponent,
  Styles extends (...args: any) => any,
  Props extends object
> = VariantProps<Styles> &
  Props &
  Omit<ComponentProps<BaseComponent>, keyof VariantProps<Styles>>;

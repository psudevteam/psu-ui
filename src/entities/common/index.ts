export type TSize = "sm" | "md" | "lg";

export type TVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "info"
  | "ghost"
  | "error";

export type TVariantType = "solid" | "outline";

export type TState = "default" | "loading";

export type TStyle = {
  size?: TSize;
  variant?: TVariant;
  variantType?: TVariantType;
  state?: TState;
};

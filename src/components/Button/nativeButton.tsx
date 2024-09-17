import React from "react";
import { Button, ButtonProps } from "antd";

enum VarientEnum {
  default = "default",
  green = "green",
}

interface DoubleIconButtonProps extends ButtonProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  type: "primary" | "default" | "dashed" | "link" | "text";
  size?: "large" | "small" | "middle";
  variant?: "default" | "green";
}

export const NativeButton: React.FC<DoubleIconButtonProps> = ({
  leftIcon,
  rightIcon,
  children,
  variant = "default",
  ...props
}) => {
  const defaultColorClasName =
    props.type && props.type !== "primary" && variant === VarientEnum.default
      ? "default-button"
      : "";
  const defaultGreenColorClasName =
    props.type && props.type !== "primary" && variant === VarientEnum.green
      ? "green-default-button"
      : "";
  const textColorClasName =
    props.type && props.type === "text" && variant === VarientEnum.green
      ? "green-text-button"
      : "";

  return (
    <Button
      {...props}
      className={
        `${defaultColorClasName} ` +
        `${defaultGreenColorClasName} ` +
        `${textColorClasName}`
      }
      style={{ lineHeight: 0 }}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </Button>
  );
};

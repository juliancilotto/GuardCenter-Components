import React from "react";
import { Button, Flex } from "antd";

interface DoubleIconButtonProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  type: "primary" | "default" | "dashed" | "link" | "text";
  isDisabled?: boolean;
  isGreen?: boolean;
}

export const TextButtonLayout: React.FC<DoubleIconButtonProps> = ({
  leftIcon,
  rightIcon,
  children,
  type = "primary",
  isDisabled = false,
  isGreen = false,
  ...props
}) => (
  <Flex gap="small" vertical>
    <Flex gap="small">
      <Button
        size="large"
        type={type}
        {...props}
        disabled={isDisabled}
        style={{
          paddingTop: 7,
          paddingBottom: 7,
          paddingInline: 12,

          color: isDisabled ? "#98A2B3" : undefined,
          cursor: isDisabled ? "not-allowed" : "pointer",
        }}
      >
        {leftIcon && (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              color: isDisabled ? "#98A2B3" : "white",
            }}
          >
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              color: isDisabled ? "#98A2B3" : "white",
            }}
          >
            {rightIcon}
          </span>
        )}
      </Button>
    </Flex>
  </Flex>
);

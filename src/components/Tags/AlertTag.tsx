import React from "react";
import { Tag } from "antd";

interface AlertTagProps {
  fontSize: "14px" | "12px";
  backgroundColor: string;
  color: string;
  label: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  borderColor?: string;
  width?: string;
}

export const AlertTag: React.FC<AlertTagProps> = ({
  fontSize,
  backgroundColor,
  color,
  label,
  leftIcon,
  rightIcon,
  borderColor = "#EAECF0",
  width,
}) => {
  return (
    <div>
      <Tag
        color="white"
        style={{
          display: "flex",
          alignItems: "center",
          borderColor: borderColor,
          color: color,
          fontWeight: "500",
          fontSize: fontSize,
          borderRadius: "6px",
          backgroundColor: backgroundColor,
          gap: "5px",
          width: width,
        }}
      >
        {leftIcon && <span>{leftIcon}</span>} {label}{" "}
        {rightIcon && <span>{rightIcon}</span>}
      </Tag>
    </div>
  );
};

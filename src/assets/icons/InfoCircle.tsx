import React from "react";

interface IconProps {
  fillColor: string;
  isDisabled?: boolean;
}

export const InfoCircle: React.FC<IconProps> = ({
  fillColor,
  isDisabled = false,
}: IconProps) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12C1.5 17.79 6.21 22.5 12 22.5C17.79 22.5 22.5 17.79 22.5 12C22.5 6.21 17.79 1.5 12 1.5ZM12 21.5C6.762 21.5 2.5 17.238 2.5 12C2.5 6.762 6.762 2.5 12 2.5C17.238 2.5 21.5 6.762 21.5 12C21.5 17.238 17.238 21.5 12 21.5ZM12.5 11.929V16.5C12.5 16.776 12.276 17 12 17C11.724 17 11.5 16.776 11.5 16.5V11.929C11.5 11.653 11.724 11.429 12 11.429C12.276 11.429 12.5 11.652 12.5 11.929ZM12.75 8.5C12.75 8.915 12.4159 9.25 12.0039 9.25C11.5929 9.25 11.25 8.915 11.25 8.5C11.25 8.085 11.577 7.75 11.989 7.75H12.0039C12.4159 7.75 12.75 8.085 12.75 8.5Z"
      fill={isDisabled ? "#98A2B3" : fillColor}
    />
  </svg>
);

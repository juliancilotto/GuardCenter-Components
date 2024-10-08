import React from "react";

interface IconProps {
  fillColor: string;
  isDisabled?: boolean;
}

export const ExclamationCircle: React.FC<IconProps> = ({
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
      d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12C1.5 17.79 6.21 22.5 12 22.5C17.79 22.5 22.5 17.79 22.5 12C22.5 6.21 17.79 1.5 12 1.5ZM12 21.5C6.762 21.5 2.5 17.238 2.5 12C2.5 6.762 6.762 2.5 12 2.5C17.238 2.5 21.5 6.762 21.5 12C21.5 17.238 17.238 21.5 12 21.5ZM12.75 15.5C12.75 15.915 12.4159 16.25 12.0039 16.25C11.5929 16.25 11.25 15.915 11.25 15.5C11.25 15.085 11.577 14.75 11.989 14.75H12.0039C12.4159 14.75 12.75 15.085 12.75 15.5ZM11.5 12.071V7.5C11.5 7.224 11.724 7 12 7C12.276 7 12.5 7.224 12.5 7.5V12.071C12.5 12.347 12.276 12.571 12 12.571C11.724 12.571 11.5 12.348 11.5 12.071Z"
      fill={isDisabled ? "#98A2B3" : fillColor}
    />
  </svg>
);

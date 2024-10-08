interface IconProps {
  fillColor: string;
  isDisabled?: boolean;
}

export const Calendar: React.FC<IconProps> = ({
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
      d="M18 4H16.5V3C16.5 2.724 16.276 2.5 16 2.5C15.724 2.5 15.5 2.724 15.5 3V4H8.5V3C8.5 2.724 8.276 2.5 8 2.5C7.724 2.5 7.5 2.724 7.5 3V4H6C3.71 4 2.5 5.21 2.5 7.5V18C2.5 20.29 3.71 21.5 6 21.5H18C20.29 21.5 21.5 20.29 21.5 18V7.5C21.5 5.21 20.29 4 18 4ZM6 5H7.5V6C7.5 6.276 7.724 6.5 8 6.5C8.276 6.5 8.5 6.276 8.5 6V5H15.5V6C15.5 6.276 15.724 6.5 16 6.5C16.276 6.5 16.5 6.276 16.5 6V5H18C19.729 5 20.5 5.771 20.5 7.5V8.5H3.5V7.5C3.5 5.771 4.271 5 6 5ZM18 20.5H6C4.271 20.5 3.5 19.729 3.5 18V9.5H20.5V18C20.5 19.729 19.729 20.5 18 20.5Z"
      fill={isDisabled ? "#98A2B3" : fillColor}
    />
  </svg>
);

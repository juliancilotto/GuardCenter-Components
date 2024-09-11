interface IconProps {
  fillColor: string;
  isDisabled?: boolean;
}

export const Dot: React.FC<IconProps> = ({
  fillColor,
  isDisabled = false,
}: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="4" fill={isDisabled ? "#98A2B3" : fillColor} />
  </svg>
);

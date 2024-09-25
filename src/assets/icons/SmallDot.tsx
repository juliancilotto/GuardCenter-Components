interface IconProps {
  fillColor: string;
  isDisabled?: boolean;
}

export const SmallDot: React.FC<IconProps> = ({
  fillColor,
  isDisabled = false,
}: IconProps) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="4" fill={isDisabled ? "#98A2B3" : fillColor} />
  </svg>
);

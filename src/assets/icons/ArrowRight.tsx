interface IconProps {
  fillColor: string;
  isDisable?: boolean;
}

export const ArrowRight: React.FC<IconProps> = ({
  fillColor,
  isDisable = false,
}: IconProps) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.353 12.354L14.353 19.354C14.255 19.452 14.127 19.5 13.999 19.5C13.871 19.5 13.743 19.451 13.645 19.354C13.45 19.159 13.45 18.842 13.645 18.647L19.791 12.501H3C2.724 12.501 2.5 12.277 2.5 12.001C2.5 11.725 2.724 11.501 3 11.501H19.793L13.647 5.35499C13.452 5.15999 13.452 4.84296 13.647 4.64796C13.842 4.45296 14.159 4.45296 14.354 4.64796L21.354 11.648C21.4 11.694 21.4369 11.75 21.4619 11.811C21.5129 11.933 21.5129 12.0711 21.4619 12.1931C21.4359 12.2521 21.399 12.308 21.353 12.354Z"
      fill={isDisable ? "#98A2B3" : fillColor}
    />
  </svg>
);

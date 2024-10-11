interface IconProps {
  fillColor: string;
  isDisabled?: boolean;
}

export const EyeOpen: React.FC<IconProps> = ({
  fillColor,
  isDisabled = false,
}: IconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.0209 10.2671C19.7339 8.11309 16.8519 4.5 11.9999 4.5C7.14789 4.5 4.26589 8.11309 2.97889 10.2671C2.33889 11.3361 2.33892 12.6639 2.97792 13.7339C4.26492 15.8879 7.14691 19.501 11.9989 19.501C16.8509 19.501 19.7329 15.8879 21.0199 13.7339C21.6599 12.6639 21.6599 11.3361 21.0209 10.2671ZM20.163 13.2209C20.162 13.2209 20.162 13.2209 20.163 13.2209C18.985 15.1929 16.3579 18.5 11.9999 18.5C7.64189 18.5 5.0148 15.1919 3.8368 13.2209C3.3878 12.4679 3.38778 11.533 3.83778 10.78C5.01478 8.80803 7.64189 5.50098 11.9999 5.50098C16.3579 5.50098 18.985 8.80903 20.163 10.78C20.612 11.532 20.612 12.4679 20.163 13.2209ZM11.9999 8C9.79389 8 7.99989 9.794 7.99989 12C7.99989 14.206 9.79389 16 11.9999 16C14.2059 16 15.9999 14.206 15.9999 12C15.9999 9.794 14.2059 8 11.9999 8ZM11.9999 15C10.3459 15 8.99989 13.654 8.99989 12C8.99989 10.346 10.3459 9 11.9999 9C13.6539 9 14.9999 10.346 14.9999 12C14.9999 13.654 13.6539 15 11.9999 15Z"
      fill={isDisabled ? "#98A2B3" : fillColor}
    />
  </svg>
);

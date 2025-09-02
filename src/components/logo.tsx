type LogoProps = {
  size?: number;
  bgColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
};

export const Logo = ({
  size = 34,
  bgColor = "#3B82F6",
  strokeColor = "white",
  strokeWidth = 2,
  className,
}: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_6_123)">
        <rect width="34" height="34" fill={bgColor} />
        <path
          d="M25.4 19.4444C27.188 17.66 29 15.5211 29 12.7222C29 10.9394 28.3046 9.22955 27.0669 7.96889C25.8292 6.70823 24.1504 6 22.4 6C20.288 6 18.8 6.61111 17 8.44444C15.2 6.61111 13.712 6 11.6 6C9.84957 6 8.17084 6.70823 6.9331 7.96889C5.69536 9.22955 5 10.9394 5 12.7222C5 15.5333 6.8 17.6722 8.6 19.4444L17 28L25.4 19.4444Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.46399 17H14L14.84 15.7778L17.36 21.1556L21.2 12.1111H27.8"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_123">
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V30C34 32.2091 32.2091 34 30 34H4C1.79086 34 0 32.2091 0 30V4Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

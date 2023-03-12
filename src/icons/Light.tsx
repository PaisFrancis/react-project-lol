const Light = ({ fillColor }: { fillColor: string }) => {
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      fill="white"
      stroke="white"
    >
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
        fill={fillColor}
      />
      <circle
        cx="256"
        cy="256"
        r="80"
        fill="white"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

export default Light;

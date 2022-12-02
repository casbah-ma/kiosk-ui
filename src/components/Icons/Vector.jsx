const Vector = function ({ width, height, className }) {
  return (
    <svg
      width={width ? width : "268"}
      height={height ? height : "268"}
      viewBox="0 0 268 268"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M173.141 94.8586C148.965 70.7087 134 37.3104 134 0.400024C134 37.3104 119.035 70.7104 94.8584 94.8586C70.7086 119.034 37.2702 134 0.399902 134C37.3102 134 70.7103 148.965 94.8852 173.141C119.035 197.291 134 230.69 134 267.6C134 230.69 148.965 197.29 173.141 173.141C197.291 148.966 230.73 134 267.6 134C230.73 134 197.29 119.035 173.141 94.8586Z"
        fill="url(#paint0_linear_113_2021)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_113_2021"
          x1="134"
          y1="0.400024"
          x2="134"
          y2="267.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D8D8D8" />
          <stop offset="1" stop-color="#D8D8D8" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Vector;

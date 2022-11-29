const ArrowRight = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      viewBox="0 0 62 61"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.6855 30.4364L30.885 -0.000488281L25.9318 4.9527L47.9742 26.9969L0.384712 26.9969V34.0028L47.9742 34.0028L25.9318 56.0469L30.885 61.0001L61.6855 30.4364Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowRight;

const Closed = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
      />
    </svg>
  );
};

export default Closed;

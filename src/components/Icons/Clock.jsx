const Clock = function ({ width, height, color }) {
  return (
    <svg
      width={width} // added size here
      height={height} // added size here
      fill={color} // added color here
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m5 11h-6V7h1.5v4.5H17V13Z"
      />
    </svg>
  );
};

export default Clock;

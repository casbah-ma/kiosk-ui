const ChevronDown = function ({ width, height, color }) {
  return (
    <svg
      width={width ? width : "64"}
      height={height ? height : "36"}
      viewBox="0 0 64 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.2224 34.8147L1.15006 6.8397C-0.382421 5.21218 -0.38242 2.71971 1.15006 1.18723C2.68254 -0.345255 5.27006 -0.345254 6.80254 1.18723L32 26.3847L57.1974 1.18723C58.825 -0.34525 61.3174 -0.345249 62.8499 1.18723C64.3824 2.71971 64.3824 5.21225 62.8499 6.83971L34.8749 34.8147C33.2473 36.3472 30.7549 36.3472 29.2224 34.8147Z"
        fill="white"
      />
    </svg>
  );
};

export default ChevronDown;

const Good = function ({ width, height, color }) {
  return (
    <svg
      width={width ? width : "180"}
      height={height ?height :"180"}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M90.008 0.00779724C40.298 0.00779724 0 40.3038 0 89.9998C0 139.696 40.296 179.992 89.992 179.992C139.688 179.992 179.984 139.696 179.984 89.9998C179.984 40.3038 139.702 0.00779724 90.008 0.00779724ZM53.954 58.7258C61.79 58.7258 68.1336 65.0852 68.1336 72.9054C68.1336 80.7256 61.7742 87.085 53.954 87.085C46.1336 87.085 39.7744 80.7256 39.7744 72.9054C39.7744 65.0852 46.1182 58.7258 53.954 58.7258ZM138.97 113.96C133.829 131.835 113.876 145.156 90.016 145.156C66.156 145.156 46.18 131.835 41.062 113.96C39.7651 109.421 43.1792 104.897 47.898 104.897H132.148C136.843 104.897 140.265 109.421 138.968 113.96H138.97ZM126.048 87.0998C118.212 87.0998 111.869 80.7404 111.869 72.9202C111.869 65.0998 118.228 58.7406 126.048 58.7406C133.869 58.7406 140.228 65.1 140.228 72.9202C140.228 80.7406 133.884 87.0998 126.048 87.0998Z"
        fill="url(#paint0_linear_75_2519)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_2519"
          x1="89.992"
          y1="0.00779724"
          x2="89.992"
          y2="179.992"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#54B0B3" />
          <stop offset="1" stop-color="#438EC8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Good;
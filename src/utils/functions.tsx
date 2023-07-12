export const insertSvgCart = (count:number, dataTest?: string, color = 'white') => {
  return (
    <svg
      width="45"
      height="40"
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.1596 15.3468L37.5166 24.5585C37.314 25.576
        36.4844 26.1948 35.5277 26.2064H11.5742L11.0986 28.8262H33.928C35.1301
          28.9155 35.9455 29.7477 35.9601 30.8122C35.8727 31.9846 35.0212 32.7836
          33.928 32.7982H8.67733C7.31171 32.6781 6.4974 31.6143 6.64517
            30.4319L7.72609 24.6851L6.08307 8.54356L1.41346 7.10697C0.272325
            6.66418 -0.193419 5.65532 0.0730986 4.61391C0.516249 3.52856 1.57811
              3.03268 2.6241 3.30399L8.59084 5.16324C9.39467 5.45771 9.85709 6.10075
              9.97443 6.85346L10.3203 10.0649L37.3869 13.0227C38.6305 13.286 39.3057
                14.2487 39.1596 15.3468ZM14.8644 36.9682C14.8644 38.6426 13.4755
                40 11.7621 40C10.0487 40 8.65983 38.6426 8.65983 36.9682C8.65983
                  35.2937 10.0488 33.9363 11.7621 33.9363C13.4754 33.9364 14.8644
                  35.2938 14.8644 36.9682ZM33.3848 36.9682C33.3848 38.6426 31.9959
                    40 30.2825 40C28.5692 40 27.1802 38.6426 27.1802 36.9682C27.1802
                    35.2937 28.5692 33.9363 30.2825 33.9363C31.9959 33.9364 33.3848
                      35.2938 33.3848 36.9682Z"
        fill="white"
      />
      <ellipse
        cx="31.9592"
        cy="11.8471"
        rx="12.1225"
        ry="11.8471"
        fill="#2FC18C"
      />
      <text
        x="32"
        y="15"
        fill={ color }
        style={ {
          fontSize: '10px',
          textAnchor: 'middle' } }
        data-testid={ dataTest }
      >
        {count}
      </text>
    </svg>
  );
};
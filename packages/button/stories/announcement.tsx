import * as React from 'react';

export const Announcement = ({ color = 'currentColor', size = 24, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M19.25 10C19.25 12.7289 17.85 15.25 16.5 15.25C15.15 15.25 13.75 12.7289 13.75 10C13.75 7.27106 15.15 4.75 16.5 4.75C17.85 4.75 19.25 7.27106 19.25 10Z"></path>
      <path d="M16.5 15.25C16.5 15.25 8 13.5 7 13.25C6 13 4.75 11.6893 4.75 10C4.75 8.31066 6 7 7 6.75C8 6.5 16.5 4.75 16.5 4.75"></path>
      <path d="M6.75 13.5V17.25C6.75 18.3546 7.64543 19.25 8.75 19.25H9.25C10.3546 19.25 11.25 18.3546 11.25 17.25V14.5"></path>
    </svg>
  );
};

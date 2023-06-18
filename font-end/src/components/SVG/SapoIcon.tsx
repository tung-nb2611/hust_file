import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

function SapoIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 14 15">
      <path
        d="M14 8.21713V2.70717C14 1.21315 12.7551 0 11.2221 0L2.77792 1.35657C1.24485 1.35657 0 2.56972 0 4.06375V12.2928C0 13.7869 1.24485 15 2.77792 15H11.2221C12.7551 15 14 13.7869 14 12.2928V9.07171C13.9939 8.93426 13.9877 8.79084 13.9877 8.64741C13.9877 8.50398 13.9939 8.36056 14 8.21713ZM10.7376 13.2191C9.75646 13.8765 8.57906 14.2052 7.19317 14.2052C5.20017 14.2052 3.36049 13.506 1.67411 12.1076L3.477 10.3327C4.59308 11.498 5.88086 12.0837 7.33421 12.0837C7.89225 12.0837 8.40736 11.9701 8.88568 11.7371C9.48051 11.4562 9.77486 11.0737 9.77486 10.5777C9.77486 9.85458 9.23522 9.39442 8.15593 9.19721L6.66579 8.92231C5.33509 8.67729 4.34166 8.36056 3.7039 7.98406C2.74113 7.41036 2.26281 6.58566 2.26281 5.51594C2.26281 4.29681 2.77179 3.32869 3.78362 2.60558C4.67893 1.94821 5.77661 1.61952 7.07665 1.61952C8.73237 1.61952 10.3513 2.16932 11.9396 3.2749L10.4433 5.07371C9.35786 4.18327 8.26018 3.74104 7.13798 3.74104C6.59834 3.74104 6.10775 3.85458 5.66623 4.08765C5.13885 4.36853 4.8813 4.751 4.8813 5.24701C4.8813 5.88645 5.42094 6.30478 6.50022 6.50797L9.1555 6.99801C11.3141 7.39243 12.3995 8.45617 12.3995 10.1833C12.3811 11.4681 11.8353 12.4781 10.7376 13.2191Z"
        fill="curentColor"
      />
    </SvgIcon>
  );
}

export default SapoIcon;
import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

function PrintIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <path
        d="M14.1628 0H5.83691C4.45299 0 3.33691 1.11607 3.33691 2.5V5.83706C3.33691 6.29464 3.70522 6.67411 4.17397 6.67411C4.64272 6.67411 5.01102 6.30581 5.01102 5.83706V2.5C5.01102 2.04241 5.37932 1.66295 5.84807 1.66295H14.2633C14.6762 1.66295 15.011 1.99777 15.011 2.41071V5.82589C15.011 6.28348 15.3793 6.66295 15.8481 6.66295C16.3057 6.66295 16.6851 6.29464 16.6851 5.82589V2.5C16.6628 1.11607 15.5467 0 14.1628 0Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1628 20.0003H5.83691C4.45299 20.0003 3.33691 18.8842 3.33691 17.5003V11.6632C3.33691 11.2056 3.70522 10.8262 4.17397 10.8262H15.8369C16.2945 10.8262 16.674 11.1945 16.674 11.6632V17.5003C16.6628 18.873 15.5467 20.0003 14.1628 20.0003ZM12.7122 15.0005H7.28809C6.9421 15.0005 6.66309 14.7215 6.66309 14.3755C6.66309 14.0295 6.9421 13.7505 7.28809 13.7505H12.701C13.047 13.7505 13.326 14.0295 13.326 14.3755C13.3372 14.7215 13.0582 15.0005 12.7122 15.0005ZM7.288 17.5005H12.7121C13.0581 17.5005 13.3371 17.2215 13.3259 16.8755C13.3259 16.5295 13.0469 16.2505 12.7009 16.2505H7.288C6.94202 16.2505 6.663 16.5295 6.663 16.8755C6.663 17.2215 6.94202 17.5005 7.288 17.5005Z"
        fill="#A3A8AF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.28795 5H17.7121C18.9732 5 20 6.02679 20 7.28795V12.7121C20 13.9186 19.0602 14.9106 17.8745 14.9943V10.9877C17.8745 10.4346 17.4267 10 16.8868 10H3.12444C2.57132 10 2.13672 10.4478 2.13672 10.9877V14.9839C0.945722 14.9066 0 13.922 0 12.7009V7.28795C0 6.02679 1.02679 5 2.28795 5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
export default PrintIcon;

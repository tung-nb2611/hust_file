import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

function OrderIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 21 21">
      <path
        d="M9.51392 0.62085L4.75299 0.640525C4.13583 0.640525 3.55817 0.989988 3.26428 1.53995L0.776367 6.13732L9.03452 6.11764L9.51392 0.62085Z"
        fill="currentColor"
      />
      <path
        d="M19.7621 6.09689L17.2448 1.49952C16.9408 0.949561 16.3733 0.600098 15.746 0.600098L10.9851 0.619773L11.4847 6.11656L19.7621 6.09689Z"
        fill="currentColor"
      />
      <path
        d="M20.0711 9.25777L20.0766 7.63694H20.0646V7.58728L11.003 7.61726H9.54552L0.483863 7.58728V7.63694L0.471924 7.636L0.477434 9.25684L0.471924 10.7934C0.475597 10.7915 0.479271 10.7905 0.482944 10.7896L0.511414 19.0596C0.511414 19.9291 1.20755 20.6383 2.0497 20.6383C2.0497 20.6383 2.0497 20.6383 2.0598 20.6383L10.2738 20.6158L18.4878 20.6383C18.4979 20.6383 18.4979 20.6383 18.4979 20.6383C19.34 20.6383 20.0362 19.9291 20.0362 19.0596L20.0646 10.7896C20.0683 10.7915 20.072 10.7924 20.0757 10.7934L20.0711 9.25777Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export default OrderIcon;
import React from "react";

export default function Popup(props) {
  // eslint-disable-next-line react/prop-types
  return props.trigger ? (
    <div className="popup" data-aos="fade-down">
      <h2>Wir melden uns in kürze!</h2>
    </div>
  ) : (
    ""
  );
}

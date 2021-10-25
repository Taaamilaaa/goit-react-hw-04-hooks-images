import { useEffect } from "react";
import { createPortal } from "react-dom";

const portal = document.querySelector("#portal");

export function Modal({ showModal, children }) {
  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      showModal();
    }
  };
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      showModal();
      window.removeEventListener("keydown", handleKeyDown);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, []);

  return createPortal(
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">{children}</div>
    </div>,
    portal
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Services from "./Services";

export default function ServicesPopup({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div className="space-y-7">
          <h2 className="text-2xl font-semibold text-c_accent">
            Book Services
          </h2>
          <Services onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

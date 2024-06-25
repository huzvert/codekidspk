import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import TrialClass from "./TrialClass";

export default function TrialClassPopup({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6 overflow-y-auto max-h-screen">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div className="space-y-7">
          <h2 className="text-2xl font-semibold text-c_accent">
            Book a Trial Class
          </h2>
          <div className="overflow-y-auto max-h-full">
            <TrialClass onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

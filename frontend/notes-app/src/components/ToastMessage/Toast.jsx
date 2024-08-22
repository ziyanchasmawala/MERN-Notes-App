import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    if (isShown) {
      const timeoutId = setTimeout(() => {
        onClose();
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [onClose]);

  return (
    <div
      className={`absolute top-20 right-6 transition-opacity duration-400 ${
        isShown ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 1000 }} // Ensure it's above other content
    >
      <div
        className={`relative min-w-52 bg-white border shadow-2xl rounded-md ${
          type === "delete" ? "border-red-500" : "border-green-500"
        }`}
      >
        {/* Left-side strip */}
        <div
          className={`absolute top-0 left-0 h-full w-2 ${
            type === "delete" ? "bg-red-500" : "bg-green-500"
          } rounded-l-md`}
        ></div>

        <div className="flex items-center py-2 gap-3 px-4">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              type === "delete" ? "bg-red-50" : "bg-gray-50"
            }`}
          >
            {type === "delete" ? (
              <MdDeleteOutline className="text-xl text-red-500" />
            ) : (
              <LuCheck className="text-xl text-green-500" />
            )}
          </div>
          <p className="text-sm text-slate-800">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;

// components/Header/UserButton.jsx
import { FaUser } from "react-icons/fa";

function UserButton() {
  return (
    <button
      aria-label="User"
      className="text-gray-700 hover:text-blue-600"
    >
      <FaUser className="w-6 h-6" />
    </button>
  );
}

export default UserButton;

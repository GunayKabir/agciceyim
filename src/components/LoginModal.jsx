import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../services/AuthServices";

export default function LoginModal({ onClose }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleVal(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    setError('');

    if (!user.email || !user.password) {
      toast.error("Zəhmət olmasa bütün sahələri doldurun.");
      return;
    }

    userLogin(user)
      .then((item) => {
        toast.success("Daxil olundu!");
        localStorage.setItem('user', JSON.stringify(item));
        navigate("/");
        onClose(); // modalı bağlamaq üçün çağırılır
      })
      .catch(err => {
        toast.error(err.message);
        setError(err.message);
      });
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[300px] p-5 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl text-gray-500"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Daxil ol</h2>

        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={user.email}
          onChange={handleVal}
        />

        <label className="block text-sm mb-1">Şifrə</label>
        <input
          type="password"
          name="password"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={user.password}
          onChange={handleVal}
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <div className="flex justify-between mt-4">
          <button
            onClick={handleLogin}
            className="bg-teal-400 text-white px-4 py-2 rounded-full"
          >
            Daxil ol
          </button>
         <button
  onClick={() => {
    onClose(); // modal bağlansın
    navigate("/SignUp"); // qeydiyyat səhifəsinə keçid etsin
  }}
  className="bg-teal-400 text-white px-4 py-2 rounded-full"
>
  Qeydiyyat
</button>

        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { userSignUp } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    birthdate: '',
    phone: ''
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [operatorCode, setOperatorCode] = useState('');
  const [number, setNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+994');
  const navigate = useNavigate();

  function handleVal(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSignUp(e) {
    e.preventDefault();

    // Bütün sahələri yoxla
    if (
      !user.firstname ||
      !user.lastname ||
      !user.email ||
      !user.birthdate ||
      !operatorCode ||
      !number ||
      !user.password ||
      !confirmPassword
    ) {
      toast.error("Zəhmət olmasa bütün sahələri doldurun.");
      return;
    }

    // Şifrə uzunluğu
    if (user.password.length < 8 || user.password.length > 24) {
      toast.error("Şifrə ən azı 8, maksimum 24 simvoldan ibarət olmalıdır.");
      return;
    }

    // Şifrə qaydaları: böyük hərf, rəqəm və simvol
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,24}$/;
    if (!strongPasswordRegex.test(user.password)) {
      toast.error("Şifrə ən azı 1 böyük hərf, 1 rəqəm və 1 xüsusi simvol içərməlidir.");
      return;
    }

    // Şifrələrin uyğunluğu
    if (user.password !== confirmPassword) {
      toast.error("Şifrələr uyğun gəlmir.");
      return;
    }

    // Tam telefon nömrəsi: ölkə kodu + operator kodu + nömrə
    const fullPhone = `${countryCode}${operatorCode}${number}`;

    const enhUser = {
      ...user,
      phone: fullPhone,
      role: 'user',
      createdAt: new Date().toISOString(),
      isActive: true,
      lastLogin: null
    };

    userSignUp(enhUser)
      .then(() => {
        toast.success('İstifadəçi uğurla qeydiyyatdan keçdi');
        navigate('/');
      })
      .catch(err => {
        toast.error(err.message || "Xəta baş verdi.");
      });
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Qeydiyyat
        </h2>
      </div>

      <form onSubmit={handleSignUp} className="mt-8 space-y-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          <label className="block text-sm">Ad *</label>
          <input
            type="text"
            name="firstname"
            onChange={handleVal}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm">Soyad *</label>
          <input
            type="text"
            name="lastname"
            onChange={handleVal}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm">Email *</label>
          <input
            type="email"
            name="email"
            onChange={handleVal}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm">Doğum tarixi *</label>
          <input
            type="date"
            name="birthdate"
            onChange={handleVal}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-2">
          <div>
            <label className="block text-sm">Ölkə kodu *</label>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-28 border rounded px-2 py-2 bg-white"
            >
              <option value="+994">+994</option>
              <option value="+90">+90</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+49">+49</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Operator kodu *</label>
            <input
              type="text"
              maxLength="3"
              onChange={(e) => setOperatorCode(e.target.value)}
              className="w-24 border rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-center">Nömrə *</label>
            <input
              type="text"
              maxLength="7"
              onChange={(e) => setNumber(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm">Şifrə *</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleVal}
              className="w-full border rounded px-3 py-2 pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm">Şifrənin təkrarı *</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded"
        >
          Qeydiyyat
        </button>

        <p className="text-xs text-gray-500 text-center mt-2">
          Şifrəniz ən azı 8, maksimum 24 simvoldan və bir böyük hərf, bir rəqəm və bir simvoldan ibarət olmalıdır
        </p>
      </form>
    </div>
  );
}

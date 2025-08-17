
import { authInstance } from '../services/api'; 



async function userSignUp(repodata) {
  try {
    const res = await authInstance.get(`/users?email=${repodata.email}`);

    if (res.data.length > 0) {
      throw new Error("Bu email artıq qeydiyyatdan keçib");
    }

    const newUser = await authInstance.post('/users', repodata);
    return newUser.data;

  } catch (err) {
    console.error("Qeydiyyat zamanı xəta baş verdi:", err.message);
    throw err;
  }
}

async function userLogin(repodata) {
  try {
    const res = await authInstance.get(`/users?email=${repodata.email}&password=${repodata.password}`);

    if (res.data.length === 0) {
      throw new Error("Email və ya şifrə yanlışdır");
    }

    return res.data[0];

  } catch (err) {
    console.error("Giriş zamanı xəta baş verdi:", err.message);
    throw err;
  }
}

export { userSignUp, userLogin };

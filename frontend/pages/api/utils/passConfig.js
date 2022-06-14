import { genSaltSync, hashSync, compareSync } from "bcryptjs";

const hashPassword = (password) => {
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);
  return hash
}

const comparePass = (info_password, user_password) => {
  return compareSync(info_password, user_password)
}

export default {
  hashPassword,
  comparePass
}
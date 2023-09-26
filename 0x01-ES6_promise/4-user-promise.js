export default function signUpUser(firstName, lastName) {
  const promis = new Promise((resolve, reject) => {
    resolve({firstName: firstName, lastName: lastName});
  });
  return promis;
}

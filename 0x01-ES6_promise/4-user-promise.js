export default function signUpUser(firstName, lastName) {
  const promis = new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
  return promis;
}

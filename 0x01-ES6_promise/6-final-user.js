import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promiseSignUpUser = signUpUser(firstName, lastName);
  const promiseUploadPhoto = uploadPhoto(fileName);

  return Promise.allSettled([promiseSignUpUser, promiseUploadPhoto]).then((values) => {
    const output = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        output.push({ status: element.status, value: element.value });
      } else {
        output.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return output;
  });
}

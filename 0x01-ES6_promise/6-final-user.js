import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const signUpUserPromise = signUpUser(firstName, lastName);
    const uploadPhotoPromise = uploadPhoto(fileName);

    const [signUpUserResult,
      uploadPhotoResult] = await Promise.all([signUpUserPromise, uploadPhotoPromise]);

    return [
      { status: 'fulfilled', value: signUpUserResult },
      { status: 'fulfilled', value: uploadPhotoResult },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: `${error}` },
      { status: 'rejected', value: `${error}` },
    ];
  }
}

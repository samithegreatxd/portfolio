// ageApi.js
export function getCurrentAge() {
  const birthDate = new Date(2009, 9, 24); // October 24, 2009 (month is 0-indexed)
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  // Check if birthday hasn't occurred yet this year
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  return age;
}
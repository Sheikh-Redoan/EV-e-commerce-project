export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 8;
};

export const validatePhone = (phone) => {
  const regex = /^[\d\s\-\+\(\)]{10,}$/;
  return regex.test(phone);
};

export const validateName = (name) => {
  return name && name.trim().length >= 2;
};

export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validatePostalCode = (code) => {
  return code && code.trim().length >= 3;
};

export const validateCardNumber = (number) => {
  const regex = /^[0-9]{13,19}$/;
  return regex.test(number.replace(/\s/g, ''));
};

export const validateCVV = (cvv) => {
  return /^[0-9]{3,4}$/.test(cvv);
};

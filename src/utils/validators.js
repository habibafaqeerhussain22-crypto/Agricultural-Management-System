// src/utils/validators.js

export const validateName = (name) => {
  if (!name) return "Full Name is required.";
  const regex = /^[A-Za-z\s]{3,}$/;
  if (!regex.test(name)) return "Name must contain only letters and spaces (min 3 characters).";
  return "";
};

export const validateCnic = (cnic) => {
  if (!cnic) return "CNIC is required.";
  const regex = /^\d{5}-\d{7}-\d{1}$/;
  if (!regex.test(cnic)) return "CNIC format must be 12345-1234567-1 (13 digits).";
  return "";
};

export const validateImage = (file) => {
  if (!file) return "Buyer photo is required.";
  if (file.type !== "image/jpeg" && file.type !== "image/png") {
    return "Only JPG or PNG images are allowed.";
  }
  if (file.size > 1024 * 1024) {
    return "Image size must not exceed 1 MB.";
  }
  return "";
};

export const formatCnicInput = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 13);
  let formatted = digits;
  if (digits.length > 5 && digits.length <= 12) {
    formatted = `${digits.slice(0, 5)}-${digits.slice(5)}`;
  } else if (digits.length > 12) {
    formatted = `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12, 13)}`;
  }
  return formatted;
};
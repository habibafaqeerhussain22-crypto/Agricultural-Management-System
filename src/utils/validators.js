// src/utils/validators.js

// Name validation: letters and spaces only, minimum 3 characters
export const validateName = (name) => {
  if (!name) return "Full name is required.";
  const regex = /^[A-Za-z\s]{3,}$/;
  if (!regex.test(name)) {
    return "Name must be at least 3 characters long and contain only letters and spaces.";
  }
  return "";
};

// CNIC validation: 13 digits, format 12345-1234567-1
export const validateCnic = (cnic) => {
  if (!cnic) return "CNIC is required.";
  const regex = /^\d{5}-\d{7}-\d{1}$/;
  if (!regex.test(cnic)) {
    return "CNIC must follow the exact format: 12345-1234567-1 (13 digits).";
  }
  return "";
};

// Image validation: JPG or PNG only, maximum 1 MB
export const validateImage = (file) => {
  if (!file) return "Profile photo is required.";
  const validTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!validTypes.includes(file.type)) {
    return "Only JPG or PNG image formats are allowed.";
  }
  const maxSize = 1 * 1024 * 1024; // 1 MB
  if (file.size > maxSize) {
    return "Image size must not exceed 1 MB.";
  }
  return "";
};

// Quantity validation: cannot exceed available stock
export const validateQuantity = (quantity, availableStock) => {
  if (!quantity || quantity <= 0) return "Please enter a valid quantity.";
  if (Number(quantity) > Number(availableStock)) {
    return `Quantity cannot exceed available stock (${availableStock} kg).`;
  }
  return "";
};

// CNIC Auto-formatter utility
export const formatCnicInput = (value) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 5) {
    return numbers;
  } else if (numbers.length <= 12) {
    return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
  } else {
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 12)}-${numbers.slice(12, 13)}`;
  }
};
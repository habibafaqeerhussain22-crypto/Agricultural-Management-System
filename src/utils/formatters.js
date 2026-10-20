// src/utils/formatters.js

export const formatCnic = (value) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 5) {
    return numbers;
  } else if (numbers.length <= 12) {
    return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
  } else {
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 12)}-${numbers.slice(12, 13)}`;
  }
};

export const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const formatNumber = (num) => {
  return Number(num).toLocaleString();
};
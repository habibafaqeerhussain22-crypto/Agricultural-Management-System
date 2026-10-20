// src/utils/exportCsv.js

export const exportToCsv = (filename, rows) => {
  if (!rows || !rows.length) {
    alert("No data available to export.");
    return;
  }
  const keys = Object.keys(rows[0]);
  const csvContent = [
    keys.join(","),
    ...rows.map(row => keys.map(key => `"${row[key] || ''}"`).join(","))
  ].join("\n");

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
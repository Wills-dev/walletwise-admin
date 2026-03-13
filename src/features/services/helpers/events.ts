export const formatDateForInput = (date: string) => {
  if (!date) return "";

  return new Date(date).toISOString().split("T")[0];
};

export const formatTimeForInput = (date: string) => {
  if (!date) return "";

  return new Date(date).toISOString().slice(11, 16);
};

export const formatInputTextNumber = (value: string) => {
  return value.replace(/[^0-9+]/g, "");
};

export const formatNumber = (amount: number) => {
  if (amount < 1000) {
    return amount.toString();
  } else if (amount < 1000000) {
    return (amount / 1000).toFixed(amount % 1000 === 0 ? 0 : 1) + "k";
  } else if (amount < 1000000000) {
    return (amount / 1000000).toFixed(amount % 1000000 === 0 ? 0 : 1) + "m";
  } else if (amount < 1000000000000) {
    return (
      (amount / 1000000000).toFixed(amount % 1000000000 === 0 ? 0 : 1) + "b"
    );
  } else {
    return (
      (amount / 1000000000000).toFixed(amount % 1000000000000 === 0 ? 0 : 1) +
      "t"
    );
  }
};

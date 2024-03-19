const getCurrensies = (currencies) => {
  if (!currencies) return [];

  const result = [];

  for (const curr in currencies) {
    result.push(`${currencies[curr].name}(${currencies[curr].symbol})`);
  }

  return result.join(", ");
};

export default getCurrensies;

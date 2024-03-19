const getLanguages = (languages) => {
  if (!languages) return [];
  return Object.values(languages).join(", ");
};

export default getLanguages;

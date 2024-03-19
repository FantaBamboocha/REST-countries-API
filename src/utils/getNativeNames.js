const getNativeNames = (name, languages) => {
  if (!name || !name.nativeName) return [];

  const nameList = name.nativeName;
  const resultName = [];
  for (const langCode in nameList) {
    resultName.push(`${nameList[langCode].official}(${languages[langCode]})`);
  }

  return resultName.join(", ");
};

export default getNativeNames;

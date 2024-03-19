const getNativeNames = (name) => {
  if (!name || !name.nativeName) return [];

  const nameList = name.nativeName;
  const resultName = [];
  for (const langCode in nameList) {
    resultName.push(nameList[langCode].official);
  }

  return resultName.join(", ");
};

export default getNativeNames;

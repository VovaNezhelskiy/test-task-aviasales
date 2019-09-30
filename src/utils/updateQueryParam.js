export function updateQueryParam(paramsString, key, value) {
  if (value === undefined || value === null) {
    return paramsString;
  }

  const paramsStringWithoutQuestionSign = paramsString.replace('?', '');

  const keyValueString = `&${key}=${value}`;
  const isKeyExist = paramsStringWithoutQuestionSign.indexOf(key) !== -1;
  if (isKeyExist) {
    const paramsArray = paramsStringWithoutQuestionSign.split('&');
    const existedKeyIndex = paramsArray
      .findIndex(param => param.includes(`${key}=`));

    return [
      ...paramsArray.slice(0, existedKeyIndex),
      keyValueString,
      ...paramsArray.slice(existedKeyIndex + 1),
    ].join('');
  }

  return `${paramsString}${keyValueString}`;
}

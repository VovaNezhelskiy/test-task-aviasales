export function parseQueryString(query = '') {
  if (!query) {
    return null;
  }

  const queryWithoutQuestionSign = query.replace('?', '');
  const keyValuesStrings = queryWithoutQuestionSign.split('&');
  let resultedObject = {};
  keyValuesStrings.forEach(keyValue => {
    const [key, stringValue] = keyValue.split('=');
    const isValueArray = stringValue.includes(',');
    resultedObject = {
      ...resultedObject,
      [key]: isValueArray ? stringValue.split(',') : stringValue,
    };
  });

  return resultedObject;
}

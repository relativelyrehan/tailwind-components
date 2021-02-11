export function stringGen(length, charset) {
  var text = '';
  for (var index = 0; index < length; index++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return text;
}

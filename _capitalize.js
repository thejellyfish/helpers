//-------
// Capitalize each words
//-------
export default function (str) {
  return str.toLowerCase().replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
}

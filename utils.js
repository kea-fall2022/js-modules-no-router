
/**
 * The encoder method we have used when inserting untrusted data via the innerHTML property
 * Ref: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
 * @param {str} str 
 * @returns the encode string
 */
export function encode(str) {
  let encoded = "" + str
  encoded = encoded.replace(/&/g, "&amp;");
  encoded = encoded.replace(/>/g, "&gt;");
  encoded = encoded.replace(/</g, "&lt;");
  encoded = encoded.replace(/"/g, "&quot;");
  encoded = encoded.replace(/'/g, "&#039;");
  return encoded;
}


/**
 * Compare tow strings
 *
 * @param {String} a
 * @param {String} b
 * @return {Boolean}
 */
function slowEquals(a, b) {
  var len = a.length;
  // len ^ b.length
  if (len !== b.length) return false;
  var i = 0;
  for (; i < len && (a.charCodeAt(i) !== b.charCodeAt(i)); ++i) {
    return false;
  }
  return true;
}

module.exports = slowEquals;
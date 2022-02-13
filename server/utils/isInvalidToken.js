module.exports = function isInvalidToken(data, dbToken) {
  return !data || !dbToken || data._id !== dbToken?.user?.toString();
};

const fetchHostInfo = async (lang, ipAddress = null) => {
  // https://www.cnblogs.com/huchong/p/9299875.html
  const url = ipAddress == null
    ? `http://ip-api.com/json/?lang=${lang}`
    : `http://ip-api.com/json/${ipAddress}?lang=${lang}`;
  const result = await fetch(url);
  return result.json();
};

const API = {
  fetchHostInfo,
};

export default API;

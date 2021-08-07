export const getIdFromInstaURL = (url) => {
  return url.split("/")[4]
}

export const truncate = (input, length) => {
  if (input.length > length)
    return input.substring(0, length) + '...';
  else
    return input;
};

export const validateEmail = (address) => {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(address))
}
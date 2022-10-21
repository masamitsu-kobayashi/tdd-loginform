export const isInvalidEmail = (val: string) => {
  const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,}$/;
  return !reg.test(val);
};

export const isUnderLength8 = (val: string) => {
  return val.length < 8;
};

export const isContainLowercase = (val: string) => {
  const reg = /[a-z]+/;
  return reg.test(val);
};

export const isContainUppercase = (val: string) => {
  const reg = /[A-Z]+/;
  return reg.test(val);
};

export const isContainNumber = (val: string) => {
  const reg = /[0-9]+/;
  return reg.test(val);
};

export const isOnlyazAZ09 = (val: string) => {
  const reg = /^[a-zA-Z0-9]+$/;
  return reg.test(val);
};

export const isInvalidPasswordFormat = (val: string) => {
  return !(
    isContainLowercase(val) &&
    isContainLowercase(val) &&
    isContainNumber(val) &&
    isOnlyazAZ09(val)
  );
};

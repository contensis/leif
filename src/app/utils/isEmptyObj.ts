export const isEmptyObj = (obj: any) => {
  if (obj && Object.keys(obj).length === 0 && obj.constructor === Object)
    return true;
  else return false;
};

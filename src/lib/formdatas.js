export const extractDatafromFORM = (target) => {
  const data = {};
  const formData = new FormData(target);
  formData.forEach((value, name) => {
    data[name] = value;
  });
  return data;
};

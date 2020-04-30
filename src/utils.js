export const timeCurrentIso8601 = () => {
  let date = new Date();
  return date.toISOString();
};

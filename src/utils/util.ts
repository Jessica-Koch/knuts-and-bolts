export const swap = (a: string | number, b: string | number) => {
  const temp = a;
  a = b;
  b = temp;
  return { a, b };
};


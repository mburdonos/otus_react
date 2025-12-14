/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
let removePlus = (val: string): string => val.replace(/^\+/, '');

export let addPlus = (val: string): string => `+${val}`;

export let removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export let getBeautifulNumber = (value: string, separator: string = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export let round = (value: number, accuracy: number = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

let transformRegexp: RegExp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export let getTransformFromCss = (transformCssString: string): { x: number; y: number } => {
  let data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export let getColorContrastValue = (red: number, green: number, blue: number): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export let getContrastType = (contrastValue: number): string => (contrastValue > 125 ? 'black' : 'white');

export let shortColorRegExp = /^#[0-9a-f]{3}$/i;
export let longColorRegExp = /^#[0-9a-f]{6}$/i;

export let checkColor = (color: string): void => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export let hex2rgb = (color: string): number[] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    let red = parseInt(color.substring(1, 2), 16);
    let green = parseInt(color.substring(2, 3), 16);
    let blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  let red = parseInt(color.substring(1, 3), 16);
  let green = parseInt(color.substring(3, 5), 16);
  let blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

export let getNumberedArray = (arr: string[]): {value: string, number: number}[] => arr.map((value, number) => ({ value, number }));
export let toStringArray = (arr: {value: string, number: number}[]): string[] => arr.map(({ value, number }) => `${value}_${number}`);



type Customer = {
  id: string | number;
  name: string;
  age: number;
  isSubscribed: boolean;
};

type CustomersMap = Record<string | number, {
  name: string;
  age: number;
  isSubscribed: boolean;
}>;


export let transformCustomers = (customers: Customer[]): CustomersMap => {
  return customers.reduce((acc: CustomersMap, customer: Customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {} as CustomersMap);
};

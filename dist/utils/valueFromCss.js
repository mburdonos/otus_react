const transformRegexp = /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;
export const getTransformFromCss = (transformCssString) => {
    const data = transformCssString.match(transformRegexp);
    if (!data)
        return { x: 0, y: 0 };
    return {
        x: parseInt(data[6], 10),
        y: parseInt(data[8], 10),
    };
};

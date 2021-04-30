const BASE_FONT_SIZE = 16;
const DEFAULT_PX = 16;
const DEFAULT_MEASURE = "rem";

/**
 * Converts a given px number to a desired measure.
 * 
 * @param { Number } px Px to convert.
 * @param { String } measure Desired measure.
 * @returns { String } Returns the given px number to the new measure.
 */
const convertPxToGivenMeasure = (
  px = DEFAULT_PX,
  measure = DEFAULT_MEASURE
) => {
  if (px === null) px = DEFAULT_PX;
  if (measure === null) measure = DEFAULT_MEASURE;

  return `${px / BASE_FONT_SIZE}${measure}`;
};

export { convertPxToGivenMeasure };

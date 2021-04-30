import { convertPxToGivenMeasure } from "./convert-px-to-given-measure";

describe('Testing convertPxToGivenMeasure', function() {
  describe('Wrong use cases', function() {
    test('Passing null value should return 1rem', function() {
      const pxValue = null;
      const measureValue = null;
      const expectedMeasure = "1rem";
      const result = convertPxToGivenMeasure(pxValue, measureValue);
  
      expect(result).toBe(expectedMeasure);
    });

    test('Passing the px param as a string should return the right calculation', function() {
      const pxValue = '16';
      const expectedResult = '1rem';
      const result = convertPxToGivenMeasure(pxValue);

      expect(result).toBe(expectedResult);
    })
  });

  describe('Right use cases', function() {
    test('Passing 32px should return 2rem', function() {
      const pxValue = 32;
      const expectedMeasure = "2rem";
      const result = convertPxToGivenMeasure(pxValue);

      expect(result).toBe(expectedMeasure);
    })
  })
});

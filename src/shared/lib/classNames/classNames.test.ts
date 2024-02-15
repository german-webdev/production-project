import { classNames } from "./classNames";

describe('classNames', () => {

  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    expect(classNames('someClass', {}, ['additionalClass1', 'additionalClass2'])).toBe('someClass additionalClass1 additionalClass2');
  });

  test('with modifiers', () => {
    const expected = 'someClass modifier1 modifier2'
    expect(classNames(
      'someClass',
      {
        modifier1: true, 
        modifier2: true 
      }
    )).toBe(expected);
  });

  test('with first, modifiers and additional classes', () => {
    const expected = 'someClass class2 class3 modifier1 modifier2'
    expect(classNames(
      'someClass',
      {
        modifier1: true, 
        modifier2: true 
      },
      ['class2', 'class3']
    )).toBe(expected);
  });
});
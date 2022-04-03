import { MyError } from './error';

describe('Error', () => {
  it('should create an instance', () => {
    expect(new Error()).toBeTruthy();
  });
});

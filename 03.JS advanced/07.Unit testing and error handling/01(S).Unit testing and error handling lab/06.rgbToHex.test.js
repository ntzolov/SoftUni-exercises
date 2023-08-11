import { expect } from 'chai';
import rgbToHexColor from './06.rgbToHex.js';

describe('main test', function () {
  it('works with parameters set to 255', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
  });

  it('works with parameters set to 0', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
  });

  it('returns undefined if a parameter is greater than 255', () => {
    expect(rgbToHexColor(256, 100, 100)).to.equal(undefined);
    expect(rgbToHexColor(100, 256, 100)).to.equal(undefined);
    expect(rgbToHexColor(100, 100, 256)).to.equal(undefined);
  });

  it('returns undefined if a parameter is not a number', () => {
    expect(rgbToHexColor('100', 100, 100)).to.equal(undefined);
    expect(rgbToHexColor(100, '100', 100)).to.equal(undefined);
    expect(rgbToHexColor(100, 100, '100')).to.equal(undefined);
  });

  it('returns undefined if a parameter is less than 0', () => {
    expect(rgbToHexColor(-1, 100, 100)).to.equal(undefined);
    expect(rgbToHexColor(100, -1, 100)).to.equal(undefined);
    expect(rgbToHexColor(100, 100, -1)).to.equal(undefined);
  });

  it('returns correct hex result when hex starts with 0', () => {
    expect(rgbToHexColor(1, 1, 1)).to.equal('#010101');
  });
});

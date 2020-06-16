var { cie1960UCS, correlatedColourTemperature, blackBodyReferenceSpectra, daylightIlluminantChromaticity } = require('./../src/javascript/colourRenderingIndex.js')
var assert = require('assert')

describe('cie1960UCS', function() {
  it('calculates u from the chromaticity', function() {
    const ucs = cie1960UCS(0.3721, 0.3751)
    assert.equal(ucs.u.toFixed(3), 0.220)
  });

  it('calculates v from the chromaticity', function() {
    const ucs = cie1960UCS(0.3721, 0.3751)
    assert.equal(ucs.v.toFixed(3), 0.333)
  });
});

describe('correlatedColourTemperature', function() {
  it('calculates CCT using the McCarmy approximation', function() {
    const cct = correlatedColourTemperature(0.3721, 0.3751)
    assert.equal(cct.toFixed(1), 4228.8)
  });
});

describe('blackBodyReferenceSpectra', function() {
  it('calculates the blackbody reference spectra at temperature T', function() {
    const temperature = 4224.4;
    // Test data from Hunt and Pointer (2011), Appendix 7
    assert.equal(1.112, blackBodyReferenceSpectra(700e-9, temperature).toFixed(3))
    assert.equal(0.848, blackBodyReferenceSpectra(500e-9, temperature).toFixed(3))
    assert.equal(0.674, blackBodyReferenceSpectra(450e-9, temperature).toFixed(3))
  });
});

describe('daylightIlluminantChromaticity', function() {
  it('calculates the x chromaticity of the daylight illuminant', function() {
    assert.equal(0.3457, daylightIlluminantChromaticity(5000).x.toFixed(4))
    assert.equal(0.2938, daylightIlluminantChromaticity(8000).x.toFixed(4))
  });
  it('calculates the y chromaticity of the daylight illuminant', function() {
    assert.equal(0.3587, daylightIlluminantChromaticity(5000).y.toFixed(4))
    assert.equal(0.3092, daylightIlluminantChromaticity(8000).y.toFixed(4))
  });
});

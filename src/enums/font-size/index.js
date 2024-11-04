import { PropTypes } from 'prop-types';

export const XXXS = Object.freeze({
  toString: () => 'XXXS',
  unit: 6,
});

export const XXS = Object.freeze({
  toString: () => 'XXS',
  unit: 9,
});

export const XLS = Object.freeze({
  toString: () => 'XLS',
  unit: 10,
});

export const XLSS = Object.freeze({
  toString: () => 'XLSS',
  unit: 11,
});

export const XS = Object.freeze({
  toString: () => 'XS',
  unit: 12,
});

export const SM = Object.freeze({
  toString: () => 'SM',
  unit: 14,
});

export const MD = Object.freeze({
  toString: () => 'MD',
  unit: 16,
});
export const XMDL = Object.freeze({
  toString: () => 'XMDL',
  unit: 18,
});
export const MDL = Object.freeze({
  toString: () => 'MDL',
  unit: 19,
});

export const LG = Object.freeze({
  toString: () => 'LG',
  unit: 20,
});

export const LLG = Object.freeze({
  toString: () => 'LLG',
  unit: 22,
});
export const SXL = Object.freeze({
  toString: () => 'SXL',
  unit: 24,
});

export const XL = Object.freeze({
  toString: () => 'XL',
  unit: 28,
});

export const XXL = Object.freeze({
  toString: () => 'XXL',
  unit: 32,
});
export const XXLMID = Object.freeze({
  toString: () => 'XXLMID',
  unit: 34,
});
export const XXXLMID = Object.freeze({
  toString: () => 'XXXLMID',
  unit: 36,
});

export const XXXL = Object.freeze({
  toString: () => 'XXXL',
  unit: 38,
});

export const PropShape = PropTypes.shape({
  toString: PropTypes.func.isRequired,
  unit: PropTypes.number.isRequired,
});

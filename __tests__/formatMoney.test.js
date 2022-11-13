import { formatCentsToDollars, formatDollarsToCents } from '../lib/formatMoney';

describe('formatCentstoDollars function', () => {
  it('works with fractional dollars', () => {
    expect(formatCentsToDollars(1)).toEqual('$0.01');
    expect(formatCentsToDollars(9)).toEqual('$0.09');
    expect(formatCentsToDollars(40)).toEqual('$0.40');
  });

  it('leaves off cents for whole dollars', () => {
    expect(formatCentsToDollars(100)).toEqual('$1');
    expect(formatCentsToDollars(5000)).toEqual('$50');
    expect(formatCentsToDollars(50000000)).toEqual('$500,000');
  });

  it('works with whole and fractional dollars', () => {
    expect(formatCentsToDollars(140)).toEqual('$1.40');
    expect(formatCentsToDollars(5210)).toEqual('$52.10');
    expect(formatCentsToDollars(912834123)).toEqual('$9,128,341.23');
  });
});

describe('formatDollarsToCents function', () => {
  it('runs properly', () => {
    expect(formatDollarsToCents(0.01)).toEqual(1);
    expect(formatDollarsToCents(100)).toEqual(10000);
    expect(formatDollarsToCents(1.5)).toEqual(150);
  });
});

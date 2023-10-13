import { end } from '../src';

it('returns the last element in an array with elements', () => {
    const arr = [1, 2, 3];
    expect(end(arr)).toBe(3);
});

it('returns false for an empty array', () => {
    const arr: number[] = [];
    expect(end(arr)).toBe(false);
});

it('returns the last element for an array with a single element', () => {
    const arr = [42];
    expect(end(arr)).toBe(42);
});

it('handles arrays with mixed data types', () => {
    const arr = [1, 'two', { key: 'value' }, true];
    expect(end(arr)).toBe(true);
});

it('returns the last element for an array with negative indices', () => {
    const arr = [5, 10, 15, 20];
    expect(end(arr)).toBe(20);
});

it('works with arrays containing undefined elements', () => {
    const arr = [undefined, undefined, 'defined'];
    expect(end(arr)).toBe('defined');
});

it('works with arrays containing null elements', () => {
    const arr = [null, null, 'not null'];
    expect(end(arr)).toBe('not null');
});

it('returns false for an array with a last element of false', () => {
    const arr = [true, false, false];
    expect(end(arr)).toBe(false);
});
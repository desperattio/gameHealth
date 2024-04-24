import getHealthLevel from '../src/app';

test('test healthy character', () => {
  const hero = { name: 'Маг', health: 90 };
  expect(getHealthLevel(hero)).toBe('healthy');
});

test('test wounded character', () => {
  const hero = { name: 'Маг', health: 50 };
  expect(getHealthLevel(hero)).toBe('wounded');
});

test('test critical character', () => {
  const hero = { name: 'Маг', health: 10 };
  expect(getHealthLevel(hero)).toBe('critical');
});

import { phoneMaker, preprocessedMapping } from './T9Utils';
import { deepStrictEqual, ok } from 'assert';

describe('search', () => {
  it('should contain `27696` (brown) in the preprocessed mapping', async () => {
    ok(preprocessedMapping.has('27696'));
  });
  it('should predict the word `brown` from `27696`', async () => {
    const actual = phoneMaker('27696');
    const expected = ['brown'];
    deepStrictEqual(actual, expected);
  });
});

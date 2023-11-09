// sysinfo.test.ts
import { getSystemInfo } from './sysinfo';

describe('getSystemInfo function', () => {
  it('should return system information', async () => {
    const result = await getSystemInfo();
    expect(result).not.toBe(null);
  });
});

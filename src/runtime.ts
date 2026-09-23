import worker from './index';
import { withStatusSnapshot } from './status-snapshot';

export default withStatusSnapshot(worker, {
  name: 'VulnPulse',
  store: env => env.VP_DIGEST,
  maxAgeMs: 48 * 60 * 60 * 1000,
});

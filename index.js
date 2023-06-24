import * as os from 'os';
import * as crypto from 'crypto';

export function generateSwarmKey() {
  const buffer = crypto.randomBytes(32);
  return `/key/swarm/psk/1.0.0/${os.EOL}/base16/${os.EOL}${buffer.toString(
    "hex"
  )}`;
}

export function generateClusterSecret() {
  const buffer = crypto.randomBytes(32);
  return buffer.toString("hex");
}

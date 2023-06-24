#!/usr/bin/env node

import { Command } from 'commander';
import * as ipfsKeyGen from './index.js';

const program = new Command();
program
  .name('ipfs-key-gen')
  .description('Generate IPFS related keys and secrets.')
  .version('1.1.0');

program.command('generate')
  .description('Generate new keys and secrets')
  .argument('[type]', 'Type of key to generate (swarm-key, cluster-secret)', 'swarm-key')
  .action((type) => {
    console.log(type);
    switch (type) {
      case 'swarm-key':
        process.stdout.write(ipfsKeyGen.generateSwarmKey());
        break;
      case 'cluster-secret':
        process.stdout.write(ipfsKeyGen.generateClusterSecret());
        break;
    }
   });

program.parse();
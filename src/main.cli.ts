#!/usr/bin/env node
import {CliApplication, VersionCommand, HelpCommand, ImportCommand} from './cli/index.js';

function bootstrap() {
  const app = new CliApplication();

  app.registerCommands([
    new VersionCommand(),
    new HelpCommand(),
    new ImportCommand(),
  ]);

  app.processCommand(process.argv);
}

bootstrap();

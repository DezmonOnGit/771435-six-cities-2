type ParsedCommands = Record<string, string[]>

export class CommandParser {
  static parse(cliArguments: string[]): ParsedCommands {
    const commands: ParsedCommands = {};
    let curCommand = '';

    cliArguments.map((val) => {
      if(val.startsWith('--')) {
        commands[val] = [];
        curCommand = val;
      } else if(curCommand && val) {
        commands[curCommand].push(val);
      }
    });

    return commands;
  }
}

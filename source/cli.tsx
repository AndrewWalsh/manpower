#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import { App, Error } from './components';

const cli = meow(`
	An alternative frontend for man pages
	Usage
	  $ manp COMMAND [--help] [--version]

	Options
		--help  	This help message
		--version	The version of manp

	Examples
	  $ manp echo
`);

if (cli.input.length === 0) {
	render(<Error message="No command specified, try manp --help" />);
}
else {
	const command = cli.input[0]!;
	const { clear } = render(<App command={command}/>);
	clear()
}

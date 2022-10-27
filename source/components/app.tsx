import React, { FC } from 'react';
import { Text } from 'ink';

import { Layout } from './index'
import { useGetManDump } from '../hooks/index'

const App: FC<{command: string}> = ({ command }) => {
	const output = useGetManDump(command)
	if (!output) return null
	if (output && output.startsWith('No manual entry for')) return (
		<Text>
			No manual entry for <Text color="green">{command}</Text>
		</Text>
	)
	return <Layout manPageOutput={output} />
};

module.exports = App;
export default App;

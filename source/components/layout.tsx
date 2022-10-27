import React, { FC } from 'react';
import { Text, Box, useInput, Newline } from 'ink';
import useStdoutDimensions from 'ink-use-stdout-dimensions';
import { COLOR_HIGHLIGHT, COLOR_BLACK } from '../utils'
import { useGetStructured, TagNames } from '../hooks';

const Layout: FC<{manPageOutput: string}> = ({ manPageOutput }) => {
	const data = useGetStructured(manPageOutput);
	const [width, height] = useStdoutDimensions();
	console.clear()
	useInput((input, key) => {
		if (input === 'q') {
			process.exit(0)
		}

		if (key.leftArrow) {
			// Left arrow key pressed
		}
	});
	// The below is more art than science
	// Tweak it until the layout looks mostly presentable
  return (
		<Box minHeight={height} width={width} flexDirection="column">
			{data.map(({ name, data }) => {
				return (
					<Box marginLeft={1} marginRight={1} flexDirection="column">
						<Text backgroundColor={COLOR_HIGHLIGHT} color={COLOR_BLACK} bold><Newline />&nbsp;{name}&nbsp;<Newline /></Text>
						<Text>
						{data.map(({ text, type }) => {
								if (text.includes('\n')) {
									console.error(text)
									// throw new Error(text)
								}
								if (type === TagNames.RAW) {
									return <Text>{text}</Text>
								}
								if (type === TagNames.I) {
									return <Text bold>{text}</Text>
								}
								if (type === TagNames.B) {
									return <Text color={COLOR_HIGHLIGHT}>{text}</Text>
								}
								if (type === TagNames.NEWLINE) {
									return <Newline />
								}
								return null
							}, '')}

						</Text>
					</Box>
				)
			})}
		</Box>
	)
};

module.exports = Layout;
export default Layout;

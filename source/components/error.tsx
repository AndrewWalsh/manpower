import React, { FC } from 'react';
import { Text } from 'ink';

const Error: FC<{message: string}> = ({ message }) =>
  <Text>&nbsp;<Text backgroundColor="red">&nbsp;ERROR&nbsp;</Text> {message}</Text>;

module.exports = Error;
export default Error;

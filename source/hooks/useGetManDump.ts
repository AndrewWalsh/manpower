import { useState, useEffect } from 'react'
import childProcess from 'child_process'

const useGetManDump = (command: string) => {
  const [output, setOutput] = useState<string>()

	useEffect(() => {
		const child = childProcess.exec(`man -P cat ${command} | man2html --bare | cat`, (stderror, stdout) => {
      if (stderror) throw stderror
      setOutput(stdout);
    });
    return () => {
      child.kill()
    }
	}, [])

return output
}

export default useGetManDump

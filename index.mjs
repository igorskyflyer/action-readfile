import { readFile } from 'node:fs/promises'
import { setFailed } from '@actions/core'
import core from '@actions/core'

async function action() {
	try {
		const path = core.getInput('path', { required: true })
		const contents = await readFile(path, 'utf-8')

		core.setOutput('content', contents)
	} catch (error) {
		setFailed(error.message)
	}
}

action()

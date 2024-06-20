import { setFailed } from '@actions/core'
import github from '@actions/github'
async function action() {
	try {
		const token = process.env.GITHUB_TOKEN || ''

		if (!token) {
			setFailed("Couldn't fetch the GitHub token.")
			return
		}

		const octokit = github.getOctokit(token)
		const context = github.context
	} catch (error) {
		setFailed(error.message)
	}
}

action()

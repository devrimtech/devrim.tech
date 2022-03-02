import { FunctionalComponent } from 'preact'
import { route } from 'preact-router'
import { useEffect } from 'preact/hooks'

interface RedirectProperties {
	to: string
}

const Redirect: FunctionalComponent<RedirectProperties> = ({ to }: RedirectProperties) => {
	useEffect(() => {
		route(to, true)
	}, [to])

	return null
}

export default Redirect

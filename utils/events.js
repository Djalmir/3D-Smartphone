export function dispatchEvent(event, data) {
	window.dispatchEvent(new CustomEvent(event, { detail: data }))
}
import { notify } from 'react-notify-toast'

const notification = (message) => {
	notify.show(message, 'custom', 3000, { background: '#FFFFFF' })
}

export default notification

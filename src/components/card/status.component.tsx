import cn from 'classnames'

const Status = ({ status }: { status: string }) => {
	const style = cn(
		'w-fit p-1 rounded-sm',
		status === 'onProgress' ? 'status-on-progress' : 'status-archived'
	)

	return (
		<span className={style}>
			<h4>Status: {status}</h4>
		</span>
	)
}

export default Status

import cn from 'classnames'

const Status = ({ status }: { status: string }) => {
	const style = cn(
		'w-fit text-secondary',
		status === 'onProgress' ? 'bg-success' : ''
	)

	return (
		<span className={style}>
			<h4>Status: {status}</h4>
		</span>
	)
}

export default Status

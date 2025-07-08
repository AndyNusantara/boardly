import cn from 'classnames'

type DividerPropsType = {
	className?: string
}

const Divider: React.FC<DividerPropsType> = (props) => {
	const style = cn('w-full h-0.5 bg-accent', props.className)

	return <div className={style} />
}

export default Divider

import Divider from '../divider/divider.component'
import Status from './status.component'

type CardPropsType = {
	title: string
	description: string
	createdAt: string
	status: string
}

const Card: React.FC<CardPropsType> = (props) => {
	return (
		<div className="w-full min-h-40 p-2 rounded-md bg-card border-accent">
			<div className="w-full h-full p-2 flex flex-col justify-between">
				<div>
					<h2>{props.title}</h2>
					<Divider />
					<p>{props.description}</p>
				</div>
				<Status status={props.status} />
			</div>
		</div>
	)
}

export default Card

import Card from '../../components/card/card.component'

const dummy = [
	{
		title: 'Project 1',
		createdAt: '25/02/2025',
		description: 'My personal website project',
		status: 'on progress'
	},
	{
		title: 'Project 1',
		createdAt: '25/02/2025',
		description: 'My personal website project',
		status: 'on progress'
	},
	{
		title: 'Project 1',
		createdAt: '25/02/2025',
		description: 'My personal website project',
		status: 'on progress'
	},
	{
		title: 'Project 1',
		createdAt: '25/02/2025',
		description: 'My personal website project',
		status: 'on progress'
	},
	{
		title: 'Project 1',
		createdAt: '25/02/2025',
		description: 'My personal website project',
		status: 'onProgress'
	},
	{
		title: 'Project 1',
		createdAt: '25/02/2025',
		description: 'My personal website project',
		status: 'on progress'
	}
]

const Projects = () => {
	return (
		<div className="w-full h-full p-10">
			<div className="w-full grid grid-cols-3 gap-10">
				{dummy.map((item) => (
					<Card
						title={item.title}
						createdAt={item.createdAt}
						description={item.description}
						status={item.status}
					/>
				))}
			</div>
		</div>
	)
}

export default Projects

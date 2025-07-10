import type { ReactNode } from 'react'
import Breadcrumbs from './components/breadcrumbs/breadcrumbs.component'
import Divider from './components/divider/divider.component'

type LayoutPropsType = {
	children: ReactNode
}

const Title = () => {
	return (
		<div className="w-fit p-5 flex items-center gap-5">
			<img
				width={80}
				height={80}
				src="../src/assets/img/keyboard_cartoon.jpg"
				title="icon"
				alt="icon"
			/>
			<h1 className="text-primary text-4xl">Boardly</h1>
		</div>
	)
}

const Layout = ({ children }: LayoutPropsType) => {
	return (
		<div className="w-full h-screen flex flex-col gap-2 font-poppins bg-background text-body dark">
			<div className="w-full min-h-20 flex flex-col">
				<Title />
				<Breadcrumbs />
			</div>
			<Divider />
			{children}
		</div>
	)
}

export default Layout

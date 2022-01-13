import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'

const Project = (props) => {
	return (
		<div>
			<Header />
			<Main inf={props.inf} />
			<Footer />
		</div>
	)
}

export default Project

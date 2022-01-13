import './App.css'
import Project from './components/project/Project'

function App() {
	const animals = [
		{
			id: '0',
			name: 'Dog',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9BG-tVnx9lzj4CE4F19AMxmbhBDG-Kym1Q&usqp=CAU',
			price: '250$',
		},
		{
			id: '0',
			name: 'Cat',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9BG-tVnx9lzj4CE4F19AMxmbhBDG-Kym1Q&usqp=CAU',
			price: '350$',
		},
		{
			id: '0',
			name: 'Cat',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9BG-tVnx9lzj4CE4F19AMxmbhBDG-Kym1Q&usqp=CAU',
			price: '250$',
		},
		{
			id: '0',
			name: 'Dog',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9BG-tVnx9lzj4CE4F19AMxmbhBDG-Kym1Q&usqp=CAU',
			price: '250$',
		},
		{
			id: '0',
			name: 'Dog',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9BG-tVnx9lzj4CE4F19AMxmbhBDG-Kym1Q&usqp=CAU',
			price: '250$',
		},
		{
			id: '0',
			name: 'Dog',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9BG-tVnx9lzj4CE4F19AMxmbhBDG-Kym1Q&usqp=CAU',
			price: '250$',
		},
	]

	return (
		<div className='App'>
			<Project />
		</div>
	)
}

export default App

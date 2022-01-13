import './Main.css'
const Main = (props) => {
	return (
		<main>
			{props.inf.map((el, id) => {
				return (
					<div className='card' key={id}>
						<h2>{el.name}</h2>
						<img className='imgAnimal' src={el.img} alt='' /> <br />
						<button>{el.price}</button>
					</div>
				)
			})}
		</main>
	)
}
export default Main

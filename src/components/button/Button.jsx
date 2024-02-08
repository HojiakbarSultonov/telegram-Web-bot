import './Button.css';
function Button(props) {
	const { type, title, onClick } = props;
	return (
		<div
			className={`btn ${(type === 'add' && 'add') || (type === 'remove' && 'remove') || (type === 'checkout' && 'checkout')}`}
			onClick={onClick}
		>
			{title}
		</div>
	);
}

export default Button;

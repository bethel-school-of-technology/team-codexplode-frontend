import './BlankPage.css';

interface ContainerProps {}

const BlankPage: React.FC<ContainerProps> = () => {
	return (
		<div className='container'>
			<strong>Let's build something great!!</strong>
		</div>
	);
};

export default BlankPage;

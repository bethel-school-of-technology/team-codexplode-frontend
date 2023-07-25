import './BlankPage.css';

interface ContainerProps {}

const BlankPage: React.FC<ContainerProps> = () => {
	return (
		<div className='container'>
			<strong>Great things are being built for you!!</strong>
		</div>
	);
};

export default BlankPage;

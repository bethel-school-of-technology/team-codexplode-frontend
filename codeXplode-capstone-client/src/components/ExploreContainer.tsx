import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
	return (
		<div className='container'>
			<strong>Let's get this capstone project rolling!!</strong>
			<p>
				Ionic Elements{' '}
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://ionicframework.com/docs/components'
				>
					UI Components
				</a>
			</p>
		</div>
	);
};

export default ExploreContainer;

import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
	return (
		<div className='container'>
			<h1>Hello.... Hello...</h1>

			<strong>Ready to create an app?</strong>
			<p>
				Start with Ionic{' '}
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

import ContentStyle from '../styles/contentStyle.css';

export default function Content() {
	return (
		<ContentStyle>
			<section>
				<h4>How does it work?</h4>
				<p>
					Type GitHub username and click search.
				</p>
			</section>
			<section>
				<p>
					The code for this project is avilable on {' '}
					<a
						href='https://github.com/PrathameshAndhare/unfollow-tracker.git'
						target='_blank'
						rel='noreferrer'
					>
						GitHub
					</a>
				</p>
			</section>
		</ContentStyle>
	);
}

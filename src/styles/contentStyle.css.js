import styled from 'styled-components';

const ContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	padding: 0 2rem;

	section {
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 15px 0;
		padding: 5px 20px;
		background-color: rgb(248, 209, 110);;
		border-radius: 10px;
        transition: transform 0.4s ease;

		a {
			text-decoration: underline;
			color: var(--black);
		}
		a:hover {
			color: var(--blue);
		}
	}

    section:hover {
        transform: scale(1.1);
    }
`;

export default ContentStyle;

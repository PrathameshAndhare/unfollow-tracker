import styled from 'styled-components';

export const ResultsStyle = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	gap: 1rem;
	margin-bottom: 1rem;

	section {
		height: 70vh;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		::-webkit-scrollbar {
			width: 2px;
		}
		::-webkit-scrollbar-thumb {
			background: #888;
		}
		div {
			display: grid;
			justify-items: center;
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		}
		p {
			text-align: center;
		}
        h4 {
            text-align: center; /* Align h4 text at center */
        }
	}
	@media (min-width: 768px) {
		flex-direction: row;
	}
	@media (min-width: 1024px) {
		section {
			width: 500px;
		}
	}

	.gray {
		padding: 1rem 2rem;
		border-radius: 10px;
        border: 2px solid lightpink;
		background-color: rgb(247, 239, 218);
	}

	.border {
		padding: 1rem 2rem;
		border-radius: 10px;
		border: 2px solid lightpink;
        background-color: rgb(247, 239, 218);
	}
`;

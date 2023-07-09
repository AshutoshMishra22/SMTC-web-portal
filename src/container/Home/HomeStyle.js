import styled from 'styled-components';

export const Container = styled.section`
	mark {
		color: ${({ theme }) => theme.color.heading1};
		border-radius: 0.125em;
		padding-inline: 0.05em;
		margin-inline: -0.05em;
		-webkit-box-decoration-break: clone;
		word-wrap: break-word;
		font-size: 3em;
		min-width: min(100%, 8em);
		line-height: 1.3;
	}
	.home-brief-bg-img {
		width: 100%;
		flex: 1;
		border-top-left-radius: 0.75rem;
		border-bottom-left-radius: 0.75rem;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('https://upload.wikimedia.org/wikipedia/commons/2/27/Delhi_Public_School_Expressway_Gautam_Bhuddh_Nagar_NOIDA.jpg');
	}
	.home-brief-content {
		font-size: 1rem;
		line-height: 24px;
		/* flex: 1.2; */
	}
	.heading1 {
		background-color: ${({ theme }) => theme.color.bg1};
	}
	.heading2 {
		background-color: ${({ theme }) => theme.color.bg2};
	}
	.circular-content {
		padding: 1rem;
		border-top: ${({ theme }) => `2px solid ${theme.color.fadRed}`};
		align-items: center;
		gap: 5rem;
		.circular-content-heading,
		.circular-content-list {
			padding: 1rem;
		}
		.circular-content-heading {
			border-bottom: ${({ theme }) => `1px solid ${theme.color.fadRed}`};
			margin-bottom: 8px;
		}
		.circular-content-list {
			max-height: 500px;
			overflow-y: auto;
			.circular {
				background-color: ${({ theme }) => theme.color.bg1};
				padding: 1rem;
				margin-bottom: 8px;
				border-bottom: ${({ theme }) => `1px solid ${theme.color.fadRed}`};
			}
		}

		.circular-latest-content {
			flex: 1;
			align-self: baseline;
		}
	}
`;
export const Section = styled.section`
	padding-top: 40px;
	background-image: linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)),
		url('https://th.bing.com/th?id=OIP.7m7vpIK0G_MbmqDa3mvZjwHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2');
	width: 100%;
	height: 100vh;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.color.white};
	text-align: center;

	h2 {
		font-size: 2.2rem;
		letter-spacing: 1px;
	}
	p {
		width: 50%;
		font-size: 0.9rem;
		line-height: 24px;
	}
	.btn {
		margin-top: 30px;
		gap: 10px;
		a {
			margin-right: 4px;
			font-size: 0.9rem;
			padding: 13px 35px;
			font-weight: 600;
			border-radius: 5px;
			&.blue {
				color: ${({ theme }) => theme.color.white};
				background-color: rgb(21, 21, 100);
				&:hover {
					background-color: ${({ theme }) => theme.color.white};
					color: rgb(21, 21, 100);
				}
			}
			&.yellow {
				color: ${({ theme }) => theme.color.black};
				background-color: #fdc93b;
				&:hover {
					background-color: ${({ theme }) => theme.color.white};
					color: #fdc93b;
				}
			}
		}
	}
	.home-brief-bg-img {
	}
`;
export const Section2 = styled.section``;

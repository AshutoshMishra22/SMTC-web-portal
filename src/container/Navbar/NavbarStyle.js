import styled from 'styled-components';

export const Nav = styled.nav`
	position: fixed;
	z-index: 5;
	width: 80%;
	background: white;
	display: flex;
	justify-content: space-between;
	padding: 1vw 8vw;
	height: 40px;
	opacity: 0.88;
	box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.15);
	border-bottom-left-radius: 0.375rem;
	border-bottom-right-radius: 0.375rem;
	img {
		height: 40px;
		width: 40px;
		cursor: pointer;
	}
	li {
		list-style: none;
		color: ${({ theme }) => theme.color.black};
		font-size: 16px;
		font-weight: 500;
	}
	.navigation-list {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 30px;
		a:hover {
			transition: 0.3s ease;
			color: #fdc93b;
		}
	}
`;

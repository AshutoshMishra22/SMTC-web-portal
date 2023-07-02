import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 1vw 8vw;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
	img {
		width: 150px;
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

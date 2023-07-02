import styled from 'styled-components';

export const Section = styled.section`
	background-image: linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)),
		url('https://th.bing.com/th?id=OIP.7m7vpIK0G_MbmqDa3mvZjwHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2');
	width: 100%;
	height: 100vh;
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.color.white};
	text-align: center;
`;

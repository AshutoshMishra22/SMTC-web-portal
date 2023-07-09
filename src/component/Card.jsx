import React from 'react';
import styled from 'styled-components';
const Section = styled.section`
	border-radius: 0.75rem;
	border: ${({ theme }) => `1px solid ${theme.color.fadRed}`};
	line-height: 24px;
	margin-top: 2rem;
	margin-bottom: 2rem;
	white-space: normal;
	box-shadow: ${({ theme }) => `0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px ${theme.color.fadRed}`};
`;
const Card = ({ style, children }) => {
	return <Section style={{ ...style }}>{children}</Section>;
};
export default Card;

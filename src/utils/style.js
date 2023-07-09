import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	flex-direction: ${(props) => props.flexDirection || 'row'};
	justify-content: ${(props) => props.justifyContent || 'unset'};
	align-items: ${(props) => props.alignItems || 'unset'};
`;

import styled from 'styled-components';

export const ButtonsList = styled.ul`
	display: flex;
	justify-content: center;
	gap: ${p => p.theme.spacing(4)};
`;

export const Button = styled.li`
  /* display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)}; */
	
	width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
	`;
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
	font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  border-radius: ${p => p.theme.radii.md};
	`;
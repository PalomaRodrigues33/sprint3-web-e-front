import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #daa520;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  margin-top: 20px;
  padding: 0.8em;
  text-decoration: none;
  width: fit-content;
  font-size: x-large;
`;

function Button(props) {
  return <StyledButton {...props} />;
}

export default Button;

import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

function Input(props) {
    return <StyledInput {...props} />;
}

export default Input;

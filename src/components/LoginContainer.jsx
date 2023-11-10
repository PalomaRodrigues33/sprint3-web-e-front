import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-y: 5em;
  height: 89vh;
`;

const StyledLoginContainer = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

function LoginContainer({ children }) {
  return (
    <Container>
      <StyledLoginContainer>{children}</StyledLoginContainer>
    </Container>
  );
}

LoginContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginContainer;

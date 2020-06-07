import styled from 'styled-components';

const StyledDropzone = styled.div`
  height: 300px;
  border-radius: 8px;
  background-color: #e1faec;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 8px;
    border: 1px dashed #4ecb79;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
  }

  p svg {
    color: #4ecb79;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;

export default StyledDropzone;

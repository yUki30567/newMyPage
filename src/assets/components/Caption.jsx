import { styled } from 'styled-components';

const BaseSpan = styled.span`
    margin: 10px;
`
const Baseinput = styled.input`
    margin: 10px;
`

const Caption = () => {
  return (
    <div>
      <BaseSpan>Caption</BaseSpan>
      <Baseinput type="text" />
    </div>
  );
};

export default Caption;

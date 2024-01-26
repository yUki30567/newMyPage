import { styled } from "styled-components";

import CategorySelector from "./CategorySelector";
import Caption from "./Caption";
import ImageSelector from "./ImageSelector";

const BaseForm = styled.form`
  text-align: center;
  width: 300px;
  height: 400px;
  border: solid, 2px, #000;
  background-color: grey;
  border-radius: 5px;
`;
const BaseButton = styled.button`
  margin: 10px;
  text-align: center;
  color: white;
  background-color: #086f91;
`;

const PostForm = () => {
  const preEventCancel = (e) => {
    e.preventDefault();
  };

  return (
    <BaseForm id="new-post" action="">
      <h3>New Post</h3>
      <CategorySelector />
      <Caption />
      <ImageSelector />
      <BaseButton onClick={preEventCancel}>Submit!</BaseButton>
    </BaseForm>
  );
};

export default PostForm;

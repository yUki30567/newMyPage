import { styled } from 'styled-components';

const BaseSelect = styled.select`
    margin: 10px;
`

const arr = [
  "tokyo",
  "san francisco",
  "las vegas",
  "los angeles",
  "new york",
  "life style",
];

const CategorySelector = () => {
  return (
    <>
        <span>Category</span>
      <BaseSelect name="" id="">
        {arr.map((val) => {
          return <option key={val} value={val}>{val}</option>;
        })}
      </BaseSelect>
    </>
  );
};

export default CategorySelector;

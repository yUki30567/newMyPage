import { useState } from "react";

import { styled } from 'styled-components';

const BaseLabel = styled.label`
    margin: 10px;
`


const ImageSelector = () => {
  const initialState = {
    fileName: "",
    filePath: "",
  };

  const [file, setFile] = useState(initialState);

  const getFile = (e) => {
    const _fileName = e.target.files[0].name;
    const reader = new FileReader();
    reader.onload = () => {
      setFile({ ...file, fileName: _fileName, filePath: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <BaseLabel>
        Select image
        <input onChange={getFile} type="file" hidden />
        <br />
      </BaseLabel>
      {file.filePath ? (
        <img
          style={{ width: 300, height: 200, objectFit: "contain" }}
          src={file.filePath}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ImageSelector;

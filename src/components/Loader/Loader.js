import React from 'react';
import Loader from 'react-loader-spinner';
import S from './Loader.module.css';

const ranodmColor = () => {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  const color = `rgb(${a}, ${b}, ${c})`;
  return color;
};

const reactLoader = () => (
  <div className={S.Loader}>
    <Loader type="TailSpin" color={ranodmColor()} height={100} width={100} />
  </div>
);

export default reactLoader;

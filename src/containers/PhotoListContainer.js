import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setBackground } from '../redux/background';
import { fetchPhotos } from '../redux/photos';
import PhotoList from '../components/PhotoList';
import { createSelector } from '@reduxjs/toolkit';

const createPhotos = createSelector(
  [state => state.photos.data, state => state.category.category],
  (getphotos, category) => {
    return category === 'all'
      ? getphotos
      : getphotos.filter(photo => {
          return photo.category === category;
        });
  }
);

function PhotoListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photos = useSelector(createPhotos);

  const { loading, backgroundColor } = useSelector(
    state => ({
      loading: state.photos.loading,
      backgroundColor: state.background.background,
    }),
    shallowEqual
  );

  if (loading === 'error') {
    return <span>Error!</span>;
  }

  if (loading !== 'done') {
    return <span>loading...</span>;
  }

  const changeBackground = () => {
    dispatch(setBackground(backgroundColor === 'black' ? 'white' : 'black'));
  };

  return (
    <>
      <div style={{ backgroundColor: backgroundColor }}>
        <button onClick={changeBackground}>Change backgorund</button>
        <PhotoList photos={photos} />
      </div>
    </>
  );
}

export default PhotoListContainer;

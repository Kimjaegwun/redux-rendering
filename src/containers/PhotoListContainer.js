import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBackground } from '../redux/background';
import { fetchPhotos } from '../redux/photos';
import PhotoList from '../components/PhotoList';

function PhotoListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const { photos, loading, backgroundColor } = useSelector(state => ({
    photos:
      state.category.category === 'all'
        ? state.photos.data
        : state.photos.data.filter(photo => photo.category === state.category.category),
    loading: state.photos.loading,
    backgroundColor: state.background.background,
  }));

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

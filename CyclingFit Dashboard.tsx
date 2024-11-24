import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, analyzeImage } from '../actions/imageActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const analysis = useSelector(state => state.image.analysis);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      dispatch(uploadImage(file));
      dispatch(analyzeImage(reader.result));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" className="mt-4" />}
      {analysis && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Análisis de Postura</h2>
          <pre>{JSON.stringify(analysis, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


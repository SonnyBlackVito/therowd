'use client';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { fetchExampleData, clearError } from './exampleSlice';
import { useEffect } from 'react';

export default function ExampleUsage() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.example);

  useEffect(() => {
    dispatch(fetchExampleData());
  }, [dispatch]);

  const handleClearError = () => {
    dispatch(clearError());
  };

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Lỗi: {error}</p>
        <button onClick={handleClearError}>Xóa lỗi</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Dữ liệu từ Redux Store:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

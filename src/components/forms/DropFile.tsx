import _ from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { HiX } from 'react-icons/hi';

export default function DropFile() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState('No File');

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      if (fileInput.current) {
        fileInput.current.files = files;
        setFilename(_.get(files, '[0].name', 'No File'));
      }
    }
  }, []);

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    },
    []
  );

  useEffect(() => {
    setFilename(_.get(fileInput, 'current.files[0].name', 'No File'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileInput, fileInput.current, fileInput?.current?.files]);
  return (
    <div
      className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className='flex min-h-[50vh] flex-col justify-center space-y-1 text-center'>
        <svg
          className='mx-auto h-12 w-12 text-gray-400'
          stroke='currentColor'
          fill='none'
          viewBox='0 0 48 48'
          aria-hidden='true'
        >
          <path
            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <div className='flex text-sm text-gray-600'>
          <label
            htmlFor='file-upload'
            className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
          >
            <span>Upload a file</span>
            <input
              ref={fileInput}
              onChange={(e) => {
                const files = e.target.files;
                if (files) {
                  setFilename(_.get(files, '[0].name', 'No File'));
                }
              }}
              id='file-upload'
              name='file-upload'
              type='file'
              className='sr-only'
            />
          </label>
          <p className='pl-1'>or drag and drop</p>
        </div>
        <p className='text-xs text-gray-500'>xlsx</p>
        <div className='flex items-center justify-center text-center'>
          <h6 className='px-2 text-xs font-semibold text-gray-500'>
            {filename}
          </h6>
          {filename !== 'No File' && (
            <button
              className='cursor-pointer rounded text-red-500 hover:text-red-700 focus:outline-none focus:ring focus:ring-red-500'
              type='button'
              onClick={() => {
                setFilename('No File');
                _.assign(fileInput.current, {
                  files: undefined,
                });
              }}
            >
              <HiX size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

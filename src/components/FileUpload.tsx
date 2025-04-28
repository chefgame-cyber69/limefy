import React, { useCallback, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Upload, X, FileText } from 'lucide-react';

const FileUpload: React.FC = () => {
  const { uploadedFiles, setUploadedFiles } = useAppContext();
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  }, [isDragging]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
      e.dataTransfer.clearData();
    }
  }, [setUploadedFiles]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
      e.target.value = '';
    }
  }, [setUploadedFiles]);

  const removeFile = useCallback((index: number) => {
    setUploadedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  }, [setUploadedFiles]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-lime-500 bg-lime-50' : 'border-gray-300 hover:border-lime-400'
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload size={40} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {isDragging ? 'Drop files here' : 'Upload your video files'}
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Drag and drop your files here, or click to browse
        </p>
        <label className="inline-flex items-center px-4 py-2 bg-lime-500 text-white rounded-md hover:bg-lime-600 cursor-pointer transition-colors">
          <span>Select Files</span>
          <input 
            type="file" 
            className="hidden" 
            onChange={handleFileChange}
            multiple
            accept="video/*"
          />
        </label>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="mt-6">
          <h4 className="font-medium text-gray-900 mb-3">Uploaded Files</h4>
          <ul className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <li 
                key={`${file.name}-${index}`} 
                className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200"
              >
                <div className="flex items-center">
                  <FileText size={20} className="text-blue-600 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove file"
                >
                  <X size={18} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
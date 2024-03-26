import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/217/744/small_2x/design-template-for-web-page-with-404-error-isometric-page-not-working-error-png.png" alt="404 Not Found" className="w-48 mx-auto mb-8" />
        <a href="/" className="text-blue-500 hover:underline">Go back to home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;

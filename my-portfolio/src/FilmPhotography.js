import React from "react";

const FilmPhotography = () => {
  return (
    <div className="bg-white text-maroon min-h-screen p-10">
      <h1 className="text-4xl font-serif font-bold text-center mb-10">Film Photography</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Add your film photos here as image elements */}
        <img src="/path/to/photo1.jpg" alt="Film Photo 1" className="w-full rounded-lg shadow-md" />
        <img src="/path/to/photo2.jpg" alt="Film Photo 2" className="w-full rounded-lg shadow-md" />
        <img src="/path/to/photo3.jpg" alt="Film Photo 3" className="w-full rounded-lg shadow-md" />
        {/* Add more photos as needed */}
      </div>
      <div className="bg-maroon text-white p-6 rounded-lg mt-10 flex flex-col md:flex-row items-center">
        <img src="/path/to/your-photo.jpg" alt="Your Portrait" className="w-32 h-32 rounded-full shadow-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <p className="text-lg italic">captured by yours truly &lt;3</p>
          <p className="text-sm">Camera Model: [Your Camera Model]</p>
          <p className="text-sm">Film Roll: [Film Roll Used]</p>
        </div>
      </div>
      <p className="text-center text-lg mt-10 italic">
        I created this page to experiment with more artsy styles, so I thought showcasing my hobby was the perfect way to do that.
      </p>
    </div>
  );
};

export default FilmPhotography;

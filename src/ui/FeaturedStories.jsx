import React from 'react';

const FeaturedStories = () => {
  const stories = [
    {
      id: 1,
      image: '1_fs.jpg',
      category: 'Politics',
      title: 'How Elections Shape Our Future',
      author: 'Pinky',
      profile_pic: 'profile.png',
    },
    {
      id: 2,
      image: '2fs.jpg',
      category: 'Cultural',
      title: 'The Art of Indian Traditions',
      author: 'Hema',
      profile_pic: 'profile.png',
      link: '/cultural-story',
    },
    {
      id: 3,
      image: '3fs.jpg',
      category: 'Movies',
      title: 'Bollywood: Beyond Glamour',
      author: 'Ravi',
      profile_pic: 'profile.png',
      link: '/movie-story',
    },
    {
      id: 4,
      image: '4fs.jpg',
      category: 'Cricket',
      title: 'India’s Journey to World Cup',
      author: 'Kiran',
      profile_pic: 'profile.png',
      link: '/cricket-story',
    },
  ];

  return (
    <div className="px-6 py-16 max-w-[1200px] mx-auto">
      <h2 className="text-center mb-10 text-gray-900 text-4xl font-bold">
        Featured Stories
      </h2>

      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="w-full h-30 overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-3 flex-1">
              <button
                onClick={() => (window.location.href = story.link)}
                className="bg-transparent border-0 px-4 py-1 rounded-full text-sm text-violet-500 cursor-pointer transition-colors hover:bg-violet-100 w-fit"
              >
                {story.category}
              </button>

              <h3 className="text-lg text-gray-900 font-semibold leading-snug">
                {story.title}
              </h3>

              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={story.profile_pic}
                  alt={story.author}
                  className="rounded-full w-8 h-8 object-cover"
                />
                <p className="text-gray-600 text-sm">By {story.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedStories;

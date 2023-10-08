import React from 'react';

const BlogCard = ({ image, title, date, author, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
          <img src={image} alt={title} className="w-full h-32 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-1">Published on {date} by {author}</p>
            <p className="text-gray-700 text-sm">{content}</p>
          </div>
        </div>
      );
    };

const BlogPage = () => {
  const blogs = [
    {
      image: 'https://th.bing.com/th/id/OIP.9Y6af246bUkWbNeyLv5w6QHaEo?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'The Future of Electric Cars',
      date: 'October 15, 2023',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna tellus...',
    },
    {
      image: 'https://th.bing.com/th/id/OIP.17wkejkULtJRxr5-2_ATlAHaEK?w=333&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Top 10 Road Trip Destinations',
      date: 'September 28, 2023',
      author: 'Jane Smith',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...',
    },
    {
      image: 'https://th.bing.com/th/id/OIP.17wkejkULtJRxr5-2_ATlAHaEK?w=333&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Tips for Maintaining Your Car',
      date: 'August 12, 2023',
      author: 'Mike Johnson',
      content: 'Cras aliquet gravida justo, ac consectetur odio feugiat nec. Aliquam erat volutpat...',
    },
    {
      image: 'https://th.bing.com/th?id=OIP.KMosWYXn4e6Q9UTEKWvbFwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      title: 'The Latest Car Safety Features',
      date: 'July 5, 2023',
      author: 'Emily Davis',
      content: 'Fusce eget dolor vitae odio feugiat suscipit. Vivamus vehicula cursus urna at faucibus...',
    },
    {
      image: 'https://th.bing.com/th?id=OIP.KMosWYXn4e6Q9UTEKWvbFwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      title: 'Best Family-Friendly Cars of 2023',
      date: 'June 18, 2023',
      author: 'David Wilson',
      content: 'Suspendisse euismod quam ac orci auctor, a fermentum justo dapibus. Sed nec ante non ante...',
    },
    {
      image: 'https://th.bing.com/th?id=OIP.KMosWYXn4e6Q9UTEKWvbFwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      title: 'Choosing the Right Tires for Your Vehicle',
      date: 'May 2, 2023',
      author: 'Sarah Adams',
      content: 'Phasellus viverra massa id ante volutpat, non vehicula odio ullamcorper. Suspendisse potenti...',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-5">
            <div className="flex flex-col items-center justify-center my-8 mt-20 px-4 lg:px-0">
      <h3 className="text-5xl font-semibold text-center">
        ABOUT OUR <span className="text-orange-500">DROP TAXI</span>
      </h3>
      <hr className="border-t-2 border-orange-500 my-2 w-14" />

      <p className="text-xl mt-4 text-center text-gray-400 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        magni explicabo itaque, ad amet temporibus repellat, molestias ipsam
        recusandae perferendis in iste veritatis culpa nobis commodi! Dolor illo
        dolore error.
      </p>
      </div>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          title={blog.title}
          date={blog.date}
          author={blog.author}
          content={blog.content}
        />
      ))}
    </div>
  </div>
);
};

export default BlogPage;

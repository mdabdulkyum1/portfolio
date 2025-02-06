import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  return (
    <div className="group bg-light-background dark:bg-dark-background shadow-lg rounded-md border border-light-border dark:border-dark-border overflow-hidden transition-transform">
      
      {/* Image Section - Smooth Scroll on Hover */}
      <div className="h-[200px] overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover object-top group-hover:animate-scroll-image"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-light-text dark:text-dark-text">
          {card.title}
        </h2>
        <p className="text-sm text-light-accent dark:text-dark-accent mt-2">
          {card.description}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-5">
          {/* Details Button */}
          <Link 
            to={`/projects/${card.id}`} 
            className="relative inline-flex items-center justify-center px-6 py-2 text-light-text dark:text-dark-text border border-light-border dark:border-dark-border rounded-md transition-all hover:bg-light-accent hover:text-white dark:hover:bg-dark-accent"
          >
            Details
          </Link>

          {/* Preview Button */}
          <Link 
            target="_blank" 
            to={card.liveLink} 
            className="relative inline-flex items-center justify-center px-6 py-2 bg-light-accent dark:bg-dark-accent text-white rounded-md transition-all hover:shadow-lg"
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

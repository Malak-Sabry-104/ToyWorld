import {Link} from "react-router-dom"
const Card = ({ image, title, price,id }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-3">
      <div
        className=" me-6 
        bg-white/30 backdrop-blur-md
        rounded-3xl
        border border-white/20
        transition-all
        duration-300
        h-full
        flex
        flex-col
      "
      >
        {/* Image */}
        <div className=" w-full  overflow-hidden rounded-t-2xl">
          <div className="bg-white/30 w-full rounded-3xl flex justify-center">
            <img
              src={image}
              alt={title}
              className="
              py-2 h-40
            "
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col grow">
          <h3 className="text-base font-semibold text-[#9C7275] mb-1 leading-snug">
            {title}
          </h3>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold text-[#BE5C50]">${price}</span>

            <Link
              className="
              text-sm
              px-3
              cursor-pointer
              py-1.5
              rounded-full
              bg-[#D98C92]
              text-white
              hover:bg-[#BE5C50]
              transition
            "
            to={`/product/${id}`}
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

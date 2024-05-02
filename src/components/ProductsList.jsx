import { IoMdPricetag } from "react-icons/io";
import { Link } from "react-router-dom";

function ProductsList({ products }) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {products &&
        products.products.map((product) => {
          return (
            <li key={product.id} className="card bg-base-100 shadow-xl">
              <figure className="border-b-2 border-neutral-content">
                <img
                  src={product.thumbnail}
                  className="w-full h-52 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="line-clamp-3">{product.description}</p>
                <div className="card-actions justify-between">
                  <p className="text-2xl flex gap-2 items-start">
                    <IoMdPricetag className="mt-1.5" /> ${product.price}
                  </p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">In detail</Link>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductsList;

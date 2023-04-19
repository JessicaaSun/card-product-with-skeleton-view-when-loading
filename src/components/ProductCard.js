import React, { useEffect, useState } from "react";

export const ProductCard = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((resp) => resp.json())
      .then((resp) => {
        setProduct(resp);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !loading ? (
    <ul className="row g-1">
      <h2 style={{ textAlign: "center", margin: "30px 0 30px 0" }}>Our Products</h2>
      {products.map((product) => (
        <div key={product.id} className="col-md-4 col-lg-3 col-sm-6">
          <div class="card" style={{ width: "15rem" }}>
            <img src={product.images} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">{product.description}</p>
              <a href="../App.js" class="btn btn-primary">
                Detail
              </a>
            </div>
          </div>
        </div>
      ))}
    </ul>
  ) : (
    <ul className="row g-1">
      <h2 style={{ textAlign: "center" }}>Our Products</h2>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </ul>
  );
};

function Skeleton() {
  return (
    <div className="col-md-4 col-lg-3 l-sm-6">
      <div className="card " style={{ width: "15rem" }} aria-hidden="true">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            className="btn btn-primary disabled placeholder col-6 al"
            href="./Event.js"
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;

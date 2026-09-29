import { Link } from "react-router-dom";

function StorageCard({ storage }) {
  return (
    <article className="storage-card">

      <div className="storage-card-top">
        <span className="storage-type">
          {storage.type}
        </span>

        <span className="storage-rating">
          ★ {storage.rating}
        </span>
      </div>


      <div className="storage-placeholder">
        <span>BAG</span>
      </div>


      <div className="storage-card-body">

        <h3>{storage.name}</h3>

        <p className="storage-location">
          {storage.location}
        </p>


        <div className="storage-meta">

          <div>
            <span>Available</span>

            <strong>
              {storage.available} bags
            </strong>
          </div>

          <div className="text-end">
            <span>From</span>

            <strong>
              Rs. {storage.price}
            </strong>
          </div>

        </div>


        <Link
          to={`/storage/${storage.id}`}
          className="storage-card-button"
        >
          View Storage
        </Link>

      </div>

    </article>
  );
}

export default StorageCard;
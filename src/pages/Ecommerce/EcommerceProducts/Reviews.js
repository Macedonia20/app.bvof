import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { map } from "lodash";

//Import Star Ratings
import StarRatings from "react-star-ratings"

const Reviews = ({ comments }) => {
  return (
    <div className="mt-4">
      <h5 className="font-size-14">Reviews :</h5>
      <div className="d-inline-flex mb-3">
        <div className="text-muted me-3">
          <StarRatings
            rating={4}
            starRatedColor="#F1B44C"
            starEmptyColor="#2D363F"
            numberOfStars={5}
            name="rating"
            starDimension="14px"
            starSpacing="3px"
          />
        </div>
        <div className="text-muted">( 132 customer Review)</div>
      </div>
      <div className="border p-4 rounded">
        {map(comments, (comment, k) => (
          <React.Fragment key={"review_" + k}>
            <div
              className={
                comment.id === 1 ? "d-flex border-bottom pb-3" : "d-flex border-bottom py-3"
              }
            >
              <div className="flex-1">
                <p className="text-muted mb-2">{comment.description}</p>
                <h5 className="font-size-15 mb-3">{comment.name}</h5>

                <ul className="list-inline product-review-link mb-0">
                    <li className="list-inline-item">
                        <Link to="#"><i className="mdi mdi-thumb-up align-middle me-1"></i> Like</Link>
                    </li>{" "}
                    <li className="list-inline-item">
                        <Link to="#"><i className="mdi mdi-message-text align-middle me-1"></i> Comment</Link>
                    </li>
                </ul>
            </div>
            <p className="float-sm-end font-size-12">{comment.date}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  comments: PropTypes.array,
};

export default Reviews;

import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavoris } from "../redux/action";

const Description = () => {
  const state = useSelector((state) => state.handleFavoris);
  const dispatch = useDispatch();
  /*Add movie to favorite */
  const AddMovie = (data) => {
    dispatch(addToFavoris(data));
  };
  return (
    <>
      {state.filmtoshow.map((element, key) => {
        return (
          <>
            <div
              className="row justify-content-center "
              style={{ marginTop: "100px" }}
            >
              <div className="col-md-5">
                <iframe
                  title="movideDescription"
                  width="560"
                  height="320"
                  allow="autoplay"
                  src={element.trailerLink}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col-md-4 ">
                <div className="row m-4">
                  <h5
                    className="text-white"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {element.description}
                  </h5>
                </div>

                <div className="row m-4">
                  <button
                    className="btn btn-outline-dark"
                    style={{ width: "200px" }}
                    onClick={() => AddMovie(element)}
                  >
                    <i className="fas fa-plus-circle fa-1x m-2 ">
                      Ajouter à la liste.
                    </i>
                  </button>
                </div>
              </div>
            </div>
            <div className="row m-4">
              <NavLink className="nav-item fs-4 text-white" to="/home">
                <i class="fas fa-arrow-left"> Home</i>
              </NavLink>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Description;

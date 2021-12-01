import { React } from "react";
import { useDispatch } from "react-redux";
import { addToFavoris } from "../redux/action";
import { filterTitle } from "../redux/action";
import { useSelector } from "react-redux";
import { filterAll } from "../redux/action";
import { filterRange } from "../redux/action";
import Footer from "./Footer";
const List = (props) => {
    const state = useSelector((state) => state.handleFavoris);
    /*Aff movie to favorite */
    const dispatch = useDispatch();
    const AddMovie = (data) => {
    dispatch(addToFavoris(data))
  };
  /* all movies */
  const filterall=()=>{
     dispatch(filterAll());
  }
  /* filter movies by title */
  const filterFilmsTitle = (title) => {
    dispatch(filterTitle(title))
   };
/* filter movies by rating */
  const filterFilmsRate = (min, max) => {
    dispatch(filterRange(min,max))
  };

  const ShowFilms = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-light w-25  ms-3" onClick={() => filterall()}
            > All
            </button>
            <div className="input-group rounded ms-3" style={{width:"350px"}}>
                <input type="text" className="form-control " placeholder="Search by title" id="title" aria-describedby="search-addon"
          />
                <button   className="btn btn-primary" onClick={()=>filterFilmsTitle(document.getElementById("title").value)}>
                    <i className="fas fa-search" style={{ color: "black" }}></i>
                </button>
            </div>
            <div className="input-group rounded ms-3" style={{width:"350px"}}>
                <input type="text" className="form-control " placeholder="Min rate" id="minrate" aria-describedby="search-addon"/>
                <input type="text" className="form-control "placeholder="Max rate" id="maxrate"aria-describedby="search-addon"/>
                <button   className="btn btn-primary" onClick={() => filterFilmsRate((document.getElementById("minrate").value), (document.getElementById("maxrate").value))}>
                    <i className="fas fa-search" style={{ color: "black" }}></i>
                </button>
            </div>
        </div>
        <div className="row">
           { state.filter.length>0 ?(
            state.filter.map((movie, key) => {
            return (
             <>
                <div className="col" key={key}>
                    <div
                    className="image-container d-flex mb-4"
                    style={{
                    margin: "auto",
                    backgroundColor: "#3D3D3D",
                    width: "600px",
                    height: "240px",
                  }}
                >
                      <div className="part1 p-2" style={{ width: "400px" }}>
                          <div className="col">
                              <div className="row ">
                              <h3 style={{ color: "white" }}>{movie.title}</h3>
                              </div>
                              <div className="row text-danger mb-1">
                                 <h6><i className="fa fa-star text-danger"></i>{movie.rating}</h6>
                              </div>
                              <div className="row text-secondary mb-2">
                                <h6 style={{ color: "white" }}>{movie.description}</h6>
                              </div>
                              <div className="row m-1">
                               <button
                               className="btn btn-outline-dark"
                               onClick={() => AddMovie(movie)} >
                              <i className="fas fa-plus-circle fa-1x m-2 ">Ajouter à la liste</i>
                               </button>
                              </div>
                          </div>
                      </div>
                      <div className="part2 " style={{ width: "50%" }}>
                          <img
                          src={movie.posterURL}
                          style={{ width: "280px", height: "240px" }} alt=""></img>
                      </div>
                   </div>
                </div>
        
              </>
          );
        })):(<div className="display-5 text-center" style={{ color: "white" }}>
            <p>SORRY...NO RESULTS FOUND </p>
          </div>) }
          </div>
      </>
    );
  };
  return (
    <div>
      <div
        className="col-md-12 text-center display-5 p-4"
        style={{ color: "white" }}
      >
        <h1 className="text-secondary">Liste des Films</h1>
      </div>

      <div className="row">
        <ShowFilms />
      </div>
         <Footer />
    </div>
  );
};

export default List;

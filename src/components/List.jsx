import { React } from "react";
import { useDispatch } from "react-redux";
import { filterTitle } from "../redux/action";
import { useSelector } from "react-redux";
import { filterAll } from "../redux/action";
import { filterRange } from "../redux/action";
import { showdescription } from "../redux/action";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
const List = (props) => {
    const state = useSelector((state) => state.handleFavoris);
    const history = useHistory();
    const dispatch = useDispatch();
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
  /* show description and trailer  */
  const showdes = (id) => {
    dispatch(showdescription (id))
     history.push("/description");
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
        <div className="row m-4">
           { state.filter.length>0 ?(
            state.filter.map((movie, key) => {
            return (
             <>
                <div className="col-md-4 mb-4 " key={key}  onClick={()=>showdes(movie.id)}>
                
                     <div className="row">
                          <img
                          src={movie.posterURL}
                          style={{ width: "400px", height: "275px" }} alt=""></img>
                      </div>
                      <div className="row" >
                           <h3 style={{ color: "white" }}>{movie.title}</h3>
                      </div>
                      <div className="row text-danger mb-1">
                                 <h6><i className="fa fa-star text-danger"></i>{movie.rating}</h6>
                      </div>
                </div>
                
        
              </>
          );
        })):(
            <div className="display-5 text-center" style={{ color: "white" }}>
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

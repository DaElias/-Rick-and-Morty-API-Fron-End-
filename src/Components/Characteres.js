import { useState, useReducer, useMemo, useRef, useCallback } from "react";
import { Spinner } from "react-bootstrap";
import PrintCharacteres from "./PrintCharacteres";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, acction) => {
  switch (acction.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, acction.payload],
      };

    default:
      return state;
  }
};

const api = "https://rickandmortyapi.com/api/character";

const Characteres = ({ setFavoritos, contexto }) => {
  // const [carateres, setCarateres] = useState(null); // null || []
  const [{ favorites }, dispatch] = useReducer(favoriteReducer, initialState);
  //* aplication useMemo
  //** Aplicamos una busqueda basica */
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const characters = useCharacters(api);

  // * Cuando cambie el valor de caracteres o search se guardan
  const filteredUsers = useMemo(() => {
    return characters === null
      ? null
      : characters.filter((user) =>
          user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
  }, [characters, search]);
  //* add useCallback
  const handleSearch = useCallback(
    () => setSearch(searchInput.current.value),
    []
  );
  // const handleSearch = (/** event */) => {
  //   //  * Old method
  //   // setSearch(event.target.value);
  //   // * new method
  //   setSearch(searchInput.current.value);
  // };

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });

    setFavoritos(favorites); //* envia los elementos al contexto global!!
  };

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => res.json())
  //     .then((data) => setCarateres(data.results))
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

  return (
    <>
      {characters === null ? (
        <div>
          <Spinner
            animation="border"
            role="status"
            style={{
              position: "absolute",
              left: "50%",
              right: "50%",
              width: "2rem",
              fontSize: "3rem",
            }}
          />
        </div>
      ) : (
        <>
          <div className="fromControlMov">
            {/* <FormControl
              style={{ boxShadow: " 1px 1px 130px rgb(155, 146, 146)" }}
              placeholder="Busqueda"
              onChange={handleSearch}
              // value={search}
              ref={searchInput}
            /> */}

            <Search
              search={search}
              handleSearch={handleSearch}
              searchInput={searchInput}
            />
          </div>
          <div className="Characteres">
            <PrintCharacteres
              contexto={contexto}
              handleClick={handleClick}
              carateres={filteredUsers}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Characteres;

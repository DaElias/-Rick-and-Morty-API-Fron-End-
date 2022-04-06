import React from "react";
import {FormControl} from "react-bootstrap"
const Search = ({search, searchInput ,handleSearch}) => {
  return <>
      <FormControl
              style={{ boxShadow: " 1px 1px 130px rgb(155, 146, 146)" }}
              placeholder="Busqueda"
              onChange={handleSearch}
              // value={search}
              ref={searchInput}
            />
  </>;
};

export default Search;

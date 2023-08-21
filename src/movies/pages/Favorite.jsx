/* eslint-disable react-refresh/only-export-components */
import LayoutMovies from "../components/Layout";
import React from "react";
import ListMovies from "../components/ListMovies";
import { helpers } from "../helpers";

const FavoriteMovies = () => {
    const dataMovies = helpers.getDataMoviesFromLocalStorage();
    return (
        <LayoutMovies
            level1="Phim yeu thich"
            level2="Danh sach"
            level3="Phim"
        >
            <h2> Danh sach bo phim ban yeu thich</h2>
            { dataMovies && (
                <ListMovies movies={dataMovies} />
            )}
        </LayoutMovies>
    )
}
export default React.memo(FavoriteMovies)
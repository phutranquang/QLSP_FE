/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col, Image, Skeleton, Button } from "antd";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { api } from "../services/api";
import { helpers } from "../helpers/index";
import YouTube from 'react-youtube';
import { useAuth } from "../hooks/useAuth";
/*
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
*/

// eslint-disable-next-line react-refresh/only-export-components
const DetailMovies = () => {
    const { slug, id } = useParams(); // get params
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);
    const [favorite, setFavorite] = useState(helpers.checkDataMoviesLocalStorage(id));
    //const [isOpen, setOpen] = useState(false);
    const { user } = useAuth(); // lay thong tin nguoi dung da dang nhap va duoc luu trong localstorage
    const navigate = useNavigate();
    

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }

    const addMovie = () => {
        if(!user){
            navigate('/login', { replace: true }); 
        } else {
            //luu thong tin cua bo phim vao localstorage
            helpers.addDataMovieToLocalStorage(movie);
            setFavorite(true);
        }
    }

    const removeMovie = (idMovie) => {
        if(!user){
            navigate('/login',{ replace: true}); 
        } else {
            helpers.removeMovieLocalStorageById(idMovie);
            setFavorite(false);
        }
    }

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await api.getDataMovieById(id);
            if(helpers.isEmptyObject(data)){
                // ko co du lieu theo id
                setError({
                    cod: 404,
                    mess: "Not found data"
                });
            } else {
                // co du lieu theo id
                setMovie(data);
                setError(null);
            }
            setLoading(false); // hoan thanh
        }
        getData();
    }, [id]); // id ma thay doi thi useEffect tu dong chay lai

    if(loading){
        return (
            <LayoutMovies
                level1="Trang chủ"
                level2="Chi tiết"
                level3={slug}
            >
                <Row>
                    <Col span={24}>
                        <Skeleton active />
                    </Col>
                </Row>
            </LayoutMovies>
        )
    }

    return (
        <LayoutMovies
        level1="Trang chủ"
        level2="Chi tiết"
            level3={slug}
        >
            <Row 
                // style={{ 
                //     backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                //     backgroundRepeat: 'no-repeat',
                //     backgroundSize:'cover'
                // }}
            >
                <Col span={24}>
                    <h4> Chi  tiet bo phim </h4>
                    <Row>
                        <Col span={8}>
                            <div style={{ padding: '10px' }}>
                                <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                                <p style={{ fontWeight: 700 }}>{movie.original_title}</p>

                                { favorite ? 
                                    (
                                        <Button
                                            type="primary"
                                            danger
                                            onClick={() => removeMovie(id) }
                                        > Da yeu thich 
                                        </Button>
                                    )
                                    :
                                    (
                                        <Button
                                            type="primary"
                                            onClick={() => addMovie() }
                                        > Yeu thich 
                                        </Button>
                                    )
                                }
                            </div>
                        </Col>
                        <Col span={16}>
                            <div style={{ padding: '10px' }}>
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
                                {/*
                                <div style={{ 
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-around'
                                }}>
                                {
                                    movie['videos']['results'].map((item,index) => (
                                        <p key={index}>
                                            <ModalVideo
                                                channel='youtube'
                                                autoplay
                                                isOpen={isOpen}
                                                videoId={item.key}
                                                onClose={() => setOpen(false)}
                                            />
                                            <Button
                                                type="primary"
                                                onClick={()=> setOpen(true)}
                                            >Trailer {index + 1}</Button>
                                        </p>
                                    ))
                                }
                                </div>
                                */}
                                {/* {
                                    movie['videos']['results'].map((item,index) => (
                                        <div key={index} style={{ marginBottom: '5px' }}>
                                            <YouTube
                                                videoId={item.key}
                                                opts={opts}
                                                onReady={onPlayerReady}
                                            />
                                        </div>
                                    ))
                                } */}
                            </div>
                        </Col>
                        {/* <Col span={8} style={{ padding: '10px' }}>
                            <h5> Images movie</h5>
                            {
                                movie['images']['backdrops'].map((item,index) => (
                                    <div key={index} style={{ marginBottom: '5px' }}>
                                        <Image src={`https://image.tmdb.org/t/p/w300${item.file_path}`} />
                                    </div>
                                ) )
                            }
                        </Col> */}
                    </Row>
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(DetailMovies);
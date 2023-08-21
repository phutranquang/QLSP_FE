/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import { Button, Layout, Menu, Input, AutoComplete } from 'antd';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useSelector, useDispatch } from 'react-redux';
import * as reselect from "../../reselects/searchReselect";
import * as action from "../../actions/search";
import { createStructuredSelector } from "reselect";
import { useDebouncedCallback } from 'use-debounce';
import slugify from 'react-slugify';

const { Header } = Layout;
const { Search } = Input;

const searchResult = (query, loading) => {
  if(loading){
    return {
      label: <p>...loading</p>
    }
  }

  return query.map((item) => {
    return {
      value: `/movie/${slugify(item.title)}/${item.id}`,
      label: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>
            {item.title}
          </span>
        </div>
      ),
    };
  });
}

const HeaderMovies = () => {
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const dispatch = useDispatch();
    const { loading, movies } = useSelector(createStructuredSelector({
      loading: reselect.getLoadingSearch,
      movies: reselect.getDataSearch
    }));
    const { pathname } = useLocation();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleSearch = useDebouncedCallback((value) => {
      if(value){
        setValue(value);
        dispatch(action.searchMovie(value));
      }
      setOptions(searchResult(movies, loading));
    },1000);

    const onSelect = (value) => {
      navigate(value);
    };

    // nhap tim kiem se chuyen ngay sang trang tim kiem
    // eslint-disable-next-line no-unused-vars
    const searchMovieByName = (nameMovie) => {
        nameMovie = nameMovie.trim();
        if(nameMovie.length > 0){
            // co nhap tu khoa
            navigate(`/search/${encodeURIComponent(nameMovie)}`);
        }
    }

    let itemsMenus = [
        {label: <NavLink to="/"> Trang chu </NavLink>, key: '/'},
        {label: <NavLink to="/upcoming">Phim sap trinh chieu</NavLink>, key: '/upcoming'},
        // {label: <Search 
        //             placeholder="input search with enterButton"
        //             enterButton 
        //             style={{ marginTop: '15px' }}
        //             onSearch={keyword => searchMovieByName(keyword)}
        //         />
        // },
        {
          label:
          <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
              width: 300
            }}
            options={options}
            onSelect={onSelect}
            onSearch={searchMovieByName}
          >
            <Search
              size="large"
              placeholder="input here" enterButton
              defaultValue={''}
            />
          </AutoComplete>
        },
        {label: <NavLink to="/favoirte"> Phim yeu thich</NavLink>, key: '/favoirte'},
    ];

    if(user){
        itemsMenus = [
            ...itemsMenus,
            {
                label: `Hi : ${user.firstName} ${user.lastName}`
            },
            {
                label: <Button onClick={() => logout()}> Dang xuat</Button>
            },
        ]
    } else {
        itemsMenus = [
            ...itemsMenus,
            {label: <NavLink to="/login"> Dang nhap</NavLink>, key: '/login'}
        ]
    }

    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={pathname}
                items={itemsMenus}
            />
        </Header>
    )
}
export default React.memo(HeaderMovies);
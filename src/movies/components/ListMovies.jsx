/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Row, Col, Card } from 'antd';
import { Link } from "react-router-dom";
import slugify from 'react-slugify';

const { Meta } = Card;

const ListMovies = ({ movies }) => {
    return (
        <Row>
            {movies.map((item, index) => (
                <Col span={6} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} key={index}>
                    <Link to={`/movie/${slugify(item.title)}/${item.id}`}>
                        <Card
                            hoverable
                            bordered={false}
                            style={{
                                width: 250,
                                marginBottom: '10px'
                            }}
                            cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                        >
                            <Meta title={item.title} />
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    )
}
export default React.memo(ListMovies);
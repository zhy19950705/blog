import React, { useState, useEffect } from "react";
import "../static/style/components/header.css";
import servicePath from '../config/apiUrl'
import axios from 'axios'
import Link from 'next/link'
import Router from 'next/router'
import { Row, Col, Menu, Icon } from "antd";

const Header = () => {
    const [ navArray, setNavArray ] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then((res) => {
                console.log(res)
                setNavArray(res.data.data)
                return res.data.data
            })
            setNavArray(result)
        }
        fetchData()
    }, [])
    const handleClick = (e) => {
        if (e.key === 'home') {
            Router.push('/index')
        } else {
            Router.push('/list?id=' + e.key)
        }
    }
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">
                        <Link href={{pathname: '/index'}}>
                            <a>大宝</a>
                        </Link>
                    </span>
                    <span className="header-text">专注养猪，发家致富</span>
                </Col>

                <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="home">
                            <Icon type="home" />
                            首页
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                return (
                                    <Menu.Item key={item.id}>
                                        <Icon type={item.icon} />
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    );
};
export default Header;

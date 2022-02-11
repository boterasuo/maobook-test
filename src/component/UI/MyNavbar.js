import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'

// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  console.log('props', props)

  const { auth, user } = props

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        fixed="top"
        className="shadow-sm"
      >
        <Navbar.Brand href="#home">React REST範例</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link as={NavLink} to="/login">
              登入
            </Nav.Link>
            {auth && (
              <Nav.Link as={NavLink} to="/member">
                會員專區
              </Nav.Link>
            )}
            <Nav.Link as={NavLink} to="/product-list">
              產品列表
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productcategory">
              產品分類
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
            <NavDropdown title="產品" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/product/men">
                MEN
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product/women">
                WOMEN
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/product/kids">
                KIDS
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product/baby">
                BABY
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Text>
              {auth ? user.name + ' 你好' : <Link to="/login">登入</Link>}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(MyNavbar);

import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../usercontext/UserContext";

const Header = () => {
  const { user, SignOut } = useContext(AuthContext);
  return (
    <div className=" mt-4 ">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Link className="text-decoration-none" to={"/"}>
              HOTEL ROOM
            </Link>{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              {" "}
              <Link className="text-decoration-none" to={"/"}>
                Home
              </Link>{" "}
            </Nav.Link>

            {user?.uid ? (
              <>
                <Nav.Link>
                  {" "}
                  <Link onClick={SignOut} to="/login">
                    LOGOUT
                  </Link>
                </Nav.Link>
                <h4 className="text-white">{user.email}</h4>
              </>
            ) : (
              <>
                <Nav.Link>
                  <Link className="text-decoration-none" to={"/registration"}>
                    Registration
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="text-decoration-none" to={"/login"}>
                    Login
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

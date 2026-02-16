import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { Github, Twitter } from 'react-bootstrap-icons';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Newsletter status="" message="" onValidated={() => { }} />
                    <Col xs={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col xs={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/salah-yasser-1ab83838b" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/saoloh" target="_blank" rel="noopener noreferrer" className="text-white"><Github size={20} /></a>
                            <a href="https://x.com/SolahY48195" target="_blank" rel="noopener noreferrer" className="text-white"><Twitter size={20} /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

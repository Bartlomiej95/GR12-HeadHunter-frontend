import React from "react";
import {Container} from "../Styles/Styles.component";
import {Image, Wrap, HeaderBlock} from "./Header.styles";
import logo from '../../assets/img/logo.webp';
import {HeaderUser} from "./HeaderUser/HeaderUser.component";

export const Header = () => (
    <Wrap>
        <Container>
            <HeaderBlock>
                <div style={{width: "100%", height: "100%"}}>
                    <Image src={logo} alt="Logo MegaK"/>
                </div>
                <HeaderUser/>
            </HeaderBlock>
        </Container>
    </Wrap>
)
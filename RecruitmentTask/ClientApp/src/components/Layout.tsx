import React, { FC } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

const Layout: FC = (props) => {
    return (
        <div>
            <NavMenu/>
            <Container>
                { props.children }
            </Container>
        </div>
    );
};

export default Layout;

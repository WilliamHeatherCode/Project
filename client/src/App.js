import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import recipes from './images/recipes.png';
const App = () => {

    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" alighn="center">Recipes</Typography>
                <img src={ recipes } alt="recipes" height="60" />
            </AppBar>
        </Container>
    )
}

export default App;
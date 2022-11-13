function Routes() {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/profile">
        <Profile />
        </Route>
        <Route
        exact
        path="/chats"
        >
        <Chats />
        </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
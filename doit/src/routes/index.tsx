import { Route, Switch } from "react-router-dom";
import { Todo } from "../pages/Todo";
import { Users } from "../pages/Users";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Users} />
    <Route exact path="/todo/:id" component={Todo} />
  </Switch>
);

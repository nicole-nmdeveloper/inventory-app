import React from 'react'
import { Switch } from 'react-router-dom'

import MyRoute from './MyRoute'

import Login from '../pages/Login'
import Page404 from '../pages/Page404'
import Pictures from '../pages/Pictures'
import Product from '../pages/Product'
import Products from '../pages/Products'
import Register from '../pages/Register'

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute exact path="/products/" component={Products} isClosed />
      <MyRoute exact path="/product/" component={Product} isClosed />
      <MyRoute exact path="/product/:id/edit" component={Product} isClosed />
      <MyRoute exact path="/pictures/:id" component={Pictures} isClosed />
      <MyRoute path="*" component={Page404} isClosed={false} />
    </Switch>
  )
}

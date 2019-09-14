import App from 'next/app'
import React from 'react'
import withReduxStore from '../src/redux/lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

const wrapRedux = withReduxStore(MyApp)

export default wrapRedux;
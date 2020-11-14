import React from "react"
import Layout from "./src/layouts/index"
import Provider from "./src/contexts/cartContext"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>

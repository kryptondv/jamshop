import React from "react"
import Layout from "~/layouts/index"
import Provider from "~/contexts/cartContext"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>

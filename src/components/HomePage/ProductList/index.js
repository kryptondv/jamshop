import React from "react"

export default function ProductList({ heading }) {
  const { title, lead } = heading
  console.log({ title, lead })
  return (
    <div>
      <h2>{title}</h2>
      <p>{lead}</p>
    </div>
  )
}

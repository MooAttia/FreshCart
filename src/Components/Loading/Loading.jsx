import React from 'react'
import { Audio, FallingLines } from 'react-loader-spinner'


export default function Loading() {
  return <>
    <FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
  </>
}

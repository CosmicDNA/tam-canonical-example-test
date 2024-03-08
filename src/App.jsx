import './App.css'
import React, { useState, useEffect } from 'react'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/monikai.css'

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:8080/protocol', {
        method: 'GET',
        headers: {
          Authorization: 'Token my-secret-token',
        }
      })
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [])
  return (
    <JSONPretty id="json-pretty" data={data}></JSONPretty>
  )
}

export default App

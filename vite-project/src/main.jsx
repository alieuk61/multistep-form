import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from 'src/multistep-form/form'
import 'src/index.css'
import FormContext from 'src/context/form-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormContext>
    <Form />
    </FormContext>
  </React.StrictMode>,
)

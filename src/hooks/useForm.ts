/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react'

export const useForm = (initialFom = {}) => {
  const [formState, setFormState] = useState(initialFom)

  const onInputChange = ({ target }: any) => {
    // Desestructuramos el target para obtener el name y el value
    const { name, value } = target // Recordar implementar el name en el input
    setFormState({
      // Actualizamos el estado del formulario
      ...formState, // Copiamos el estado actual
      [name]: value, // Actualizamos el valor del campo que se modificó
    })
  }
  const onReset = () => {
    setFormState(initialFom)
  }

  return { ...formState, formState, onInputChange, onReset }
}
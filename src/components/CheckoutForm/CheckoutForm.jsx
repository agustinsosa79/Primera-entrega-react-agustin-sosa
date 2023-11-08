import React, { useState } from 'react'
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            nombre, telefono, email
        }

        onConfirm(userData)
    }


    return (
        <div className='container'>
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre
                    <input
                        className='Input'
                        type="text"
                        value={nombre}
                        onChange={({ target }) => setNombre(target.value)}
                        required
                    />
                </label>
                <label className="Label">
                    Email
                    <input
                        className='Input'
                        type="text"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        required
                    />
                </label>
                <label className="Label">
                    Telefono
                    <input
                        className='Input'
                        type="text"
                        value={telefono}
                        onChange={({ target }) => setTelefono(target.value)}
                        required
                    />
                </label>

                <button typeof='Submit'>Comprar</button>

            </form>

        </div>
    )
}

export default CheckoutForm
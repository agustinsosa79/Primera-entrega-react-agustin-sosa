import React, { useState } from 'react'

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
                    nombre
                    <input
                        className='Input'
                        type="text"
                        value={nombre}
                        onChange={({ target }) => setNombre(target.value)}
                    />
                </label>
                <label className="Label">
                    email
                    <input
                        className='Input'
                        type="text"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <label className="Label">
                    telefono
                    <input
                        className='Input'
                        type="text"
                        value={telefono}
                        onChange={({ target }) => setTelefono(target.value)}
                    />
                </label>

                <button typeof='Submit'>comprar</button>

            </form>

        </div>
    )
}

export default CheckoutForm
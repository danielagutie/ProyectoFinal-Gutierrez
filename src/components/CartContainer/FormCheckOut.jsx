import "./formCheckOut.css";

import { useState } from "react";

export default function FormCheckOut({ handleCheckout }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  function handleSubmit(event) {
    event.preventDefault();
    handleCheckout(formData);
  }

  function handleInputChange(event) {
    const value = event.target.value
    const inputName = event.target.name

    const newFormData = { ...formData }
    newFormData[inputName] = value
    setFormData(newFormData)
  }

  return (
    // libreria zod para validar
    <div className="col-lg-8 col-md-6 col-sm-4">
      <div id="checkout_login">
        <div className="checkout_info">
          <p>Ingresar datos de compra</p>
          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="form_group">
              <label htmlFor="name">Nombre <span>*</span></label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleInputChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="form_group">
              <label htmlFor="email">Email <span>*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleInputChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form_group">
              <label htmlFor="phone">Teléfono <span>*</span></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                onChange={handleInputChange}
                required
                autoComplete="tel"
              />
            </div>

            <div className="form_group group_3">
              <button className="btn btn-primary" type="submit">Finalizar Compra</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

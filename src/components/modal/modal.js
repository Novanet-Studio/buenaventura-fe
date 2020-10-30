import React from "react"
// import ReactMarkdown from "react-markdown"
import "./modal.scss"

const Modal = ({ data, id, onClose }) =>
  data.map(
    item =>
      item.id === id && (
        <div className="modal" key={item.id}>
          <div className="modal__content">
            <button onClick={onClose}>&times;</button>
            <div className="modal__body">
              <h2 className="modal__title">{item.nombre}</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                eos incidunt tempora necessitatibus explicabo non illo atque
                libero tenetur minima.
              </p>
            </div>
          </div>
        </div>
      )
  )

export default Modal
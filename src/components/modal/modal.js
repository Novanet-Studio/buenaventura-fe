import React from "react"
import ReactMarkdown from "react-markdown"
import "./modal.scss"

const Modal = ({ id, data, list, onClose }) =>
  data.map(
    (item, index) =>
      item.id === id && (
        <div className="modal" key={item.id}>
          <div className="modal__content">
            <button onClick={onClose}>&times;</button>
            <div className="modal__body">
              <ul>
                {index === 0
                  ? list
                      .filter(item => item.especialidad === "contabilidad")
                      .map(item => (
                        <li key={item.id}>
                          <h4>{item.titulo}</h4>
                          <ReactMarkdown
                            source={item.items}
                            escapeHtml={false}
                          />
                        </li>
                      ))
                  : list
                      .filter(item => item.especialidad === "rrhh")
                      .map(item => (
                        <li key={item.id}>
                          <h4>{item.titulo}</h4>
                          <ReactMarkdown
                            source={item.items}
                            escapeHtml={false}
                          />
                        </li>
                      ))}
              </ul>
            </div>
          </div>
        </div>
      )
  )

export default Modal

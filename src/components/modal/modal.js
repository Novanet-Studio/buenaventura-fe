import React from "react"
// import ReactMarkdown from "react-markdown"
import "./modal.scss"

const Modal = ({ data, index,  id, onClose }) =>
  data.map(
    item =>
      item.id === id && (
        <div className="modal" key={item.id}>
          <div className="modal__content">
            <button onClick={onClose}>&times;</button>
            <div className="modal__body">
              {/* <ul>
                {(index === 0 &&
                  servicios.content.lista
                    .filter(item => item.especialidad === "contabilidad")
                    .map((item, id) => (
                      <li key={item.id}>
                        <h4>{item.titulo}</h4>
                        <ReactMarkdown source={item.items} escapeHtml={false} />
                      </li>
                    ))) ||
                  servicios.content.lista
                    .filter(item => item.especialidad === "rrhh")
                    .map(item => (
                      <li key={item.id}>
                        <h4>{item.titulo}</h4>
                        <ReactMarkdown source={item.items} escapeHtml={false} />
                      </li>
                    ))}
              </ul> */}
              {console.log(data, index, id)}
            </div>
          </div>
        </div>
      )
  )

export default Modal

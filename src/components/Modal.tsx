import React from 'react'

type Props = {
  med: any | null;
  onClose: () => void;
}

export default function Modal({ med, onClose }: Props) {
  if (!med) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{med.nombre}</h2>
        <div className="meta">Principio activo: {med.principio_activo}</div>

        <div className="modal-grid">
          <div>
            <div className="row"><span className="kv">Concentración:</span> {med.concentracion}</div>
            <div className="row"><span className="kv">Forma farmacéutica:</span> {med.forma_farmaceutica}</div>
            <div className="row"><span className="kv">Vía de administración:</span> {med.via_administracion}</div>
            <div className="row"><span className="kv">Indicaciones:</span> {med.indicaciones}</div>
          </div>
          <div>
            <div className="row"><span className="kv">Posología:</span> {med.posologia}</div>
            <div className="row"><span className="kv">Interacciones:</span> {med.interacciones}</div>
            <div className="row"><span className="kv">Efectos adversos:</span> {med.efectos_adversos}</div>
            <div className="row"><span className="kv">Laboratorio:</span> {med.laboratorio}</div>
          </div>
        </div>

        <button className="close-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}

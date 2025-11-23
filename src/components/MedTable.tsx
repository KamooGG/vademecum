import React from 'react'

type Props = {
  meds: any[];
  onOpen: (m: any) => void;
}

export default function MedTable({ meds, onOpen }: Props) {
  return (
    <div className="card">
      <table className="table" role="table" aria-label="Medicamentos">
        <thead>
          <tr><th>Nombre del medicamento</th></tr>
        </thead>
        <tbody>
          {meds.map((m, idx) => (
            <tr key={idx}>
              <td>
                <a className="med-link" onClick={() => onOpen(m)}>{m.nombre}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import React from 'react'
import MEDICAMENTOS from './data/medicamentos'
import MedTable from './components/MedTable'
import Modal from './components/Modal'

export default function App() {
  const [selected, setSelected] = React.useState<any | null>(null)

  return (
    <div className="container">
      <header className="header">
        <div className="title">
          <h1>Vademécum — Medicamentos de control especial</h1>
          <p>Haz clic en cualquier medicamento para ver la ficha completa</p>
        </div>
      </header>

      <main>
        <MedTable meds={MEDICAMENTOS} onOpen={(m) => setSelected(m)} />
      </main>

      {selected && (
        <Modal med={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}

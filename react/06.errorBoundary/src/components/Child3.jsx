

export default function Child3() {
  const data = undefined.map(it => <li key={it}>{it}</li>)
  return (
    <div>
      <h3>Child3</h3>
      {
        data
      }
    </div>
  )
}

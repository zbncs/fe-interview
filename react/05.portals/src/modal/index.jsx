import {createPortal} from 'react-dom'
const jsx1 = (
  <div style={{
    width : "450px",
    height : "250px",
    border : "1px solid",
    position : "absolute",
    left : "calc(50% - 225px)",
    top : "calc(50% - 125px)",
    textAlign : "center",
    lineHeight : "250px"
  }}>模态框</div>
)

export default function Modal() {
  return createPortal(jsx1, document.body)
}

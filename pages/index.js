
function GlobalStyle() {
  return (
    <style global jsx >{`
      *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }
        `}
      </style >
  )
}

function Titulo(props) {
  console.log(props)
  var Tag = props.tag
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag}{
      color: red;
      font-size: 38px;
      font-weight: 700;
      }
      `}</style>
    </>

  )
}

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Titulo tag="h2">Boas vinda de volta!</Titulo>
      <h2>Discord - Alura Matrix</h2>
    </div>
  )
}

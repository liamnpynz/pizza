export const Button = (props) => {
    const {text} = props
    return (
    <div className="add-button" style={{textAlign: "center"}} >
          <div className="add-cta" style={{textAlign: "center"}}>{text}</div>
        </div>
    )
}
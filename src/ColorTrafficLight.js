const ColorTrafficLight = (props) => {
    return(
        <div 
            className={`sinalizacao_luz ${props.on ? "sinalizacao_luz--on" : ""}`}
            style={{backgroundColor: props.color}}
            onClick={props.onClick}
        >
        </div>
    )
}

export default ColorTrafficLight
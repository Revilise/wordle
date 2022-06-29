import './Button.css'

export default function Button({handler, children}) {
    return (
        <div className="control-btn">
            <button onClick={handler}>{children}</button>
        </div>
    )
}
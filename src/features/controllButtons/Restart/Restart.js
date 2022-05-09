export default function Restart({handler}) {
    console.log(handler)
    return (
        <div className="control-btn">
            <button onClick={handler}>Restart</button>
        </div>
    )
}
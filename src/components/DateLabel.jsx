export default function DateLabel({label, decor}) {
    return (
        <label className={`date-label ${decor}`}>{label}</label>
    )
}
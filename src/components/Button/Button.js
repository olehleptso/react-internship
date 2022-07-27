import './Button.css';

function Button ({text, styles}) {
    return (
        <div >
            <button className={styles}>{text}</button>
        </div>
    )
}

export default Button;
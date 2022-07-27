import './Text.css';

function Text ({text, styles}) {
    return (
        <div className={styles}>
            {text}
        </div>
    )
}

export default Text;
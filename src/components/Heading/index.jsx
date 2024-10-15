import './index.css'

export default function Heading({ text, id }) {
    return (
        <div
            className='homepage-subheadings'
            id={id}
        >
            <h2>{text}</h2>
        </div>
    );
}
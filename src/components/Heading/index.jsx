import './index.css'

export default function Heading({ text }) {
    return (
        <div
            className='homepage-subheadings'
        >
            <h2>{text}</h2>
        </div>
    );
}
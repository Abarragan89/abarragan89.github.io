import './index.css';
export default function CardImgSection({ reverse, imgSrc, title, children }) {
    return (
        <section className={`card-img-section ${reverse ? 'flex-reverse' : ''}`}>
            <img src={imgSrc} width={60} alt='section-img' />
            <div className='card-text'>
                <h6>{title}</h6>
                <div className='card-text'>
                    {children}
                </div>
            </div>
        </section>
    );
}
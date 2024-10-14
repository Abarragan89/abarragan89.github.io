import './index.css'

export default function Card({ children, title }) {
    return (
        <div
            className="ratings-card-container"
            data-aos='flip-right'
            data-aos-offset='150'
            data-aos-duration='1500'
        >
            {/* Table Title */}
            {/* <h2 className="table-title">{cardData.category}</h2> */}
            <h2 className="table-title">{title}</h2>

            {/* Ratings Table */}
            <div className="ratings-card">
                {children}
            </div>
        </div>
    );
}
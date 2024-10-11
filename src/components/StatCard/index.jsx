import './index.css'

export default function StatCard({ cardData }) {
    console.log('card ', cardData)
    return (
        <div className="ratings-card-container">
            {/* Table Title */}
            <h2 className="table-title">{cardData.category}</h2>
            {/* <h2 className="table-title">{title}</h2> */}

            {/* Ratings Table */}
            <div className="ratings-card">
                {cardData.ratings.map((rating, index) => (
                    <div className="rating-row" key={index}>
                        <span className="rating-label">{rating.name}</span>
                        <div className="rating-stars">
                            {[...Array(3)].map((_, i) => {
                                if (rating.rating > i) {
                                    return (
                                        <span className="starOn" key={i}>★</span>
                                    )
                                } else {
                                    return (
                                        <span className="starOff" key={i}>★</span>
                                    )
                                }
                            }
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


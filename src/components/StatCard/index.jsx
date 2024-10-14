import Card from '../Card';
import './index.css'

export default function StatCard({ cardData, indexNumber }) {
    return (
        <Card title={cardData.category}>
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
        </Card>

    );
}


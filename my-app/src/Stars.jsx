import Star from './Star';

function Stars({count = 0}) {
    if (count < 1 || count > 5) {
        return null;
    }
    const starsArray = Array.from({length: count});

    return (
        <ul className="card-body-stars u-clearfix">
            <li>
                {starsArray.map((_, index) => (
                    <Star key={index}/>
                ))}
            </li>
        </ul>
    );
}
export default Stars

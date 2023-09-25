import PropTypes from 'prop-types';

const DonationCard = ({ donate }) => {
    const { image, category, title, price, category_bg, card_bg, text_color, button_bg } = donate;
    return (
        <div>
            <div className='rounded-xl flex flex-col md:flex-row gap-2' style={{ backgroundColor: `${card_bg}` }}>
                <img className='md:rounded-l-xl md:w-64' src={image} alt="" />
                <div className='p-3 py-6'>
                    <p className='w-36 text-center py-1 font-bold rounded-md mb-2' style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }}>
                        {category}
                    </p>

                    <h2 className='text-2xl font-bold mt-3'>
                        {title}
                    </h2>

                    <p className='text-xl font-bold mt-2' style={{ color: `${text_color}` }}>${price}</p>

                    <button className='btn text-white mt-2' style={{ backgroundColor: `${button_bg}` }}>View Details</button>
                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donate: PropTypes.object,
};

export default DonationCard;
import link from '../assets/link.svg';
import PropTypes from 'prop-types';
import { CardStyle } from '../styles/cardStyle.css';

const Card = ({ data }) => {
    console.log(data);
    return (
        <div>
            {data.map(item => (
                <CardStyle
                    key={item.id}
                    style={
                        {backgroundColor: 'rgb(251, 234, 194)'}
                    }
                >
                    <img src={item.avatar_url} alt='user image' />
                    <p>{item.login}</p>
                    <a href={item.html_url} target='_blank' rel='noreferrer'>
                        <img src={link} alt='link icon' />
                    </a>
                </CardStyle>
            ))}
        </div>
    );
};

export default Card;

Card.propTypes = {
    color: PropTypes.bool,
    data: PropTypes.array,
};

import React from 'react';
import PropTypes from 'prop-types';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import './CatCard.css';
import { REACTIONS } from '../config';

const CatCard = ({ id, name, pic, onReaction, isLiked, isDisliked }) => (
	<Div className={`CatCard ${isLiked ? 'CatCard--Liked' : ''} ${isDisliked ? 'CatCard--Disliked' : ''}`}>
		<div className='CatCard__Photo' >
			<img src={pic} alt={`Cat ${name}`}/>
		</div>
		<div className='CatCard__Info' >
			<h3 className='CatCard__Name'>{name}</h3>
		</div>
		<div className='CatCard__Footer'>
			<div className='ReactionBtn ReactionBtn--Like'>
				<button onClick={() => onReaction(id)}>
					<span className='ReactionBtn__Icon' role='img' aria-label='like'>👍</span>
				</button>
			</div>
			<div className='ReactionBtn ReactionBtn--Dislike'>
				<button onClick={() => onReaction(id, REACTIONS.DISLIKE)}>
					<span className='ReactionBtn__Icon' role='img' aria-label='dislike'>👎</span>
				</button>
			</div>
		</div>
	</Div>
);

CatCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
};

export default CatCard;

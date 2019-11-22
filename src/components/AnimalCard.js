import React from 'react';
import PropTypes from 'prop-types';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import './AnimalCard.css';
import { REACTIONS } from '../config';

const AnimalCard = ({ id, name, pic, onReaction, isLiked, isDisliked }) => (
	<Div className={`AnimalCard ${isLiked ? 'AnimalCard--Liked' : ''} ${isDisliked ? 'AnimalCard--Disliked' : ''}`}>
		<div className='AnimalCard__Photo' >
			<img src={pic} alt={`Cat ${name}`}/>
		</div>
		<div className='AnimalCard__Info' >
			<h3 className='AnimalCard__Name'>{name}</h3>
		</div>
		<div className='AnimalCard__Footer'>
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

AnimalCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
};

export default AnimalCard;

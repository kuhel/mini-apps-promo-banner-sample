import React, { useState } from 'react';
import CatalogContainer from './containers/CatalogContainer';
import { REACTIONS, ANIMALS } from './config';
import { animalsData } from './data/data';
import '@vkontakte/vkui/dist/vkui.css';

const MainView = () => {
	const [reactions, setReactions] = useState(REACTIONS.LIKE);
	const [contextOpened, setContextOpened] = useState(false);
	const [mode, setMode] = useState(ANIMALS.CAT);
	const [animals, setAnimals] = useState(animalsData[ANIMALS.CAT]);

	const toggleContext = () => {
		setContextOpened(!contextOpened);
	}

	const changeMode = (e) => {
		setAnimals(animalsData[e.currentTarget.dataset.mode]);
		setMode(e.currentTarget.dataset.mode);
		setContextOpened(false);
	};

	const selectContext = (e) => {
		setMode(e.currentTarget.dataset.mode)
		requestAnimationFrame(toggleContext);
	}

	const onReaction = (id, reaction = REACTIONS.LIKE) => {
		let nextReactions = { ...reactions };
		if (nextReactions[id] === reaction) {
			delete nextReactions[id];
		} else {
			nextReactions[id] = reaction;
		}
		setReactions(nextReactions)
	}

	const isLiked = (id) => {
		return reactions[id] === REACTIONS.LIKE;
	};

	const isDisliked = (id) => {
		return reactions[id] === REACTIONS.DISLIKE;
	};

	return <CatalogContainer id='catalog' mode={mode} contextOpened={contextOpened} animals={animals} changeMode={changeMode} selectContext={selectContext} toggleContext={toggleContext} onReaction={onReaction} isLiked={isLiked} isDisliked={isDisliked} />;
}

export default MainView;

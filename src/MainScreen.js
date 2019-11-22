import React, { useState, useEffect } from 'react';
import CatalogContainer from './containers/CatalogContainer';
import { REACTIONS, ANIMALS_TYPES } from './config';
import { promoBannerProps } from './data/data';
import { animalsData } from './data/data';
import '@vkontakte/vkui/dist/vkui.css';

const MainView = () => {
	const [reactions, setReactions] = useState({});
	const [showBanner, setShowBanner] = useState(false);
	const [promoBanner, setPromoBanner] = useState(null);
	const [contextOpened, setContextOpened] = useState(false);
	const [mode, setMode] = useState(ANIMALS_TYPES.CAT);
	const [animals, setAnimals] = useState(animalsData[ANIMALS_TYPES.CAT]);

	const toggleContext = () => {
		setContextOpened(!contextOpened);
	}

	const changeMode = (e) => {
		const newMode = e.currentTarget.dataset.mode;
		setAnimals(animalsData[newMode]);
		setMode(newMode);
		setContextOpened(false);
		setReactions({});
		setShowBanner(false);
		const scrollY = getScrollY();
		if (scrollY > 0) {
			window.scroll({
				top: 0,
				behavior: 'smooth'
			});
		}
		if (newMode === ANIMALS_TYPES.DOG) {
			window.addEventListener('scroll', onScroll);
		}
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

	const throttle = (fn, time) => {
		var timeout;
		return function() {
			if (!timeout) {
				fn.apply(this, arguments);
				timeout = setTimeout(function() {
					timeout = false;
				}, time)
			}
		};
	}

	const getScrollY = () => {
		return window.pageYOffset || document.documentElement.scrollTop;
	}

	const onScroll = throttle(() => {
		const scrollY = getScrollY();
		if (scrollY >= 1200) {
			setShowBanner(true);
			window.removeEventListener('scroll', onScroll);	
		}
	})

	useEffect(() => {
		async function fetchData() {
			// const promoBannerData = await connect.sendPromise('VKWebAppGetAds');
			await stall();
			setPromoBanner(promoBannerProps);
		}
		fetchData();
	}, []);

	async function stall(stallTime = 800) {
		await new Promise(resolve => setTimeout(resolve, stallTime));
	}

	const isLiked = (id) => {
		return reactions[id] === REACTIONS.LIKE;
	};

	const isDisliked = (id) => {
		return reactions[id] === REACTIONS.DISLIKE;
	};

	return <CatalogContainer id='catalog' mode={mode} contextOpened={contextOpened} animals={animals} changeMode={changeMode} selectContext={selectContext} toggleContext={toggleContext} onReaction={onReaction} isLiked={isLiked} isDisliked={isDisliked} promoBanner={promoBanner} showPromoBanner={showBanner} setShowBanner={setShowBanner} />;
}

export default MainView;

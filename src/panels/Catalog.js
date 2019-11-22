import React from 'react';
import List from '@vkontakte/vkui/dist/components/List/List';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PromoBanner from '@vkontakte/vkui/dist/components/PromoBanner/PromoBanner';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import PanelHeaderContent from '@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent';
import HeaderContext from '../components/HeaderContext';
import AnimalCard from '../components/AnimalCard';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import { ANIMALS_TYPES } from '../config';
import './Catalog.css';

const Catalog = ({ onReaction, isLiked, isDisliked, promoBanner, showPromoBanner, setShowBanner, changeMode, selectContext, toggleContext, mode, animals, contextOpened }) => {

	const list = (item, idx, showBanner) => {
		console.log(item);
		if (showBanner && idx !== 0 && idx % 3 === 0) {
			return (
				<div key={idx} className='PromoBannerList'>
					{animalCard(item, idx)}
					{promoBanner ? <PromoBanner bannerData={promoBanner} onClose={() => setShowBanner(false)}></PromoBanner> : null}
				</div>
			)
		} else {
			return animalCard(item, idx);
		}
	}

	const animalCard = (pet) => {
		return <AnimalCard onReaction={onReaction} isLiked={isLiked(pet.id)} isDisliked={isDisliked(pet.id)} key={pet.id} {...pet} />
	}
	console.log(animals)

	return (
		<div>
			<PanelHeader>
				<PanelHeaderContent aside={<Icon16Dropdown />} onClick={toggleContext}>
					{`${mode}s`.toUpperCase()}
				</PanelHeaderContent>
			</PanelHeader>
			<HeaderContext selectContext={selectContext} changeMode={changeMode} mode={mode} contextOpened={contextOpened} />
			{animals.length > 0 &&
			<List className='CatsList'>
				{animals.map((pet, idx) => list(pet, idx, mode === ANIMALS_TYPES.CAT))}
			</List>
			}
			<FixedLayout className={`Promo ${showPromoBanner ? 'Promo--Show' : 'Promo--Hide'}`} vertical='bottom'>
				{(promoBanner && mode === ANIMALS_TYPES.DOG) && <PromoBanner bannerData={promoBanner} onClose={() => setShowBanner(false)}></PromoBanner>}
			</FixedLayout>
		</div>
	);
};

export default Catalog;
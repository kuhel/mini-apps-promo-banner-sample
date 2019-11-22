import React from 'react';
import List from '@vkontakte/vkui/dist/components/List/List';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PromoBanner from '@vkontakte/vkui/dist/components/PromoBanner/PromoBanner';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import PanelHeaderContent from '@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent';
import HeaderContext from '../components/HeaderContext';
import CatCard from '../components/CatCard';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import './Catalog.css';

const Catalog = ({ onReaction, isLiked, isDisliked, promoBanner, showPromoBanner, setShowBanner, changeMode, selectContext, toggleContext, mode, animals, contextOpened }) => {
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
				{animals.map(cat => <CatCard onReaction={onReaction} isLiked={isLiked(cat.id)} isDisliked={isDisliked(cat.id)} key={cat.id} {...cat} />)}
			</List>
			}
			<FixedLayout className={`Promo ${showPromoBanner ? 'Promo--Show' : 'Promo--Hide'}`} vertical='bottom'>
				{promoBanner && <PromoBanner bannerData={promoBanner} onClose={() => setShowBanner(false)}></PromoBanner>}
			</FixedLayout>
		</div>
	);
};

export default Catalog;
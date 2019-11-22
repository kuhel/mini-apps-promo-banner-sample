import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Catalog from '../panels/Catalog';

import '@vkontakte/vkui/dist/vkui.css';

const CatalogContainer = ({ onReaction, isLiked, isDisliked, id, mode, changeMode, animals, selectContext, toggleContext, contextOpened }) => {
    return (
        <View id={id} activePanel={id}>
            <Panel id={id}>
                <Catalog mode={mode} animals={animals} toggleContext={toggleContext} contextOpened={contextOpened} changeMode={changeMode} selectContext={selectContext} onReaction={onReaction} isLiked={isLiked} isDisliked={isDisliked} />
            </Panel>
        </View>
    );
};

export default CatalogContainer;
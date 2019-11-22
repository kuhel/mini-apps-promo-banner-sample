import React from 'react';
import HeaderContext from '@vkontakte/vkui/dist/components/HeaderContext/HeaderContext';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import { ANIMALS_TYPES } from '../config';

const HeaderContextBar = ({changeMode, contextOpened, mode, headerContext}) => {
	return (
		<HeaderContext opened={contextOpened} onClose={headerContext}>
			<List>
				<Cell
					before='😺'
					asideContent={mode === ANIMALS_TYPES.CAT ? <Icon24Done fill="var(--accent)" />  : null}
					onClick={changeMode}
					data-mode={ANIMALS_TYPES.CAT}
				>Cats</Cell>
				<Cell
					before='🐶'
					asideContent={mode === ANIMALS_TYPES.DOG ? <Icon24Done fill="var(--accent)" />  : null}
					onClick={changeMode}
					data-mode={ANIMALS_TYPES.DOG}
				>Dogs</Cell>
			</List>
		</HeaderContext>
	)
};

export default HeaderContextBar;
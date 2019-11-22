import React from 'react';
import HeaderContext from '@vkontakte/vkui/dist/components/HeaderContext/HeaderContext';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import { ANIMALS } from '../config';

const HeaderContextBar = ({changeMode, contextOpened, mode, headerContext}) => {
	return (
		<HeaderContext opened={contextOpened} onClose={headerContext}>
			<List>
				<Cell
					before='😺'
					asideContent={mode === ANIMALS.CAT ? <Icon24Done fill="var(--accent)" />  : null}
					onClick={changeMode}
					data-mode={ANIMALS.CAT}
				>Cats</Cell>
				<Cell
					before='🐶'
					asideContent={mode === ANIMALS.DOG ? <Icon24Done fill="var(--accent)" />  : null}
					onClick={changeMode}
					data-mode={ANIMALS.DOG}
				>Dogs</Cell>
			</List>
		</HeaderContext>
	)
};

export default HeaderContextBar;
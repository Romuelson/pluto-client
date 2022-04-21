/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* React */
import { TouchEvent, MouseEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use.redux';

import PersonalCards from '../personal-cards/personal-cards.comp';

function PersonalNovelties() {
	return (
		<div className="personal__novelties">
			<div className="personal__container">
				<PersonalCards />
			</div>
		</div>
	);
}

export default PersonalNovelties;

/* Types */
import {
	InfoActiveButton,
	InfoListAddress,
} from '../../../../store/slices/components/info/info.type';

export type InfoListProps = {
	addressList: InfoListAddress;
	activeButton: InfoActiveButton;
	setActiveIndex: (index: number) => void;
};

function InfoList(props: InfoListProps) {
	const { addressList, activeButton, setActiveIndex } = props;

	return (
		<ul className="info__list list">
			{addressList.map((item, index) => (
				<li key={item.id} className="info__item list__item">
					<button
						className={
							activeButton === index
								? 'info__button info__button--active button'
								: 'info__button button'
						}
						type="button"
						onClick={() => setActiveIndex(index)}
					>
						{item.title}
					</button>
				</li>
			))}
		</ul>
	);
}

export default InfoList;

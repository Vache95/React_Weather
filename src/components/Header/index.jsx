import React from 'react';
import { useApp } from 'hooks/useApp';
import './styles.scss';

import TextInput from 'common/TextInput';

const Header = () => {
	const { handleSearch, searchValue } = useApp();
	return (
		<div className='weather__header'>
			<div className='search'>
				<TextInput type='text' maxLength='50' onChange={handleSearch} value={searchValue} placeholder='search...' />
			</div>
		</div>
	);
};
export default Header;

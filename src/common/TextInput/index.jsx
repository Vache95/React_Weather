import React from 'react';
import './styles.scss';

const TextInput = ({ label, onChange = () => null, ...rest }) => (
	<label>
		{!!label && <span>{label}</span>}
		<input onChange={onChange} {...rest} />
	</label>
);

export default TextInput;

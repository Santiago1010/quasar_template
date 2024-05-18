const classNames = ['primary', 'selected', 'active', 'medium'];

// 1. mutation
const mutation = classNames.map((c) => `button--${c}`).join(' ');

// 2. concatenation
const concat = classNames
	.map((c) => 'button--' + c)
	.reduce((acc, c) => acc + ' ' + c, '');

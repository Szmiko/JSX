var contcts = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Nowak',
		email: 'jan@wp.pl'
	},
	{
		id: 2,
		firstName: 'Adam',
		lastName: 'Kowalski',
		email: 'Adam@wp.pl',
	},
	{
		id: 3,
		firstName: 'Zbigniew',
		lastName: 'Kozioł',
		email: 'zbigniew@wp.pl',
	}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var App = React.createClass({
	render: function() {
		return (
			<div className={'app'}
			<ContactForm contact={contactForm}>
			<Contacts items={contacts}>
		);
	}
});
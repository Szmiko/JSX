var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.obect.isRequired
	},

	render: function() {
		return (
			<form className={'contactForm'}>
				<input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}>
				<input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.Name}>
				<input type={'text'} placeholder={'email'} value={this.props.contact.email}>
			</form>
		);
	};
});

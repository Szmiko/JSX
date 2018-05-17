var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return(
			<div className={'contactItem'}>
				<img className={'contactImage'} src={'https://i.ytimg.com/vi/pVrDRLOeMKY/hqdefault.jpg'} alt={'Zdjęcie">
				<p className={'contactLabel'}>
					Imię: (this.props.contact.firstName)
				</p>
				<p className={'contactLabel'}>
					Nazwisko: (this.props.contact.Name)
				</p>
				<a href={'mailto: ' + this.props.item.email}>
					{this.props.item.email}
				</a>
			</div>
		)
	}
})

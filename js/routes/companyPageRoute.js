App.CompanyPageRoute = Ember.Route.extend({
	renderTemplate: function () {
		this.render('layout'),
		this.render('companyPage', {
			into: 'layout'
		})
	}
});

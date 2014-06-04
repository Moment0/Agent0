App.ImpressumRoute = Ember.Route.extend({
	renderTemplate: function () {
		this.render('layout'),
		this.render('impressum', {
			into: 'layout'
		})
	}
});

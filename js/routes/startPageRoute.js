App.StartPageRoute = Ember.Route.extend({
	renderTemplate: function () {
		this.render('layout', {
			controller: 'layout'
		});
		this.render('startPage', {
			into: 'layout'
		})
	}
});

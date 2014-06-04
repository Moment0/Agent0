App.ProductPageRoute = Ember.Route.extend({
	renderTemplate: function () {
		this.render('layout'),
		this.render('productPage', {
			into: 'layout'
		})
	}
});

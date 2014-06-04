App.LayoutController = Ember.ObjectController.extend ({
	actions: {
		impressum: function () {
			this.transitionToRoute('impressum');
		},
		company: function () {
			this.transitionToRoute('companyPage');
		},
		product: function () {
			this.transitionToRoute('productPage');
		},
		home: function () {
			this.transitionToRoute('startPage');
		}
	}
});

var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function(){
  this.route('about', { path: '/aboutus'} );
  this.resource('countries', function(){
    this.resource('country', {path: '/:name'});
  });
});

App.IndexController = Ember.Controller.extend({
  countriesCount: function() {
    return App.COUNTRIES.length
  }.property(),
  // map: '/images/logo.png',
  time: function() {
    return (new Date()).toDateString()
  }.property()
});

App.COUNTRIES = [
{
  name: 'Cambodia',
  continent: 'South East Asia',
  date: 'January 2014 and May 2014'
  // date:

},
{
  name: 'Thailand',
  continent: 'South East Asia',
  date: 'December 2013, February 2014, April 2014, July 2014'
},

{
  name: 'Vietnam',
  continent: 'South East Asia',
  date: 'June 2014'
},

{
  name: 'Myanmar',
  continent: 'South East Asia',
  date: 'August 2014'
},

{
  name: 'Lao',
  continent: 'South East Asia',
  date: 'July 2014'
},

{
  name: 'Singapore',
  continent: 'South East Asia',
  date: 'September 2013 to June 2014'
},

{
  name: 'Malaysia',
  continent: 'South East Asia',
  date: 'November 2013 and May 2014'
},

{
  name: 'Indonesia',
  continent: 'South East Asia',
  date: 'August 2014'
},

{
  name: 'Japan',
  continent: 'South East Asia',
  date: 'June 2014'
},
{
  name: 'Australia',
  continent: 'South East Asia',
  date: 'New Year 2014-2015'
}

];

App.CountriesRoute = Ember.Route.extend({
  model: function() {
    return App.COUNTRIES; //can be object or an array
  }

});

AppCountryRoute = Ember.Route.extend({
  model: function(params) {
    return App.PRODUCTS.findBy('name', params.name); //go to '/cmabodia', it will find that name and find the object
  }
});

App.Product = DS.Model.extend({

})
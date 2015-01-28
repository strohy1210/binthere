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
  time: function() {
    return (new Date()).toDateString()
  }.property()
});

App.COUNTRIES = [
{
  name: 'Cambodia',
  continent: 'South East Asia',
  date: 'January 2014 and May 2014',
  cities: 'Siem Reap, Koh Rong, Phnom Penh, Sihanoukville, Kampot'

},
{
  name: 'Thailand',
  continent: 'South East Asia',
  date: 'December 2013, February 2014, April 2014, July 2014',
  cities: 'Bangkok, Koh Tao, Koh Lanta, Koh Phi Phi, Pai, Chiang Mai, Koh Phagnan'
},

{
  name: 'Vietnam',
  continent: 'South East Asia',
  date: 'June 2014',
  cities: 'Saigon (Ho Chi Minh City, Mui Ne, Nha Trang, Hoi An, Hanoi, Halong Bay, Sapa'
},

{
  name: 'Myanmar',
  continent: 'South East Asia',
  date: 'August 2014',
  cities: 'Yangon, Hsi Paw, Mandalay, Inle Lake, Bagan, Kalaw'
},

{
  name: 'Lao',
  continent: 'South East Asia',
  date: 'July 2014',
  cities: 'Luang Prabang, Vang Vieng'
},

{
  name: 'Singapore',
  continent: 'South East Asia',
  date: 'September 2013 to June 2014',
  cities: 'Singapore'
},

{
  name: 'Malaysia',
  continent: 'South East Asia',
  date: 'November 2013 and May 2014',
  cities: 'Kuala Lumpur, Penang'
},

{
  name: 'Indonesia',
  continent: 'South East Asia',
  date: 'August 2014',
  cities: 'Gili Islands, Seminyak and Ubud, Bali, Jyojyakarta'
},

{
  name: 'Japan',
  continent: 'South East Asia',
  date: 'June 2014',
  cities: 'Tokyo, Kyoto'
},
{
  name: 'Australia',
  continent: 'South East Asia',
  date: 'New Year 2014-2015',
  cities: 'Sydney'
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
  name: DS.attr('string'),
  continent: DS.attr('string'), <!-- //will be implied if not specified -->
  date: DS.attr('string'),
  cities: DS.attr('string')
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();
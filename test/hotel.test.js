const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', function() {
    it('should should create a instance of Hotel', () => {
        var hotel = new Hotel('Hilton Metropole', 'London')

        expect(hotel.name).to.equal("Hilton Metropole")
        expect(hotel.city).to.equal("London")
        expect(hotel.reviews).to.deep.equal([])
    })

    it('should start with no reviews or ratings', () => {
        var hotel = new Hotel('Hilton Metropole', 'London')
        var count = hotel.reviewCount()
        var rating = hotel.rating()
        var stars = hotel.ratingAsStars() 

        expect(count).to.equal(0)
        expect(rating).to.equal(0)
        expect(stars).to.equal('')
    })

});
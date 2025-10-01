/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { Rooms: true, title: 'Travlr Getaways'});
};

module.exports = {
    rooms
};
var movies = [

    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju.',
        img: 'images/harry-potter.jpg'

    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny.',
        img: 'images/krol-lew.jpg'
    },
    {
        id: 3,
        title: 'Miasto Boga',
        desc: 'Film o gangach narkotykowych w Brazylii w Rio de Janeiro.',
        img: 'images/miasto-boga.jpg'
    },
    {
        id: 4,
        title: 'Labirynt Fauna',
        desc: 'Film o Hiszpanii w okresie panowania gen.Franco.',
        img: 'images/labirynt-fauna.jpg'

    },
    {
        id: 5,
        title: 'Biała wstążka',
        desc: 'Film o niemieckiej wsi na prowincji w okresie krótko przed wybuchem I wojny światowej.',
        img: 'images/biala-wstazka.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('li', {
                    className: 'movie'
                },
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDesc, {
                    desc: this.props.movie.desc
                }),
                React.createElement('img', {
                    src: this.props.movie.img
                })
            )
        )
    }
});


var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title)
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('p', {}, this.props.desc)
    }
})

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function () {
        return (
            React.createElement('ul', {}, this.props.movies.map(function (movie) {
                return React.createElement(Movie, {
                    key: movie.id,
                    movie: movie
                })
            }))
        )
    }
});



var element = React.createElement('div', {},
    React.createElement(MovieList, {
        className: 'movie-list',
        movies: movies
    })
);




ReactDOM.render(element, document.getElementById('app'));
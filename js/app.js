var app = angular.module("home", []);

app.directive("topSection", function() {
    return {
        restrict: 'E',
        templateUrl: '../views/top-section.html',
        controller: function() {
            this.isInContactsPage = false;
            this.goToContacts = function() {
                this.isInContactsPage = true;
            };

            this.goToGames = function() {
                this.isInContactsPage = false;
            };
        },
        controllerAs: 'topSection'
    };
});

app.directive("contactSection", function() {
    return {
        restrict: 'E',
        templateUrl: '../views/contact-section.html',
        controller: function() {
            var contact = [
                {
                    name: "Github",
                    url: "http://github.com/tonyram19"
                },
                {
                    name: "LinkedIn",
                    url: "https://ve.linkedin.com/in/ramireztony"
                },
                {
                    name: "Twitter",
                    url: "https://twitter.com/tonyram19"
                },
                {
                    name: "Bitbucket",
                    url: "http://bitbucket.com/tonyram19"
                },
                {
                    name: "tonyram20@gmail.com",
                    url: "mailto:tonyram20@gmail.com"
                }
            ];
            this.sites = contact;
        },
        controllerAs: 'contactSection'
    };
});

app.directive("projectsSection", function() {
    return {
        restrict: 'E',
        templateUrl: '../views/projects-section.html',
        controller: function() {

            var gamesArray = [
                {
                    name: "Isowood",
                    imgUrl: "../img/isowood.png",
                    gameUrl: "https://play.google.com/store/apps/details?id=com.ramirezTony.Isowood&hl=en",
                },
                {
                    name: "MVSC",
                    imgUrl: "../img/mvsc.png",
                    gameUrl: "https://play.google.com/store/apps/details?id=com.ramiezTony.Case&hl=en",
                },
                {
                    name: "Zombie: The Movie",
                    imgUrl: "../img/shooter.jpg",
                    gameUrl: "#",
                }
            ];

            var appsArray = [
                {
                    name: "Notes App",
                    imgUrl: "../img/notes.jpg",
                    appUrl: "https://ramireztony.herokuapp.com/",
                },
                {
                    name: "Football App",
                    imgUrl: "../img/football.jpg",
                    appUrl: "https://my-football-app.herokuapp.com/",
                }
            ];

            this.games = gamesArray;
            this.apps = appsArray;
        },
        controllerAs: 'projectsSection'
    };
});

var favoriteMovie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"],
  printDetails: function() {
    console.log(
      `${this.title} lasts for ${
        this.duration
      } minutes. Stars: ${this.stars.join(", ")}.`
    );
  }
};
favoriteMovie.printDetails();

//'Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes.'

// console.log(
//   `${favoriteMovie.title} lasts for ${favoriteMovie.duration} minutes. Stars: ${favoriteMovie.stars}.`
// );

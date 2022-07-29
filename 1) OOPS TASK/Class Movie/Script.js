/*
An instance of class Movie represents a film. This class has the following three properties:
1) title, which is a String representing the title of the movie
2) studio, which is a String representing the studio that made the movie
3) rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
*/

public class Holiday {
    private String name;
    private int day;
    private String month;
}
/*
a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
 a String representing the studio, and a String representing the rating as its arguments, and sets the respective
  class properties to these values.*/

public Holiday(String n, int d, String m){
    name = n;
    day = d;
    month = m;
}
/*
b) Write a method inSameMonth, which compares two instances of the class Holiday,
 and returns the Boolean value true if they have the same month, and false if they do not. */

public Boolean inSameMonth(Holiday hol){
    return this.month.equals(hol.month);
}

/*
c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array 
of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.*/ The returned array need not be full.

public static Movie[] getPG(Movie[] mov){
    Movie[] pgMov = new Movie[mov.length];

    var newArrayIndex = 0;
    var i;
    for (i = 0; i < mov.length; i++) {
        if (mov[i].rating.equals("PG")) {
            pgMov[newArrayIndex] = mov[i];
            newArrayIndex++;
        }
    }
    return pgMov;
}
/*
d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13” */

Movie mov = new Movie("Casino Royale", "Eon Productions", "PG-13");
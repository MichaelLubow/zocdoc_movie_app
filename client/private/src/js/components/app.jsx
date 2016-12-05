const React = require('react');

const Header = require('./header');
const MovieCardsContainer = require('./movie_cards_container');
const FullMovieInfo = require('./full_movie_info');
const CompareMovies = require('./compare_movies');
const ErrorMessageBanner = require('./error_message_banner');
const ReactModal = require('react-modal');
const ReactLoader = require('react-loader');

const stylesheet = require('./app.scss');

const authToken = '3b502b3f-b1ff-4128-bd99-626e74836d9c';

console.log('stylesheet is ', stylesheet);

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activeMovieData: [],
      comparingMovieData: [],
      modalIsOpen: false,
      movieData: [],
      moviePosterData: [{"Id":3,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg"},{"Id":10,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTc0ZDk1YWItZDZiNi00NTdmLWE0MDctNTVhYTRhMDBmZjNjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"},{"Id":17,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTE1MTBiYzYtMDI1OC00ZTUxLTg0ZWQtZjdjMzA0OTM1NGMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"},{"Id":24,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"},{"Id":31,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg"},{"Id":38,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg"},{"Id":45,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@._V1_.jpg"},{"Id":52,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY1000_CR0,0,656,1000_AL_.jpg"},{"Id":59,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_.jpg"},{"Id":66,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzc1YmU2ZjEtYWIwMC00ZjM3LWI0NTctMDVlNGQ3YmYwMzE5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY999_CR0,0,704,999_AL_.jpg"},{"Id":73,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_.jpg"},{"Id":80,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,644,1000_AL_.jpg"},{"Id":87,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,757,1000_AL_.jpg"},{"Id":94,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"},{"Id":101,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,672,1000_AL_.jpg"},{"Id":108,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_.jpg"},{"Id":115,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,669,1000_AL_.jpg"},{"Id":122,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMDMyMmQ5YzgtYWMxOC00OTU0LWIwZjEtZWUwYTY5MjVkZjhhXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,723,1000_AL_.jpg"},{"Id":129,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BZGEzZTExMDEtNjg4OC00NjQxLTk5NTUtNjRkNjA3MmYwZjg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,633,1000_AL_.jpg"},{"Id":136,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_SY1000_CR0,0,712,1000_AL_.jpg"},{"Id":143,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_.jpg"},{"Id":150,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTU3MTE4NF5BMl5BanBnXkFtZTcwOTgxNDM2Mg@@._V1_.jpg"},{"Id":157,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg"},{"Id":164,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg"},{"Id":171,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzMzY5NDc4M15BMl5BanBnXkFtZTcwMzc4NjIxNw@@._V1_SY1000_CR0,0,669,1000_AL_.jpg"},{"Id":178,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX670_AL_.jpg"},{"Id":185,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjdjMGU3MGYtN2Y5ZC00MTE4LWE4YWQtMTBhMjc3MTk0ZDUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX664_AL_.jpg"},{"Id":192,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjFiOTlmMzgtOGZlYi00NjY0LThmMzEtNmQ0OTgxNGViOTZmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,658,1000_AL_.jpg"},{"Id":199,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg"},{"Id":206,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwNDYyNTk2N15BMl5BanBnXkFtZTgwMjQ0OTMyMjE@._V1_.jpg"},{"Id":213,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,679,1000_AL_.jpg"},{"Id":220,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg"},{"Id":227,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_.jpg"},{"Id":234,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY1000_CR0,0,664,1000_AL_.jpg"},{"Id":241,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NDQ5MDMzOV5BMl5BanBnXkFtZTgwODY2MjcyMjE@._V1_.jpg"},{"Id":248,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjQwMDczMmUtYjgzYy00NGRmLWFmMWEtNWVjMjgwNWVlMjlkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},{"Id":255,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,683,1000_AL_.jpg"},{"Id":262,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":269,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTkxNjI5OF5BMl5BanBnXkFtZTYwMjI2MjA5._V1_.jpg"},{"Id":276,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_.jpg"},{"Id":283,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BZDM2YjYwYWMtMWZlNi00ZDQxLWExMDctMDAzNzQ0OTkzZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg"},{"Id":290,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg"},{"Id":297,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,724,1000_AL_.jpg"},{"Id":304,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,681,1000_AL_.jpg"},{"Id":311,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg"},{"Id":318,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"},{"Id":325,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BYWNjNjZjYmMtOTRjOC00ZGIwLWI2YzEtMjkxNTAzODkzZDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg"},{"Id":332,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,643,1000_AL_.jpg"},{"Id":339,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3NDYzODAwNV5BMl5BanBnXkFtZTgwODg1MTczMTE@._V1_.jpg"},{"Id":346,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTFiM2RlOGUtYjExYy00YjFmLWFjYzgtM2YwNDU1NmEyMzRlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg"},{"Id":353,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":360,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg"},{"Id":367,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDNhN2IxZWItNGEwYS00ZDNhLThiM2UtODU3NWJlZjBkYjQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,681,1000_AL_.jpg"},{"Id":374,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY1000_CR0,0,673,1000_AL_.jpg"},{"Id":381,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDUzNjYwNDYyNl5BMl5BanBnXkFtZTcwNjU3ODQ0MQ@@._V1_.jpg"},{"Id":388,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5NDAwMDgzOV5BMl5BanBnXkFtZTgwNDI2MjA0MjE@._V1_.jpg"},{"Id":395,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMTgzOTEwOF5BMl5BanBnXkFtZTgwNTUxNjcxMTE@._V1_.jpg"},{"Id":402,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SY1000_CR0,0,682,1000_AL_.jpg"},{"Id":409,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":416,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY1000_CR0,0,653,1000_AL_.jpg"},{"Id":423,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg"},{"Id":430,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTk3NDY1NV5BMl5BanBnXkFtZTcwNDk0ODg3MQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"},{"Id":437,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2OTQzMjcxNF5BMl5BanBnXkFtZTgwMzc2Njk3MTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":444,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxNDY2NjMwNF5BMl5BanBnXkFtZTcwNzExMDg0OQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":451,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1MzE4MTE3OF5BMl5BanBnXkFtZTgwOTcyNDM3NTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":458,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxNzMxNzA3OF5BMl5BanBnXkFtZTcwODgyMzU1MQ@@._V1_.jpg"},{"Id":465,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MTM0MTA5MF5BMl5BanBnXkFtZTgwNzEwODEwMzE@._V1_SY1000_CR0,0,681,1000_AL_.jpg"},{"Id":472,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BYWRlYmM1MDUtODcxYi00NDFhLTg3ZmMtMjhkMTU3ZjM4ZmJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},{"Id":479,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTkyNTkwMzkxMl5BMl5BanBnXkFtZTcwMzAwOTE2OQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":486,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1NTM5MDQ3Ml5BMl5BanBnXkFtZTcwMjMzMjgzMQ@@._V1_.jpg"},{"Id":493,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0NjAzMzMxM15BMl5BanBnXkFtZTcwMzEzNzQ0Mg@@._V1_.jpg"},{"Id":500,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3MjkyODA2Nl5BMl5BanBnXkFtZTcwNzQxMTU4Mw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":507,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0MzcxMTAxMl5BMl5BanBnXkFtZTgwODMyMTIxMTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":514,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA5NzQzODUxOTheQTJeQWpwZ15BbWU3MDIwODg1MDc@._V1_SY1000_CR0,0,715,1000_AL_.jpg"},{"Id":521,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjkwNzM5M15BMl5BanBnXkFtZTgwOTIxNDQyNDE@._V1_.jpg"},{"Id":528,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MTA4NDgzNl5BMl5BanBnXkFtZTcwOTAxNTQyMQ@@._V1_SX687_CR0,0,687,999_AL_.jpg"},{"Id":535,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3NjA3MzUwNF5BMl5BanBnXkFtZTYwMDg0NjI3._V1_.jpg"},{"Id":542,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwNjc1NTIzMV5BMl5BanBnXkFtZTcwMzY2MDI2NQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":549,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjc5MDkyODM3NF5BMl5BanBnXkFtZTgwMzAxNjgwMTE@._V1_SY1000_SX675_AL_.jpg"},{"Id":556,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BODg4MDA4MjA5N15BMl5BanBnXkFtZTgwMzI0MTU1NDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":563,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BODg4MDA4MjA5N15BMl5BanBnXkFtZTgwMzI0MTU1NDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"},{"Id":570,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzOTEyMDE3Nl5BMl5BanBnXkFtZTcwNDU5NjU1Mg@@._V1_SY1000_CR0,0,683,1000_AL_.jpg"},{"Id":577,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODE0MjQzOF5BMl5BanBnXkFtZTcwNDUzNjgyMQ@@._V1_.jpg"},{"Id":584,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjM2OTI3NzQyNl5BMl5BanBnXkFtZTcwNjkzNzQ5MQ@@._V1_SY1000_CR0,0,676,1000_AL_.jpg"},{"Id":591,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI3MjM0ODcxOV5BMl5BanBnXkFtZTcwOTg1MjIwNg@@._V1_.jpg"},{"Id":598,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2NTEyNTE3NF5BMl5BanBnXkFtZTcwNjY3NzM0OA@@._V1_SY1000_CR0,0,678,1000_AL_.jpg"},{"Id":605,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwOTY2NzU3NV5BMl5BanBnXkFtZTcwOTU5MDYyMQ@@._V1_.jpg"},{"Id":612,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc4MjkyODg4MF5BMl5BanBnXkFtZTcwNTk1NjM4OA@@._V1_SY1000_SX675_AL_.jpg"},{"Id":619,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0MzQ1ODI0Ml5BMl5BanBnXkFtZTcwNDgyOTE2Mw@@._V1_SY1000_CR0,0,683,1000_AL_.jpg"},{"Id":626,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NjUyODIzNV5BMl5BanBnXkFtZTcwNzA3NDM4OA@@._V1_.jpg"},{"Id":633,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4OTM5ODkwMl5BMl5BanBnXkFtZTcwNjQyMTQyMQ@@._V1_.jpg"},{"Id":640,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0Mjk4NDgxOF5BMl5BanBnXkFtZTcwOTc3MjQ5Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"},{"Id":647,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MjU1NTgxOF5BMl5BanBnXkFtZTcwOTgyNTg0NA@@._V1_SY1000_CR0,0,750,1000_AL_.jpg"},{"Id":654,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ4MTY1NjAzM15BMl5BanBnXkFtZTcwMDA1MTEwNw@@._V1_.jpg"},{"Id":661,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjI0ODAxMDUwNl5BMl5BanBnXkFtZTcwMDU3MjE1MQ@@._V1_.jpg"},{"Id":668,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2NjM3OTc2MDBeQTJeQWpwZ15BbWU3MDA1NjQxNjE@._V1_.jpg"},{"Id":675,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMjg3MTk3M15BMl5BanBnXkFtZTcwMjM4NjgzNA@@._V1_.jpg"},{"Id":682,"imageURL":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDA0MjUxNDI1N15BMl5BanBnXkFtZTYwOTEzMDg5._V1_.jpg"}],
      loaded: false,
      movieSelectionMode: false,
      selectedMovies: [],
      selectMoviesErrorMessage: false
    }
  }

  activateMovieSelectionMode() {
    this.setState({movieSelectionMode: !this.state.movieSelectionMode});
    this.setState({selectedMovies: []});
    this.setState({selectMoviesErrorMessage: false});
  }

  selectMovie(movieId) {
    let arrayIndex = this.state.selectedMovies.indexOf(movieId);
    if(arrayIndex !== -1){
      let slicedArr = [
        ...this.state.selectedMovies.slice(0, arrayIndex),
        ...this.state.selectedMovies.slice(arrayIndex + 1)
      ];
      this.setState({selectedMovies: slicedArr});
    }
    else {
      this.setState({selectedMovies: this.state.selectedMovies.concat([movieId])});
    }
  }

  openErrorMessageBanner() {
    this.setState({
      selectMoviesErrorMessage: true
    });
  }

  closeErrorMessageBanner() {
    this.setState({
      selectMoviesErrorMessage: false
    });
  }

  openCompareModal() {
    let apiRoute = 'https://interview.zocdoc.com/api/1/FEE/MovieDetails?authToken=' + authToken;
    for(let i=0; i<this.state.selectedMovies.length; i++){
      apiRoute = apiRoute + '&movieIds=' + this.state.selectedMovies[i];
    }

    fetch(apiRoute)
      .then((response) => {
        if(response.ok) {
          response.json().then((data) => {
            for(let i = 0; i < data.length; i++) {
              let moviePoster = this.state.moviePosterData.find(function (d) {
                return d.Id === data[i].Id;
              });

              data[i].movieImage = moviePoster.imageURL;
            }

            this.setState({
              comparingMovieData: data,
              modalIsOpen: true
            });//don't open the modal until we have the data
          });
        }
        else {
          console.log('Network response was not ok.');
        }
      })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
  }

  openFullMovieInfoModal(movieId) {
    const apiRoute = 'https://interview.zocdoc.com/api/1/FEE/MovieDetails?authToken=' + authToken + '&movieIds=' + movieId;
    fetch(apiRoute)
      .then((response) => {
        if(response.ok) {
          response.json().then((data) => {
            let moviePoster = this.state.moviePosterData.find(function(d){
              return d.Id === data[0].Id;
            });

            data[0].movieImage = moviePoster.imageURL;

            this.setState({
              activeMovieData: data[0],
              modalIsOpen: true
            });//don't open the modal until we have the data
          });
        }
        else {
          console.log('Network response was not ok.');
          this.setState({
            activeMovieData: [],
            modalIsOpen: false
          });//don't open the modal until we have the data
        }
      })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        this.setState({
          activeMovieData: [],
          modalIsOpen: false
        });//don't open the modal until we have the data
      });
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  fetchData() {
    const apiRoute = 'https://interview.zocdoc.com/api/1/FEE/AllMovies?authToken=' + authToken;
    fetch(apiRoute)
      .then((response) => {
        if(response.ok) {
          response.json().then((data) => {
            //combine data with my data
            let sortedData = data.sort(function(a, b){
              return a.Id - b.Id;
            });

           var i = -1;
            while ((i = i+1)<sortedData.length)  {
              for (var l in this.state.moviePosterData[i]) {
                if (!(l in sortedData[i] )) {
                  sortedData[i][l] = this.state.moviePosterData[i][l];
                }
              }
            }

            sortedData = sortedData.sort(function(a, b){
              return a.Rank - b.Rank;
            });

            this.setState({
              movieData: sortedData,
              loaded: true
            });
          });
        }
        else {
          console.log('Network response was not ok.');
        }
      })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
  }

  render(){
    return (
      <div className={stylesheet.appContainer}>
        <Header
          movieSelectionMode={this.state.movieSelectionMode}
          activateMovieSelectionMode={(e) => this.activateMovieSelectionMode(e)}
          selectedMovieCount={this.state.selectedMovies.length}
          openModal={(e) => this.openCompareModal(e)}
          closeModal={(e) => this.closeModal(e)}
        />
        {this.state.movieSelectionMode && this.state.selectMoviesErrorMessage &&
          <ErrorMessageBanner hidden={this.state.selectMoviesErrorMessage} />
        }
        <ReactLoader color="#fff" scale={2.00} loaded={this.state.loaded}>
          <MovieCardsContainer
            movieData={this.state.movieData}
            movieSelectionMode={this.state.movieSelectionMode}
            selectedMovieCount={this.state.selectedMovies.length}
            selectMovie={(e) => this.selectMovie(e)}
            openErrorMessageBanner={(e) => this.openErrorMessageBanner(e)}
            closeErrorMessageBanner={(e) => this.closeErrorMessageBanner(e)}
            openModal={(e) => this.openFullMovieInfoModal(e)}
            closeModal={(e) => this.closeModal(e)}
          />
        </ReactLoader>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={(e) => this.closeModal(e)}
          contentLabel="Example Modal"
          className={stylesheet.modalContainer}
          overlayClassName={stylesheet.modalOverlay}
        >
          {!this.state.movieSelectionMode &&
          <div>
            <FullMovieInfo
              activeMovieData={this.state.activeMovieData}
            />
          </div>
          }
          {this.state.movieSelectionMode &&

            <CompareMovies
              comparingMovieData={this.state.comparingMovieData}
            />

          }
        </ReactModal>
      </div>
    );
  }

  componentDidMount() {
    this.fetchData();
  }
}

module.exports = App;
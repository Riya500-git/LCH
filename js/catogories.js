let topRated = [
  {
    theme: "TRANSFORMERS",
    source: "images/movie7.jpg",
    stars: "",
    rating: 12,
  },
  {
    theme: "MAGNETO",
    source: "images/movie8.jpg",
    stars: "",
    rating: 12,
  },
  {
    theme: "KUNG FU PANDA",
    source: "images/movie9.jpg",
    stars: "",
    rating: 12,
  },
  {
    theme: "EAGLE EYE",
    source: "images/movie10.jpg",
    stars: "",
    rating: 12,
  },
  {
    theme: "NARNIA",
    source: "images/movie11.jpg",
    stars: "",
    rating: 12,
  },
  {
    theme: "ANGELS &amp; DEMONS",
    source: "images/movie12.jpg",
    stars: "",
    rating: 12,
  },
];
let mostCommented = [
  {
    theme: "HOUSE",
    source: "images/movie13.jpg",
    stars: "",
    rating: 12,
  },
  {
    theme: "VACANCY",
    source: "images/movie14.jpg",
    stars: "",
    rating: 12,
  },
  {
    theme: "MIRRORS",
    source: "images/movie15.jpg",
    stars: "",
    rating: 12,
  },
  {
    theme: "THE KINGDOM",
    source: "images/movie16.jpg",
    stars: "",
    rating: 12,
  },
  {
    theme: "MOTIVES",
    source: "images/movie17.jpg",
    stars: "",
    rating: 12,
  },
  {
    theme: "THE PRESTIGE",
    source: "images/movie18.jpg",
    stars: "",
    rating: 12,
  },
];

let someFunction = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `
<div class="movie ${arr.length - 1 === i ? "last" : ""}">
	<div class="movie-image"> <span class="play"><span class="name">${
    arr[i].theme
  }</span></span> <a href="#"><img src="${arr[i].source}" alt="" /></a> </div>
	<div class="rating">
		<p>RATING</p>
		<div class="stars">
			<div class="stars-in">${arr[i].stars}</div>
		</div>
		<span class="comments">${arr[i].rating}</span>
	</div>
</div>
`;
  }
  return str;
};

let top_rated = someFunction(topRated);
let most_commented = someFunction(mostCommented);
top_rated += '<div class="cl">&nbsp;</div>';
console.log(top_rated, most_commented);

let sub1 = document.createElement("div");
let sub2 = document.createElement("div");
sub1.innerHTML = top_rated;
sub2.innerHTML = most_commented;

document.getElementById("top-rated").appendChild(sub1);
document.getElementById("most-commented").appendChild(sub2);

//"Add Quote to favorite" message
function favoriteAlert() {
    alert("Quote added to your favorite!");
    document.getElementById("fav-button");
  }
  
  //Map  
  let map;
  let longitude = 0; 
  let latitude = 0;
  
  function initMap(longitude, latitude, infoWindow) {
  
    //"options" used to center and define zoom on map creation
    var options = {
      center: {
        lat: latitude,
        lng: longitude
      },
      zoom: 4.5,
    }
  
    var map = new google.maps.Map(document.getElementById("map"), options);
  
   //will to create multiple markers close to each other when needed
    if (marker) {
      marker.setMap(null);
      markers = [];
      marker.setMap(map);
    }
  
    //adding a new marker to the map
    var marker = new google.maps.Marker({
      position: {
        lat: latitude,
        lng: longitude
      },
      map: map
    });
  
    // creating an info window
    var infoWindow = new google.maps.InfoWindow({
      content: '<h1>' + infoWindow + '</h1>'     
    });
  
    // adding listener to open the infoWindow on marker click
    marker.addListener("click", function(){
      infoWindow.open(map, marker);
    });
  
    // adding marker function
    function addMarker(coords) {
      var marker = new google.maps.Marker({
        position: coords,
        map:map,
      });
    }
  }
  
  // Quotes 
  (function() {
    const quotes = [
      {
        quote:
          "“ What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others that will determine the significance of the life we lead.”",
        author: "Nelson Mandela",
        longitude: 18.423300,
        latitude: -33.918861,
        infoWindow: '<h1>Nelson Mandela 1918-2013</h1>'+
        '<p><b>Rolihlahla Mandela</b>, also referred to as <b>Madiba</b>, was a social rights activist, politician and philanthropist who became South Africa’s first Black president from 1994 to 1999. After becoming involved in the anti-apartheid movement in his 20s, Mandela joined the African National Congress in 1942. For 20 years, he directed a campaign of peaceful, nonviolent defiance against the South African government and its racist policies.</p>'+
        '<p>For more visit :<a href="https://en.wikipedia.org/wiki/Nelson_Mandela" target="_blank">'+
        ' en.wikipedia.org/wiki/Nelson_Mandela</a> '
      },
      {
        quote:
          "“ Tell me and I forget. Teach me and I remember. Involve me and I learn.”",
        author: "Benjamin Franklin",
        longitude:  -71.0597732,
        latitude: 42.3584308,
        infoWindow: '<h1>Benjamin Franklin 1706-1790</h1>'+
        '<p><b>Benjamin Franklin</b> was a <b>Founding Father</b> and a polymath, inventor, scientist, printer, politician, freemason and diplomat. Franklin helped to draft the Declaration of Independence and the U.S. Constitution, and he negotiated the 1783 Treaty of Paris ending the Revolutionary War. His scientific pursuits included investigations into electricity, mathematics and mapmaking. A writer known for his wit and wisdom, Franklin also published Poor Richard’s Almanack, invented bifocal glasses and organized the first successful American lending library. </p>'+
        '<p>For more visit :<a href="https://en.wikipedia.org/wiki/Benjamin_Franklin" target="_blank">'+
        ' en.wikipedia.org/wiki/Benjamin_Franklin</a> '
      },
      {
        quote:
          "“ The only impossible journey is the one you never begin.”",
        author: "Tony Robbins",
        longitude: -80.0447635,
        latitude: 26.5692364,
        infoWindow: '<h1>Tony Robbins 1960-today</h1>'+
        '<p><b>Anthony Jay Robbins</b> is an American author, coach, motivational speaker, and philanthropist. Robbins is known for his infomercials, seminars, and self-help books including the books Unlimited Power and Awaken the Giant Within. His seminars are organized through Robbins Research International.</p>'+
        '<p>For more visit :<a href="https://en.wikipedia.org/wiki/Tony_Robbins" target="_blank">'+
        ' en.wikipedia.org/wiki/Tony_Robbins</a> '
      },
      {
        quote: "“ In three words I can sum up everything I've learned about life: it goes on.”",
        author: "Robert Frost",
        longitude: -70.7661635,
        latitude: 43.0181451,
        infoWindow: '<h1>Robert Frost 1874-1963</h1>'+
        '<p><b>Robert Lee Frost </b> was an American poet. His work was initially published in England before it was published in America. Known for his realistic depictions of rural life and his command of American colloquial speech, Frost frequently wrote about settings from rural life in New England in the early twentieth century, using them to examine complex social and philosophical themes.</p>'+
        '<p>For more visit :<a href="https://en.wikipedia.org/wiki/Robert_Frost" target="_blank">'+
        ' en.wikipedia.org/wiki/Robert_Frost</a> '
      },
      {
        quote:
          "“ The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.”",
        author: "Barack Obama",
        longitude: -77.0524773,
        latitude: 38.9167781,
        infoWindow: '<h1>Barack Obama 1961-today</h1>'+
        '<p><b>Barack Hussein Obama II</b> was the <b>44th president of the United States</b> and the first African American commander-in-chief. He served two terms, in 2008 and 2012. The son of parents from Kenya and Kansas, Obama was born and raised in Hawaii. He graduated from Columbia University and Harvard Law School, where he was president of the Harvard Law Review. After serving on the Illinois State Senate, he was elected a U.S. senator representing Illinois in 2004.</p>'+
        '<p>For more visit :<a href="https://en.wikipedia.org/wiki/Barack_Obama" target="_blank">'+
        ' en.wikipedia.org/wiki/Barack_Obama</a> '
      },
      {
        quote:
          "“ I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        author: "Maya Angelou",
        longitude: -90.1978889,
        latitude: 38.6272733,
        infoWindow: '<h1>Maya Angelou 1928-2014</h1>'+
        '<p><b>Born Marguerite Annie Johnson</b>, Angelou was an acclaimed American poet, storyteller, activist, and autobiographer. Angelou had a broad career as a singer, dancer, actress, composer, and <b>Hollywood’s first female black director</b>, but became most famous as a writer, editor, essayist, playwright, and poet. As a civil rights activist, Angelou <b>worked for Dr. Martin Luther King Jr. and Malcolm X</b>. She was also an educator and served as the Reynolds professor of American Studies at Wake Forest University. </p>'+
        '<p>For more visit :<a href="https://en.wikipedia.org/wiki/Maya_Angelou" target="_blank">'+
        ' en.wikipedia.org/wiki/Maya_Angelou</a> '
      }
    ];
  
  const button = document.querySelector("#rand-button");
  const text =  document.querySelector("#quote-content");      
  const author = document.querySelector("#quote-author");
  
  
   //adding listener to generate new random quote//
     let prevRandom= -1;
     button.addEventListener("click", changeQuote);
     function changeQuote() {
      random = Math.floor(Math.random() * quotes.length);
      console.log(random);
        // check between previous random number and new one
      if (prevRandom == random)
       //call the function again to have a new random number if same is repeated in a row
      {changeQuote();
      } else {
        prevRandom = random;
        //setting quotes
        text.textContent = quotes[random].quote;
        author.textContent = quotes[random].author;
  
        longitude = quotes[random].longitude;
        latitude = quotes[random].latitude;
        infoWindow = quotes[random].infoWindow;
  
        // Generating the map
        initMap(longitude, latitude, infoWindow);
      }    
    }
  })();
  
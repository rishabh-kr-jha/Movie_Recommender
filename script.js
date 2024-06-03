// Define the bollywoodActors object
const bollywoodActors = {
    "Govinda": ["Coolie No. 1", "Hero No. 1", "Partner", "Bade Miyan Chote Miyan", "Haseena Maan Jaayegi", "Dulhe Raja", "Raja Babu", "Jodi No. 1", "Aankhen", "Deewana Mastana", "Sajan Chale Sasural", "Andaz Apna Apna", "Shola Aur Shabnam", "Raja Hindustani", "Anari No.1", "Bhagam Bhag", "Joru Ka Ghulam", "Kyonki Main Jhuth Nahin Bolta", "Do Knot Disturb", "Saajan Chale Sasural", "Jis Desh Mein Ganga Rehta Hai", "Maharaja", "Beti No. 1", "Dulhan Hum Le Jayenge", "Hatya", "Daraar", "Rajaji", "Chalo Ishq Ladaaye", "Kunwara"],
    "Shah Rukh Khan": ["Dilwale Dulhania Le Jayenge", "Devdas", "Chennai Express", "My Name is Khan", "Raees"],
    "Salman Khan": ["Bajrangi Bhaijaan", "Sultan", "Dabangg", "Tiger Zinda Hai", "Bharat"],
    "Aamir Khan": ["3 Idiots", "Dangal", "PK", "Lagaan", "Taare Zameen Par", "Rang De Basanti", "Ghajini", "Dil Chahta Hai", "Andaz Apna Apna", "Secret Superstar", "Dhoom 3", "Fanaa", "Talaash: The Answer Lies Within", "Jo Jeeta Wohi Sikandar", "Raja Hindustani", "Mangal Pandey: The Rising", "Sarfarosh", "Dil", "Qayamat Se Qayamat Tak", "Rangeela", "Hum Hain Rahi Pyar Ke", "Dil Hai Ke Manta Nahin", "Ishq", "Raja Hindustani", "Dhobi Ghat", "Mela", "Mann", "Ghulam", "Love Love Love", "Daulat Ki Jung"],
    "Akshay Kumar": ["Hera Pheri", "Toilet: Ek Prem Katha", "Rowdy Rathore", "Kesari", "Mission Mangal"],
    "Ranbir Kapoor": ["Barfi!", "Sanju", "Yeh Jawaani Hai Deewani", "Rockstar", "Ae Dil Hai Mushkil"],
    "Ajay Devgn": ["Singham", "Golmaal", "Tanhaji: The Unsung Warrior", "Drishyam", "Raid"],
    "Hrithik Roshan": ["Kaho Naa... Pyaar Hai", "Dhoom 2", "Super 30", "War", "Krrish"],
    "Varun Dhawan": ["Badlapur", "October", "Judwaa 2", "Humpty Sharma Ki Dulhania", "Student of the Year"],
    "Ranveer Singh": ["Padmaavat", "Gully Boy", "Bajirao Mastani", "Simmba", "Dil Dhadakne Do"],
    "Saif Ali Khan": ["Omkara", "Tanhaji: The Unsung Warrior", "Dil Chahta Hai", "Hum Tum", "Kal Ho Naa Ho"],
    "Shahid Kapoor": ["Kabir Singh", "Haider", "Udta Punjab", "Jab We Met", "Padmaavat"],
    "Ayushmann Khurrana": ["Andhadhun", "Article 15", "Vicky Donor", "Badhaai Ho", "Shubh Mangal Saavdhan"],
    "Akshaye Khanna": ["Dil Chahta Hai", "Taal", "Border", "Race", "Gandhi, My Father"],
    "Kartik Aaryan": ["Sonu Ke Titu Ki Sweety", "Pyaar Ka Punchnama", "Luka Chuppi", "Pati Patni Aur Woh", "Love Aaj Kal"],
    "John Abraham": ["Dhoom", "Batla House", "Sathyameva Jayate", "Parmanu: The Story of Pokhran", "Force"],
    "Emraan Hashmi": ["Once Upon a Time in Mumbaai", "The Dirty Picture", "Jannat", "Murder", "Gangster"],
    "Vicky Kaushal": ["Uri: The Surgical Strike", "Raazi", "Masaan", "Sanju", "Manmarziyaan"],
    "Nawazuddin Siddiqui": ["Gangs of Wasseypur", "Manjhi: The Mountain Man", "The Lunchbox", "Raman Raghav 2.0", "Badlapur"],
    "Sushant Singh Rajput": ["MS Dhoni: The Untold Story", "Kai Po Che!", "Chhichhore", "Sonchiriya", "Detective Byomkesh Bakshy!"],
    "Rajkummar Rao": ["Stree", "Newton", "Bareilly Ki Barfi", "Shahid", "Trapped"],
    "Deepika Padukone": ["Padmaavat", "Chennai Express", "Bajirao Mastani", "Cocktail", "Yeh Jawaani Hai Deewani"],
    "Priyanka Chopra": ["Bajirao Mastani", "Mary Kom", "Dil Dhadakne Do", "Barfi!", "Fashion"],
    "Kareena Kapoor Khan": ["Jab We Met", "3 Idiots", "Kabhi Khushi Kabhie Gham", "Veere Di Wedding", "Udta Punjab"],
    "Alia Bhatt": ["Gully Boy", "Raazi", "Highway", "Dear Zindagi", "Student of the Year"],
    "Anushka Sharma": ["PK", "Sultan", "Rab Ne Bana Di Jodi", "Jab Tak Hai Jaan", "Ae Dil Hai Mushkil"],
    "Katrina Kaif": ["Tiger Zinda Hai", "Ek Tha Tiger", "Jab Tak Hai Jaan", "Zero", "New York"],
    "Deepika Padukone": ["Padmaavat", "Chennai Express", "Bajirao Mastani", "Cocktail", "Yeh Jawaani Hai Deewani"],
    "Kangana Ranaut": ["Queen", "Tanu Weds Manu", "Fashion", "Manikarnika: The Queen of Jhansi", "Tanu Weds Manu Returns"],
    "Vidya Balan": ["Kahaani", "The Dirty Picture", "Paa", "Tumhari Sulu", "Bhool Bhulaiyaa"],
    "Madhuri Dixit": ["Devdas", "Dil To Pagal Hai", "Hum Aapke Hain Koun..!", "Mrityudand", "Tezaab"],
    "Tabu": ["Andhadhun", "Haider", "Chandni Bar", "Maqbool", "Cheeni Kum"],
    "Anil Kapoor": ["Mr. India", "Slumdog Millionaire", "Race", "Nayak: The Real Hero", "Tezaab"],
    "Aishwarya Rai Bachchan": ["Devdas", "Hum Dil De Chuke Sanam", "Jodhaa Akbar", "Taal", "Guru"],
    "Rani Mukerji": ["Black", "Mardaani", "Hum Tum", "Kuch Kuch Hota Hai", "Saathiya"],
    "Rishi Kapoor": ["Bobby", "Kapoor & Sons", "Amar Akbar Anthony", "Agneepath", "Do Dooni Chaar"],
    "Farhan Akhtar": ["Bhaag Milkha Bhaag", "Rock On!!", "Zindagi Na Milegi Dobara", "Dil Dhadakne Do", "Don"],
    "Abhishek Bachchan": ["Guru", "Dhoom", "Bunty Aur Babli", "Yuva", "Happy New Year"],
    "Sanjay Dutt": ["Munna Bhai M.B.B.S.", "Saajan", "Vaastav: The Reality", "Khalnayak", "Agneepath"],
    "Madhavan": ["3 Idiots", "Rang De Basanti", "Rehna hai tere dil me"]
}



// // Add event listener to search button
// document.getElementById('search-button').addEventListener('click', () => {
//     const searchQuery = document.getElementById('search-input').value.toLowerCase(); // Convert search query to lowercase
//     const movieResults = document.getElementById('movie-results');

//     movieResults.innerHTML = ''; // Clear previous results

//     if (searchQuery.trim() === '') {
//         movieResults.innerHTML = '<p>Please enter a search query.</p>';
//         return;
//     }

//     // Convert all actor names in bollywoodActors object to lowercase
//     const bollywoodActorsLowercase = {};
//     for (const actor in bollywoodActors) {
//         bollywoodActorsLowercase[actor.toLowerCase()] = bollywoodActors[actor];
//     }

//     const actor = searchQuery.trim().toLowerCase(); // Convert search query to lowercase
    
//     if (!bollywoodActorsLowercase.hasOwnProperty(actor)) {
//         movieResults.innerHTML = `<p>No movies found for ${searchQuery}.</p>`; // Display original search query
//         return;
//     }

//     const movies = bollywoodActorsLowercase[actor];

//     movies.forEach(movie => {
//         const movieDiv = document.createElement('div');
//         movieDiv.classList.add('movie');
//         movieDiv.innerHTML = `
//             <h2>${movie}</h2>
//         `;
//         movieResults.appendChild(movieDiv);
//     });
// });







// Add event listener to search button
document.getElementById('search-button').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-input').value.toLowerCase(); // Convert search query to lowercase
    const movieResults = document.getElementById('movie-results');

    movieResults.innerHTML = ''; // Clear previous results

    if (searchQuery.trim() === '') {
        movieResults.innerHTML = '<p>Please enter a search query.</p>';
        return;
    }

    // Convert all actor names in bollywoodActors object to lowercase
    const bollywoodActorsLowercase = {};
    for (const actor in bollywoodActors) {
        bollywoodActorsLowercase[actor.toLowerCase()] = bollywoodActors[actor];
    }

    const actor = searchQuery.trim().toLowerCase(); // Convert search query to lowercase
    
    if (!bollywoodActorsLowercase.hasOwnProperty(actor)) {
        movieResults.innerHTML = `<p>No movies found for ${searchQuery}.</p>`; // Display original search query
        return;
    }

    const movies = bollywoodActorsLowercase[actor];
    
    // Shuffle the movies array
    const shuffledMovies = shuffleArray(movies);

    // Display only the first three shuffled movies
    for (let i = 0; i < 3 && i < shuffledMovies.length; i++) {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <h2>${shuffledMovies[i]}</h2>
        `;
        movieResults.appendChild(movieDiv);
    }
});

// Function to shuffle an array
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}
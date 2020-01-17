// Class for the town elements object. The park and street elements will extend this class
class TownElements {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
    
    // Method to get the year built
    getYearBuilt () {
        return this.buildYear;
    }
    
    // Method to get the name
    getName () {
        return this.name;
    }
}

// Class for the park elements object. This will extend the townElements class
class Park extends TownElements {
    constructor (name, buildYear, numOfTrees, parkSize) {
        super (name, buildYear);

        this.numOfTrees = numOfTrees;
        this.parkSize = parkSize;
    }

    // Method to calculate the tree destiny
    getTreeDensity () {
        return Number(this.numOfTrees) / Number(this.parkSize);
    }

    // Method to see if the park has more than 1000 trees or not
    getMoreThan1000TreesOrNot () {
        return Number(this.numOfTrees) >= 1000;
    }

    // Method to get the age 
    getAge () {
        return 2020 - Number(this.buildYear);
    }
}

// Class for the street elements object. This will extent the townElements class
class Street extends TownElements {
    constructor (name, buildYear, size = 'normal', length) {
        super (name, buildYear);

        this.size = size
        this.length = length;
    }
    
    // Method to get the length
    getLength () {
        return this.length;
    }
    
    // Method to get the size
    getSize () {
        return this.size;
    }
}

// Class for the small town object.
class Town {
    constructor (name) {
        this.name = name;
        this.parks = [];
        this.streets = [];
    }
    
    // Method to add parks
    addPark (name, buildYear, numOfTree, parkSize) {
        // Create a new park object and push it into the array of parks
        this.parks.push(new Park(name, buildYear, numOfTree, parkSize));
    }
    
    // Method to add streets
    addStreet (name, buildYear, size, length) {
        // Create a new street object and push into the array of streets
        this.streets.push(new Street(name, buildYear, size, length));
    }
    
    // Method to get the number of parks
    getNumOfParks () {
        return this.parks.length;
    }
    
    // Method to get the numebr of streets
    getNumeOfStreets () {
        return this.streets.length;
    }
    
    // Method to get the number of parks that has more than 1000 trees
    getNumOfParksMoreThan1000Trees () {
        // Variable to hold the current number of parks that has more than 1000 trees
        var numOfParksHasMoreThan1000Trees = 0;
        
        for (var i = 0; i < this.parks.length; i++) {
            if (this.parks[i].getMoreThan1000TreesOrNot()) {
                numOfParksHasMoreThan1000Trees += 1;
            }
        }
        
        // Return the number of parks that has more than 1000 trees
        return numOfParksHasMoreThan1000Trees;
    }
    
    // Method to get the average length of towns street
    getAverageStreetLength () {    
        // Variable to hold the current sum number of street's length
        var totalLength = 0;
        
        for (var i = 0; i < this.streets.length; i++) {
            totalLength += Number(this.streets[i].getLength());
        }
        
        // Return the average length of the street
        return totalLength / (this.streets.length);
    }

    // Method to calculate the average age of all parks
    getAverageParkAge () {
        // Variable to hold the current sum of all parks age
        var totalAge = 0;

        for (var i = 0; i < this.parks.length; i++) {
            totalAge += Number(this.parks[i].getAge());
        }

        // Return the average age of all parks
        return totalAge / (this.parks.length);
    }

    // Method to get the total length of all streets
    getTotalStreetLength () {
        // Variable to hold the current sum of total streets length
        var totalLength = 0;

        for (var i = 0; i < this.streets.length; i++) {
            totalLength += Number(this.streets[i].getLength());
        }
        
        return totalLength;
    }

    // Method to get the array of parks
    getArrayOfParks () {
        return this.parks;
    }

    // Method to get the array of streets
    getArrayOfStreets () {
        return this.streets;
    }
}

var newTown = new Town('Youngstown');

// Add some parks
newTown.addPark('Mill Creeek Park', '1968', 100, 1000);
newTown.addPark('Wick Park', '1976', 999, 120);
newTown.addPark('Downtown Park', '1996', 1200, 1234);
newTown.addPark('YSU Park', '2002', 100, 2000);

// Add some streets
newTown.addStreet('Madison', '1993', 'normal', 1000);
newTown.addStreet('Wick', '2003', 'big', 1200);
newTown.addStreet('Boardman', '1998', 'big', 1900);
newTown.addStreet('Fifth', '1989', 'big', 2000);

// Print out the report
console.log('-------------PARKS REPORT-------------');
console.log('Our ' + newTown.getNumOfParks() + " parks has an average age of " + newTown.getAverageParkAge());
for (var i = 0; i < newTown.getNumOfParks(); i++) {
    console.log(newTown.getArrayOfParks()[i].getName() + " has a tree density of " + newTown.getArrayOfParks()[i].getTreeDensity() + " trees per square km");
}

console.log('-------------STREETS REPORT-------------');
console.log('Our ' + newTown.getNumeOfStreets() + " streets have a total length of " + newTown.getTotalStreetLength() + " with an average length of " + newTown.getAverageStreetLength());
for (var i = 0; i < newTown.getNumeOfStreets(); i++) {
    console.log(newTown.getArrayOfStreets()[i].getName() + " built in " + newTown.getArrayOfStreets()[i].getYearBuilt() + " is a " + newTown.getArrayOfStreets()[i].getSize());
}
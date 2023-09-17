Dim numberOfAdultsPassengers, numberOfChildrenPassengers, numberOfInSeatInfantsPassengers, numberOfOnLapInfantsPassengers, tripClass,tripType

numberOfAdultsPassengers = 3
numberOfChildrenPassengers = 3
numberOfInSeatInfantsPassengers = 1
numberOfOnLapInfantsPassengers = 1
tripClass = "Economy"
tripType = "Round trip"

Browser("Google Flights").Page("Google Flights").WebElement("Trip Type Select Field").Click

selectTripType tripType

wait 2

Browser("Google Flights").Page("Google Flights").WebElement("Passengers Numbers Select Field").Click

selectNumberOfPassengers "Adults", "", numberOfAdultsPassengers

selectNumberOfPassengers "Children", "", numberOfChildrenPassengers

selectNumberOfPassengers "Infants", "In seat", numberOfInSeatInfantsPassengers

selectNumberOfPassengers "Infants", "On lap", numberOfOnLapInfantsPassengers

wait 2

Browser("Google Flights").Page("Google Flights").WebElement("Trip Class Select Field").Click

selectTripClass tripClass 

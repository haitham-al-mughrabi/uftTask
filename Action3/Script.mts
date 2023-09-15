Browser("Google Flights").Page("Google Flights").WebElement("Trip Type Select Field").Click

selectTripType "Round trip"

wait 2

Browser("Google Flights").Page("Google Flights").WebElement("Passengers Numbers Select Field").Click

selectNumberOfPassengers "Adults", "", 3

selectNumberOfPassengers "Children", "", 3

selectNumberOfPassengers "Infants", "In seat", 1

selectNumberOfPassengers "Infants", "On lap", 1

wait 2

Browser("Google Flights").Page("Google Flights").WebElement("Trip Class Select Field").Click

selectTripClass "First"

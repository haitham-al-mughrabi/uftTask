Browser("Google Flights").Page("Google Flights").WebElement("Dispatcher City Airport Selection Field").Click
wait 2
Browser("Google Flights").Page("Google Flights").WebEdit("Dispatcher City Airport Input Field").Set "John F" @@ script infofile_;_ZIP::ssf2.xml_;_
wait 2
pickCityAirport "John F"

Browser("Google Flights").Page("Google Flights").WebElement("Arrivals City Airport Selection Field").Click
wait 2
Browser("Google Flights").Page("Google Flights").WebEdit("Arrivals City Airport Input Field").Set "Riyadh"
wait 2
pickCityAirport "King Khalid International Airport"


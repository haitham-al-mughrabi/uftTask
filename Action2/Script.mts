Dim depatureCityName, depatureAirportName, arrivalCityName, arrivalAirportName

depatureCityName = "New York"

depatureAirportName = "John F. Kennedy International Airport"

arrivalCityName ="Riyadh"

arrivalAirportName = "King Khalid International Airport"

Browser("Google Flights").Page("Google Flights").WebElement("Dispatcher City Airport Selection Field").Click
wait 2

Browser("Google Flights").Page("Google Flights").WebEdit("Dispatcher City Airport Input Field").Set depatureCityName @@ script infofile_;_ZIP::ssf2.xml_;_
wait 2

pickCityAirport depatureAirportName

Browser("Google Flights").Page("Google Flights").WebElement("Arrivals City Airport Selection Field").Click
wait 2

Browser("Google Flights").Page("Google Flights").WebEdit("Arrivals City Airport Input Field").Set arrivalCityName
wait 2

pickCityAirport arrivalAirportName


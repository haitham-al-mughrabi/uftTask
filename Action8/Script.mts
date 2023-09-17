' Expected Values
Dim depatureCityName, depatureAirportName, arrivalCityName, arrivalAirportName

Dim numberOfAdultsPassengers, numberOfChildrenPassengers, numberOfInSeatInfantsPassengers, numberOfOnLapInfantsPassengers, tripClass,tripType

Dim depatureDateValuesObject, returnDateValuesObject, dateStr, daysToAdd

set depatureDateValuesObject = getCurrentDate() 

dateStr = depatureDateValuesObject("currentDate")

daysToAdd = 30

set returnDateValuesObject = modifyDate(dateStr, daysToAdd)

depatureCityName = "New York"

depatureAirportName = "John F. Kennedy International Airport"

arrivalCityName ="Riyadh"

arrivalAirportName = "King Khalid International Airport"

numberOfAdultsPassengers = 3

numberOfChildrenPassengers = 3

numberOfInSeatInfantsPassengers = 1

numberOfOnLapInfantsPassengers = 1

tripClass = "Economy"

tripType = "Round trip"

' Validation Locators
tripTypeLocator = "(//div[@role='combobox' and @aria-haspopup='listbox'])[1]//span[text()]"
numberOfAdultPassengersLocator = "//label[contains(text(),'Adults')]/following-sibling::div/div/span[2]/span[1]"
numberOfChildrenPassengersLocator = "//label[contains(text(),'Children')]/following-sibling::div/div/span[2]/span[1]"
numberOfInSeatInfantsPassengersLocator = "//label[contains(text(),'Infants') and span[contains(text(),'In seat')]]/following-sibling::div/div/span[2]/span[1]"
numberOfOnLapInfantsPassengersLocator = "//label[contains(text(),'Infants') and span[contains(text(),'On lap')]]/following-sibling::div/div/span[2]/span[1]"
tripClassLocator = "(//li[@role='option' and span/span[contains(text(),'"& tripClass &"')]])[1]"
depatureCityOrAirportLocator = "(//input[contains(@jslog,'click')])[1]/following-sibling::div[1]//span[2]"
arrivalCityOrAirportLocator = "(//input[contains(@jslog,'click')])[2]/following-sibling::div[1]//span[2]"
depatureFlightDateLocator = "(//input[@aria-label='Departure']/ancestor::div[@data-value])[1]"
returnFlightDateLocator = "(//input[@aria-label='Return']/ancestor::div[@data-value])[1]"

' Text locators
textLocator = "text"
dataValueLocator = "data-value"

' Validate Trip Type
ValidateTextValue tripTypeLocator, tripType, textLocator

Browser("Google Flights").Page("Google Flights").WebElement("Passengers Numbers Select Field").Click
ValidateTextValue numberOfAdultPassengersLocator, numberOfAdultsPassengers, textLocator
ValidateTextValue numberOfChildrenPassengersLocator,numberOfChildrenPassengers, textLocator
ValidateTextValue numberOfInSeatInfantsPassengersLocator, numberOfInSeatInfantsPassengers, textLocator
ValidateTextValue numberOfOnLapInfantsPassengersLocator, numberOfOnLapInfantsPassengers, textLocator

' Validate Trip Class
ValidateTextValue tripClassLocator, tripClass, textLocator

' Validate Depature City Or Airport Name
ValidateTextValue depatureCityOrAirportLocator, depatureCityName,textLocator

' Validate Return City Or Airport Name
ValidateTextValue arrivalCityOrAirportLocator, arrivalCityName, textLocator


' Validate Depature Fllight Date
formattedDepatureDay = dayNumberFormatter(depatureDateValuesObject("day"))

formattedDepatureMonth = monthNumberFormatter(depatureDateValuesObject("month"))
                
locatorFormattedDate = depatureDateValuesObject("year") & "-" & formattedDepatureMonth & "-" & formattedDepatureDay

ValidateTextValue depatureFlightDateLocator,locatorFormattedDate, dataValueLocator

' Validate Return Fllight Date
formattedReturnDay = dayNumberFormatter(returnDateValuesObject("day"))

formattedReturnMonth = monthNumberFormatter(returnDateValuesObject("month"))

locatorFormattedDate = returnDateValuesObject("year") & "-" & formattedReturnMonth & "-" & formattedReturnDay

ValidateTextValue returnFlightDateLocator,locatorFormattedDate, dataValueLocator


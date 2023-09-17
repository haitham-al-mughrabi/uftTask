Browser("Google Flights").Page("Google Flights").WebElement("DepatureDate").Click

Dim depatureDateValuesObject, returnDateValuesObject, dateStr, daysToAdd

set depatureDateValuesObject = getCurrentDate() 

dateStr = depatureDateValuesObject("currentDate")

daysToAdd = 30

set returnDateValuesObject = modifyDate(dateStr, daysToAdd)

setDepatureAndReturnDates depatureDateValuesObject, returnDateValuesObject

Browser("Google Flights").Page("Google Flights").WebElement("Click Done").Click


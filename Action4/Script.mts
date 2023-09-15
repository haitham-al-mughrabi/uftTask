Browser("Google Flights").Page("Google Flights").WebElement("DepatureDate").Click
 @@ script infofile_;_ZIP::ssf2.xml_;_
Set currentDateObject = getCurrentDate()

Set incrementedDateObject = modifyDate (currentDateObject("currentDate"),30)

setDepatureAndReturnDates currentDateObject, incrementedDateObject

Browser("Google Flights").Page("Google Flights").WebElement("Click Done").Click


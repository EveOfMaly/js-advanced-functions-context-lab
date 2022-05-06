/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


let createEmployeeRecord = function(row){
   let employeeObject = {
        firstName : row[0],
        familyName : row[1],
        title : row[2],
        payPerHour : row[3],
        timeInEvents : [],
        timeOutEvents : []

    }
    return employeeObject
}


function createEmployeeRecords(employeeData){
    return employeeData.map(row => createEmployeeRecord(row))
}




let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

        
function createTimeInEvent(timeIn){
    let timeInConversion = timeIn.split(" ")
    let date = timeInConversion[0]
    let hour = timeInConversion[1]

    let newTimeInObject = {}
    newTimeInObject.type = "TimeIn"
    newTimeInObject.date = date 
    newTimeInObject.hour = parseInt(hour)

    this.timeInEvents.push(newTimeInObject)

    return this
}



function createTimeOutEvent(timeOut) {
    
    let timeOutConversion = timeOut.split(" ")
    let date = timeOutConversion[0]
    let hour = timeOutConversion[1]

    

    let newTimeOutObject = {}
    newTimeOutObject.type = "TimeOut"
    
    newTimeOutObject.date = date 
    newTimeOutObject.hour = parseInt(hour)
    this.timeOutEvents.push(newTimeOutObject)
    return this
}





function hoursWorkedOnDate(soughtDate){

    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
        debugger
    })
    

    return (outEvent.hour - inEvent.hour) / 100
}


let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}


function findEmployeeByFirstName(employeeRecords, firstName) {

    let employeefirstName = employeeRecords.find(function(e) {
        return e.firstName === firstName
    })
    
    return employeefirstName
}

function calculatePayroll(employeeRecords) {

    
    return employeeRecords.reduce(function(memo, record){
    
        return memo + allWagesFor.call(record)
        
    }, 0)
}


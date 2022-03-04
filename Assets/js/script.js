// moment.js 
// current day of the week + current date
var currentDate = moment().format('dddd') + moment().format("MMM Do YY");
// lists current date as well as time
var currentHour = moment().format('MMMM Do YYYY, h:mm:ss a');

// setting variables by selecting ids from index.html
var nineAm = $('#9am');
var tenAm = $('#10am');
var elevenAm = $('#11am');
var twelvePm = $('#12pm');
var onePm = $('#1pm');
var twoPm = $('#2pm');
var threePm = $('#3pm');
var fourPm = $('#4pm');
var fivePm = $('#5pm');


$('.saveBtn').on("click",function(){
    var usuerInput = $(this).siblings("textarea").val()
    var amFlag = $(this).siblings('textarea').attr('id').slice(-2)
        if (amFlag == "am") {
            var timeBlock = $(this).siblings('textarea').attr('id').replace('am','')
        } else {
            var timeBlock = $(this).siblings('textarea').attr('id').replace('pm','')
        }
    console.log(usuerInput,timeBlock,)
localStorage.setItem(timeBlock,usuerInput)
})
// moment.js 
// current day of the week + current date
var currentDate = moment().format('dddd') + moment().format("MMM Do YY");
// lists current date as well as time
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(currentDay)

var currentHour = moment().hours()
// setting variables by selecting ids from index.html


$('.saveBtn').on("click",function(){
    var usuerInput = $(this).siblings("textarea").val()
    var amFlag = $(this).siblings('textarea').attr('id').slice(-2)
        if (amFlag == "am") {
            var timeBlock = $(this).siblings('textarea').attr('id').replace('am','')
        } else {
            var timeBlock = $(this).siblings('textarea').attr('id').replace('pm','')
        }
    console.log(usuerInput,timeBlock,currentHour)
localStorage.setItem(timeBlock,usuerInput)
})

for ( let i = 9; i <= 17; i++) {
    var storData = localStorage.getItem(i)
    var ampm =""
    if (i < 12) {
        ampm ="am"
        // $('#'+ i + 'am').val(storData)
    } else {
        ampm ="pm"
        // $('#'+ i + 'pm').val(storData)
    }

    if (i > currentHour) {
        $('#'+ i + ampm).val(storData)   
        $('#'+ i + ampm).addClass('future')  
        
    } else if (i == currentHour) {
        $('#'+ i + ampm).val(storData)   
        $('#'+ i + ampm).addClass('present')  
    } else {
        $('#'+ i + ampm).val(storData)   
        $('#'+ i + ampm).addClass('past')  
    }
    

}

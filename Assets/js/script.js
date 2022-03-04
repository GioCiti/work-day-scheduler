// moment.js 
// current day of the week + current date
var currentDate = moment().format('dddd') + moment().format("MMM Do YY");
// lists current date as well as time
var currentHour = moment().format('MMMM Do YYYY, h:mm:ss a');

// setting variables by selecting ids from index.html


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

for ( let i = 9; i <= 17; i++) {
    var storData = localStorage.getItem(i)
    if (i < 12) {
        $('#'+ i + 'am').val(storData)
    } else {
        $('#'+ i + 'pm').val(storData)
    }
}
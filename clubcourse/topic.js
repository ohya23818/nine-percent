var topic = [
    "快樂大本營",
    "自製綜藝節目",
    "奔跑吧",
    "自製綜藝節目",
    "高能少年團",
    "極限挑戰"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,21);

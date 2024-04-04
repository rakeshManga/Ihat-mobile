export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sept", "Oct", "Nov", "Dec"];
//export const years = [2021,2020, 2019, 2018];
const weekDaysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekDaysNamesFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const years = [new Date().getFullYear(), new Date().getFullYear() - 1, new Date().getFullYear() - 2, new Date().getFullYear() - 3];
import moment from 'moment';
import { Alert } from 'react-native';
//import { date } from 'yup';

const DateHelper = {

    getCompareTodayDate: function (s) {
        const dateLimit = moment(s, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
        const now = moment()
        try {
            if (dateLimit.isValid() && now.isBefore(dateLimit)) {

                console.log(now.toString())
                console.log(dateLimit.toString())
                return true;
            } else {
                return false;
            }

        } catch (err) {

            return "";

        }
    },


    getTodayDate: function () {
        try {
            var today = new Date();
            var dayDate = today.getDate();
            var month = parseInt(today.getMonth() + 1);
            month = month < 9 ? '0' + month : month;
            dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
            var dat = today.getFullYear() + "-" + month + "-" + dayDate

            return dat;
        } catch (err) {

            return "";

        }
    },
    getTodayDateNew: function () {
        try {
            var today = new Date();
            var dayDate = today.getDate();
            var month = parseInt(today.getMonth() + 1);
            month = month < 9 ? '0' + month : month;
            dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
            dat = today.getFullYear() + "-" + month + "-" + dayDate;//today.getDate();

            return dat;
        } catch (err) {

            return "";

        }
    },

    getTodayDate2: function () {
        try {
            var today = new Date();
            dat = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();

            return dat;
        } catch (err) {

            return "";

        }
    },

    formatToDateAMPM: function (date) {
        try {
            return moment(date).format('DD/MM/YYYY hh:mm a');
            //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        } catch (err) {
            return ""
        }

    },
    formatToLocalTime: function (date) {
        try {
            console.log(moment(date).format('YYYY-MM-DDTHH:MM:SS'));
            return moment(date).format('YYYY-MM-DDTHH:MM:SS');
            //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        } catch (err) {
            return '';
        }
    }, formatToTimeHHmmss: function (date) {
        try {
            return moment(date).format('HH:mm:ss');
        } catch (err) {
            return '';
        }
    },
    formatToDate24: function (date) {
        try {
            return moment(date).format('DD/MM/YYYY HH:mm');
            //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        } catch (err) {
            return ""
        }

    },

    formatToDateTime: function (date) {
        try {
            //2020-05-02 24:00:0
            return moment(date).format('YYYY-MM-DD HH:mm:ss');
            //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        } catch (err) {
            return ""
        }

    },

    is7DayOldDate: function (date) {
        var d1 = moment(date);
        //d1.setHours(0, 0, 0, 0);
        var d2 = new Date();
        d2.setHours(0, 0, 0, 0);
        var diff = moment(d2).diff(d1, 'days')
        console.log('difference :' + diff)

        console.log('is difference more than 7: ' + (diff > 7))
        return diff > 6;
    },

    getMonthFormUTC: function (date) {
        try {
            var d1 = moment(date);
            d1 = new Date(d1);
            console.log('getMonthFormUTC :' + d1.getMonth());
            return d1.getMonth();
        } catch (err) {
            return -1;
        }

    },

    getYearFormUTC: function (date) {
        try {
            // var d1 = moment(date);
            // d1 = new Date(d1);
            // console.log('getYearFormUTC :' + d1);
            // return d1.getFullYear();
            console.log("Date :- ", date);
            var newDate = date;//String(date).split(' ');
            newDate = String(newDate).split('-');
            return `${newDate[0]}`
        } catch (err) {
            return 2020;
        }

    },

    formatToOnlyDate: function (date) {
        console.log(moment('2020-05-21T16:57:04.215+0000').format('YYYY-MM-DD hh:mm a'));

        return moment(date).format('YYYY-MM-DD');
        //return moment(date).format('DD-MM-YYYY');
        //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
    },
    formatToOnlyDateNext6months: function (date) {
        //console.log(moment('2020-05-21T16:57:04.215+0000').format('DD-MM-YYYY hh:mm a'));
        var a = moment(date).add(6, 'month');
        console.log('moment123', a);
        //a=a.format('DD-MM-YYYY');
        return a.format('DD-MM-YYYY');
        //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
    },
    formatToOnlyDateNext6monthsISO: function (date) {
        //console.log(moment('2020-05-21T16:57:04.215+0000').format('DD-MM-YYYY hh:mm a'));
        var a = moment(date).add(6, 'month');
        console.log('moment123', a);
        //a=a.format('DD-MM-YYYY');
        return a.toISOString();
        //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
    },

    formatToOnlyDateAM: function (date) {
        console.log(moment('2020-05-21T16:57:04.215+0000').format('DD-MM-YYYY hh:mm a'));
        return moment(date).format('DD-MM-YYYY hh:mm');
        //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
    },

    formatAMPM: function (date) {
        var date = new Date(date);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + '' + ampm;
        return strTime;
    },

    formatToDate: function (dateStr) {
        console.log("date :- ", dateStr);
        var date = new Date(dateStr);
        console.log("date :- ", date);
        var dayDate = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
        month = month < 9 ? '0' + month : month;

        var strDate = dayDate + '/' + monthNames[date.getMonth()] + '/' + year;
        return strDate;
    },

    // formatToYYYYMMDD: function (dateStr) {
    //     var date = new Date(dateStr);
    //     var dayDate = date.getDate();
    //     var month = date.getMonth();
    //     var year = date.getFullYear();

    //     dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
    //     month = month < 9 ? '0' + (month + 1) : (month + 1);

    //     var strDate = year + '-' + month + '-' + dayDate;
    //     return strDate;
    // },

    convertToDate(dateString) {
        //  Convert a "dd/MM/yyyy" string into a Date object
        let d = dateString.split("-");
        let dat = new Date(d[2] + '-' + d[1] + '-' + d[0]);
        return dat;
    },

    formatToYYYYMMDD: function (dateStr) {
        var date = new Date(dateStr);
        var dayDate = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
        month = month < 9 ? '0' + (month + 1) : (month + 1);

        var strDate = dayDate + '-' + month + '-' + year;
        return strDate;
    },

    formatToDDMMYYYYNew: function (dateStr) {
        var date = new Date(dateStr);
        var dayDate = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
        month = month < 9 ? '0' + (month + 1) : (month + 1);

        var strDate = year + '-' + month + '-' + dayDate;
        return strDate;
    },

    formatToYYYYMMDDNew: function (dateStr) {
        var date = new Date(dateStr);
        var dayDate = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
        month = month < 9 ? '0' + (month + 1) : (month + 1);

        var strDate = year + '-' + month + '-' + dayDate;
        return strDate;
    },
    formatToYYYYMMDDHHMM: function (dateStr) {
        var date = new Date(dateStr);
        var dayDate = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();

        dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
        month = month < 9 ? '0' + (month + 1) : (month + 1);
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strDate = year + '-' + month + '-' + dayDate + " " + hours + ":" + minutes;
        return strDate;
    },

    formatToYYYYMMDDHHMMSS: function (dateStr) {
        var date = new Date(dateStr);
        var dayDate = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var second = date.getSeconds();
        dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
        month = month < 9 ? '0' + (month + 1) : (month + 1);
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        second = second < 10 ? '0' + second : second;
        var strDate = year + '-' + month + '-' + dayDate + " " + hours + ":" + minutes + ":" + second;
        return strDate;
    },
    formatToYYYYMMDDHHMMSSTS: function (dateStr) {
        var date = new Date(dateStr);
        var dayDate = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var second = date.getSeconds();
        dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
        month = month < 9 ? '0' + (month + 1) : (month + 1);
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        second = second < 10 ? '0' + second : second;
        var strDate = year + '-' + month + '-' + dayDate + " " + hours + ":" + minutes + ":" + second;
        var TimeMinSec = `${hours}` + `${minutes}` + `${second}`;
        return TimeMinSec;
    },
    formatToYYYYMMDDHHMMSSTSDATE: function (dateStr) {
        var date = new Date(dateStr);
        var dayDate = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var second = date.getSeconds();
        dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
        month = month < 9 ? '0' + (month + 1) : (month + 1);
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        second = second < 10 ? '0' + second : second;
        var strDate = year + '-' + month + '-' + dayDate + " " + hours + ":" + minutes + ":" + second;
        var TimeMinSec = `${year}` + `${month}` + `${dayDate}` + `${hours}` + `${minutes}` + `${second}`;
        // var TimeMinSec = `${hours}` + `${minutes}` + `${second}`;
        return TimeMinSec;
    },
    formatToYYYYMMDDHHMMSSNew: function (dateStr) {
        var date = new Date(dateStr);
        var dayDate = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var second = date.getSeconds();
        dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
        month = month < 9 ? '0' + (month + 1) : (month + 1);
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        second = second < 10 ? '0' + second : second;
        var strDate = year + '-' + month + '-' + dayDate + " " + '00' + ":" + '00' + ":" + '00';
        return strDate;
    },

    getDay: function (dateStr) {
        var date = new Date(dateStr);
        var n = date.getDay();
        return weekDaysNamesFull[n];
    },
    getDayId: function (dateStr) {
        var date = new Date(dateStr);
        var n = date.getDay();
        return n;
    },

    getDayMonth: function (dateStr) {
        var date = new Date(dateStr);
        var dayDate = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        dayDate = dayDate < 10 ? '0' + dayDate : dayDate;
        month = month < 9 ? '0' + month : month;

        var strDate = dayDate + ' ' + monthNames[date.getMonth()];
        return strDate;
    },

    getParsedDate1: function (date, isPM) {
        date = String(date).split(' ');
        var days = String(date[0]).split('-');
        var hours = String(date[1]).split(':');
        let totalHours = parseInt(hours[0]);
        if (isPM) {
            totalHours = totalHours + 12;
            if (totalHours == 24) {
                totalHours = 0;
            }
        }
        return new Date(parseInt(days[0]), parseInt(days[1]) - 1, parseInt(days[2]), totalHours, parseInt(hours[1]))

    },

    getDateDiffInSecond(appoinmentDate) {
        //console.log('appoinmentDate12', appoinmentDate);
        const expirydate = new Date(...this.getParsedDate(appoinmentDate, false));
        //console.log('appoinmentDate', expirydate);
        const diffr = new Date(expirydate);//moment.duration(moment(expirydate).diff(moment(date)));
        //console.log('diffr', diffr);
        const expiredMiliisecond = diffr.getTime();
        //console.log("expiredMiliisecond L:- ", expiredMiliisecond);
        const currentTimeMillisecond = new Date().getTime();
        //console.log("currentTimeMillisecond L:- ", currentTimeMillisecond);
        const timeDiff = expiredMiliisecond - currentTimeMillisecond;
        //console.log("timeDiff L:- ", timeDiff);
        const second = Math.floor(timeDiff / 1000);
        //console.log("second ", second);
        return second;
    },

    getParsedYYYYMYDDHHMMSSToDate: function (date, isPM) {
        date = String(date).split(' ');
        var days = String(date[0]).split('-');
        var hours = String(date[1]).split(':');
        let totalHours = parseInt(hours[0]);
        if (isPM) {
            totalHours = totalHours + 12;
            if (totalHours == 24) {
                totalHours = 0;
            }
        }

        return new Date(
            parseInt(days[0]),
            parseInt(days[1]) - 1,
            parseInt(days[2]),
            23,//totalHours, 
            59,//parseInt(hours[1]),
            59// parseInt(hours[2]),
        );
    },

    getParsedDate: function (date, isPM) {
        date = String(date).split(' ');
        var days = String(date[0]).split('-');
        var hours = String(date[1]).split(':');
        let totalHours = parseInt(hours[0]);
        if (isPM) {
            totalHours = totalHours + 12;
            if (totalHours == 24) {
                totalHours = 0;
            }
        }
        return [
            parseInt(days[0]),
            parseInt(days[1]) - 1, // 0 means Jan, 1 means Feb so that's why minus
            parseInt(days[2]),
            totalHours,
            parseInt(hours[1]),
        ];
    },

    getParsedTime: function (date) {
        try {
            var times = String(date).split(':');
            var hrs = times[0];
            var mins = times[1];
            let totalHours = parseInt(hrs);
            let isPM = totalHours >= 12 ? "PM" : "AM";
            if (isPM == "PM") {
                hrs = parseInt(hrs) - 12;
            }
            return hrs + ":" + mins + " " + isPM;
        } catch (err) {
            return ""
        }
    },

    formatToDDMMYYYY(date) {
        try {
            var newDate = String(date).split(' ');
            newDate = String(newDate[0]).split('-');
            if (newDate[2] == undefined) {
                return "";
            }
            return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
        } catch (err) {
            return ""
        }

    },

    convertYYYYMMDDToDate(dateStr) {
        const date = dateStr.split('-');
        return new Date(date[0], parseInt(date[1]) - 1, date[2]);
    },

    formatToDDMMYYYYHypen(date) {
        try {
            var newDate = String(date).split(' ');
            newDate = String(newDate[0]).split('-');
            if (newDate[2] == undefined) {
                return "";
            }
            return `${newDate[2]}-${newDate[1]}-${newDate[0]}`
        } catch (err) {
            return ""
        }

    },

    formatToYYYYMMDDHypen(date) {
        try {
            var newDate = String(date).split(' ');
            newDate = String(newDate[0]).split('-');
            if (newDate[2] == undefined) {
                return "";
            }
            return `${newDate[2].length == 4 ? newDate[2] : newDate[0]}-${newDate[1]}-${newDate[0].length == 2 ? newDate[0] : newDate[2]}`
        } catch (err) {
            return ""
        }

    },

    formatToHHMM(date) {
        try {
            let newDate = String(date).split(':');
            if (newDate[2] == undefined) {
                return "";
            }
            return `${newDate[0]}:${newDate[1]}`
        } catch (err) {
            return ""
        }

    },

    formatToDateAppointment(date, time) {
        try {
            var newDate = String(date).split(' ');
            newDate = String(newDate[0]).split('-');
            time = String(time).split('-');
            let startTime = String(time[0]).split(':');
            return `${newDate[0]}-${newDate[1]}-${newDate[2]} ${startTime[0]}:${startTime[1]}`
        } catch (err) {
            return "";
        }

    },

    formatToDirectDateAppointment(date) {
        try {
            var newDate = String(date).split(' ');
            var newDate1 = String(newDate[0]).split('-');
            var time = String(newDate[1]).split(':');
            //let startTime = String(time[0]).split(':');
            return `${newDate1[2]}/${newDate1[1]}/${newDate1[0]} ${time[0]}:${time[1]}`
        } catch (err) {
            return "";
        }

    },

    parseISOString(s) {
        var b = s.split(/\D+/);
        return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    },

    formatToDirectDateAppointment1(date) {
        try {
            //2020-05-02 24:00:0
            return moment(date).format('DD/MM/YYYY HH:mm');
            //  date = DateHelper.parseISOString(date); //new Date(date);
            // //date = new Date(`${date}`);
            // //alert(date);
            // var dayDate =  date.getDate();
            // var month = date.getMonth();
            // var year = date.getFullYear();
            // var hours = date.getHours();
            // var minutes = date.getMinutes();
            // var second = date.getSeconds();
            // dayDate = dayDate < 10 ? '0'+dayDate : dayDate;
            // month = month < 10 ? '0'+ (month+1) : (month+1);
            // hours = hours < 10 ? '0'+hours : hours;
            // minutes = minutes < 10 ? '0'+minutes : minutes;
            // second = second < 10 ? '0'+second : second;
            // var strDate = dayDate + '-' + month + '-' + year +  "  " + hours + ":" + minutes;
            // return strDate;
            //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        } catch (err) {
            return ""
        }

        // try{
        //     var newDate = String(date).split(' ');
        //     var newDate1 = String(newDate[0]).split('-');
        //     var time = String(newDate[1]).split(':');
        //     //let startTime = String(time[0]).split(':');
        //     return `${newDate1[2]}-${newDate1[1]}-${newDate1[0]} ${time[0]}:${time[1]}`
        // }catch(err){
        //     return "";
        // }

    },

    formatToDateOnly: function (date) {
        try {
            return moment(date).format('DD/MM/YYYY');
            //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        } catch (err) {
            return ""
        }

    },


    formatToDirectDateAppointment2(date) {
        try {
            //2020-05-02 24:00:0
            return moment(date).format('DD/MM/YYYY');
            //  date = DateHelper.parseISOString(date); //new Date(date);
            // //date = new Date(`${date}`);
            // //alert(date);
            // var dayDate =  date.getDate();
            // var month = date.getMonth();
            // var year = date.getFullYear();
            // var hours = date.getHours();
            // var minutes = date.getMinutes();
            // var second = date.getSeconds();
            // dayDate = dayDate < 10 ? '0'+dayDate : dayDate;
            // month = month < 10 ? '0'+ (month+1) : (month+1);
            // hours = hours < 10 ? '0'+hours : hours;
            // minutes = minutes < 10 ? '0'+minutes : minutes;
            // second = second < 10 ? '0'+second : second;
            // var strDate = dayDate + '-' + month + '-' + year +  "  " + hours + ":" + minutes;
            // return strDate;
            //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        } catch (err) {
            return ""
        }

        // try{
        //     var newDate = String(date).split(' ');
        //     var newDate1 = String(newDate[0]).split('-');
        //     var time = String(newDate[1]).split(':');
        //     //let startTime = String(time[0]).split(':');
        //     return `${newDate1[2]}-${newDate1[1]}-${newDate1[0]} ${time[0]}:${time[1]}`
        // }catch(err){
        //     return "";
        // }

    },


    formatHHMMSSToHHMMRange(date) {
        try {

            var newDate = String(date).split(' ');
            newDate = String(newDate[1]).split(':');
            if (newDate[0] == undefined) {
                return "";
            }
            return `${newDate[0]}:${newDate[1]}`
        } catch (err) {
            return "";
        }

    },

    formatHHMMSSToHHMM(time) {
        try {
            if (time == null) return "";
            time = String(time).split('-');
            console.log("time======> ", time)
            let startTime = String(time[0]).split(':');
            let endTime = String(time[1]).split(':');
            return `${startTime[0]}:${startTime[1]} -${endTime[0]}:${endTime[1]}`;
        } catch (err) {
            console.log(err);
            return ""
        }
    },

    formatISOtoDDMMYY: function (date) {
        try {
            date = date.split('T');
            console.log("date======> ", date)
            date = String(date[0]);
            return this.formatToDDMMYYYY(date);
        } catch (err) {
            console.log(err);
            return ""
        }
    }, formatToTimeHHmm: function (date) {
        try {
            return moment(date).format('hh:mm a');
        } catch (err) {
            return '';
        }
    },
    formatToDateYYYYMMDD: function (date) {
        try {
            return moment(date).format('YYYY-MM-DD');
            //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        } catch (err) {
            return '';
        }
    },
    formatToDateDDMMYYYY: function (date) {
        try {
            //return moment(date).format('DD-MM-YYYY');
            return moment(date).format('YYYY-MM-DD');
            //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        } catch (err) {
            return '';
        }
    },
    formatToDateHHmi: function (date) {
        try {
            return moment(date).format('DD-MM-YYYY hh:mm a');
            //return this.formatToDate(date) + ', ' + this.formatAMPM(date);
        } catch (err) {
            return '';
        }
    }, addDays: function (date, days) {

        var new_date = moment(date, "YYYY-MM-DD").add(days, 'days');
        //Alert.alert(JSON.stringify(new_date));
        return moment(new_date).format('YYYY-MM-DD');
    }, calculateWeeks: function (date1, date2) {

        var currDay = moment(date1);//.format('YYYY-MM-DD');
        var birthday = moment(date2);//.format('YYYY-MM-DD');
        console.log("date1", JSON.stringify(currDay));
        console.log("date2", JSON.stringify(birthday));
        var diff = moment.duration(birthday.diff(currDay));
        console.log("date3", JSON.stringify(diff));
        console.log(diff.months() + " months, " + diff.weeks() + " weeks, " + diff.days() % 7 + " days.");

        console.log(Math.floor(diff.asWeeks()) + " weeks, " + diff.days() % 7 + " days.");
        return Math.floor(diff.asWeeks());
    }
}

export default DateHelper;

export function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', { month: 'short' });
}
export function formatDate(date) {
    if (date instanceof Date) {
        var d = new Date(date);
        month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('-');
    }




    return undefined;
}
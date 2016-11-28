
var TimingDiv;

var ajaxStartFunction = function(data) {
    TimingDiv.append("<p>ajax Start function</p>");
};

var ajaxSendFunction = function(event, xhr, options) {
    // console.log(event);
    // console.log(xhr);
    // console.log(options);
    // console.log(options.url);
    TimingDiv.append("<p>ajax Send function " + options.url + " " + event.timeStamp + "</p>");
};

var ajaxCompleteFunction = function(event, xhr, options) {
    // console.log(event);
    // console.log(xhr);
    // console.log(options);
    TimingDiv.append("<p>ajax Complete function " + options.url + " " + event.timeStamp +  "</p>");
};

var ajaxStopFunction = function(data) {
    TimingDiv.append("<p>ajax Stop function</p>");
};

var document_ready_function = function() {
    $(document).ajaxStart(ajaxStartFunction);
    $(document).ajaxSend(ajaxSendFunction);
    $(document).ajaxComplete(ajaxCompleteFunction);
    $(document).ajaxStop(ajaxStopFunction);
    TimingDiv = $("#AjaxTiming");
};

var callbackFunction = function (data, a, b, c) {
    TimingDiv.append("<p>" + data.query.results.channel.wind.chill + " " + data.query.results.channel.wind.direction + " " + data.query.results.channel.wind.speed + "</p>");
};

var openWeatherCompleteFunction = function(data) {
    console.log(data);
};

function execute_ajax() {

    var obj2 = $.ajax({
        url: "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='ashland, ma')&format=json&callback=callbackFunction",
        context: "foo"
    });
    var obj1 = $.ajax({
        url: "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='boston, ma')&format=json&callback=callbackFunction",
        context: "foo"
    });


}


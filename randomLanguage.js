
var url = 'languages.json';

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': url,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}
var langGroup = pickRandomProperty(json);
var selection = pickRandomProperty(json[langGroup]);

function allLanguages(json) {
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        $('#allLanguages').append('<h4>'+key+'</h4>' + '<p>'+ json[key] + '</p>');
      }
    }
}

$(window).on('load', function () {
  $('#randomLanguage').html('Your random language is <strong><a href="http://pathfinderwiki.com/mediawiki/index.php?title=Special%3ASearch&search=' + json[langGroup][selection] + '%20language&fulltext=Search">' + json[langGroup][selection] + '</a></strong>');
  allLanguages(json);
});
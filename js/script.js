function toggleVisibility(id) {
  var e = $('#'+id);
  var c = $('#categories');
  var a = $('#aboutUs');

  var effect = 'slide';

  // Set the options for the effect type chosen
  var dir = 'up';
  var options = { direction: dir };

  // Set the duration (default: 400 milliseconds)
  var duration = 600;

  if(e.css("display") == "flex") {
    e.css("display","none");
    //a.toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});
    a.css("display", "flex");
    c.toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});
  }
  else {
    dir = 'down';
    options = { direction: dir };
    e.toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});
    a.css("display","none");
    c.css("display","none");
  }
}
function toggleSubcategoryVisibility(currentSubcategory,nextSubcategory, dir){
  var current = $('#'+currentSubcategory);
  var currentHistory = $('#'+currentSubcategory+'History');
  var next = $('#'+nextSubcategory);
  var nextHistory = $('#'+nextSubcategory+'History');

  var effect = 'slide';

  // Set the options for the effect type chosen
  //var dir = 'right';
  var options = { direction: dir };

  // Set the duration (default: 400 milliseconds)
  var duration = 600;

    current.css("display","none");
    currentHistory.css("display","none");

    next.toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});
    nextHistory.toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});

}
function toggleDetails(item,subcategory,upButton)
{
  var item = $('#'+item);
  var sub = $('#'+subcategory);
  var button = $('#'+upButton);
  var subHistory = $('#'+subcategory+'History');

  var effect = 'slide';

  // Set the options for the effect type chosen
  var dir = 'up';
  var options = { direction: dir };

  // Set the duration (default: 400 milliseconds)
  var duration = 600;

  if (item.css("display") == 'flex') {
    item.css("display","none");
    $('#detailsUp').css("display","none");
    sub.toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});
    subHistory.toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});
    button.toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});

  } else {
    dir = 'down';
    options = { direction: dir };
    sub.css("display","none");
    subHistory.css("display","none");
    button.css("display","none");
    item.toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});
    $('#detailsUp').toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});
  }
}
function toggleSubDetails(currentDetails, nextDetails, dir){
  var current = $('#'+currentDetails);
  var next = $('#'+nextDetails);

  var effect = 'slide';

  // Set the options for the effect type chosen
  //var dir = 'right';
  var options = { direction: dir };

  // Set the duration (default: 400 milliseconds)
  var duration = 600;

  current.css("display","none");

  next.toggle(effect, options, duration).promise().done(function(){this.css("display","flex");});
}

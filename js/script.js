function toggleVisibility(id) {
  //toggleCategories();
  var e = document.getElementById(id);
  var c = document.getElementById('categories');
  if(e.style.display == 'flex') {
    e.style.display = 'none';
    c.style.display = 'flex';
  }
  else {
    $(e).slideDown( "fast" );
    e.style.display = 'flex';
    c.style.display = 'none';
  }
}
function toggleSubcategoryVisibility(currentSubcategory,nextSubcategory){
  var current = document.getElementById(currentSubcategory);
  var next = document.getElementById(nextSubcategory);
  if (current.style.display == 'flex') {
    current.style.display = 'none';
    next.style.display = 'flex';
  }
  else {
    current.style.display = 'flex';
    next.style.display = 'none';
  }
}

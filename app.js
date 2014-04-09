/*
 * Example 1
 * Given the selector '#s1p2', get its last sibling
 */
function example3() {
  return $('#s1p2').siblings().last();
}

/*
 * Example 2
 * Add the first paragraph of section 2 to the results of Example 4
 */
function example2() {
  var ex1 = example1(),
      firstPara = $('p.section2').first();
  return $(ex1).add(firstPara);
}

/*
 * Example 3 A
 * Select all paragraphs from section 1 excluding inactive ones
 */
function example3a() {
  return $('p.section1:not(".inactive")');
}

/*
 * Example 3 B
 * Select all paragraphs from section 1 excluding inactive ones
 */
function example3b() {
  return $('p.section1').not('.inactive');
}

/*
 * Example 4
 * Find the second list item as well as every subsequent list item in the unordered list
 */
function example4() {
  return $('ul').find('li:nth-child(2)').nextAll().andSelf();
}

/*
 * Example 5
 * Select all paragraphs in the page whose text contains an even number
 */
function example5() {
  return $('p').map(function (idx, el) {
    var text = $(el).text(),
        num = text.replace(/Paragraph\s/, ''),
        num = parseInt(num, 10);
    return num % 2 === 0 ? el : undefined
  });
}

/*
 * Example 6A
 * Create a paragraph with an anchor in it and append it to the first section element
 */
function example6a() {
  return $('section:first').append('<p><a></a></p>').find('a').attr('href', 'http://www.cakemail.com/').text('Click me!');
}

/*
 * Example 6B
 * Create a paragraph with an anchor in it and append it to the first section element
 */
function example6b() {
  return $('<p><a></a></p>').find('a').attr('href', 'http://www.cakemail.com/').text('Click me!').end().appendTo('section:first');
}

/*
 * Example 7 
 * Modify the foreground/background colours and font weight of the second section element
 * wrap it in a div
 * add the class .foo to the div
 */
function example7() {
  return $('section').last()
    .css({'color': 'white', 'background': 'green', 'fontWeight': 'bold'})
    .wrap('<div></div>')
    .parent()
    .addClass('foo');
}

/*
 * Example 8
 * Read the price data from the unordered list items
 * add the price plus 10% tax to each corresponding ordered list item
 */
function example8() {
  $('ul li').each(function (idx, el) {
    var price = $(el).data('price') * 1.10;
    $('ol li').eq(idx).data('price', price);
  });
}

/*
 * Example 9
 * Attach three click handlers to the H1 elements in the page
 *   1st one changes the html contents of the clicked H1 to the ms value of the current time
 *   2nd one toggles the .bar class on the clicked H1
 *   3rd one toggles the .foo class on the clicked H1
 * Give the two toggle handlers the '.toggle' namespace
 * When the user presses the ESC key, remove the namespaced handlers
 */
function example9() {
  $('h1').on('click', function () {
    $(this).html(new Date().getTime());
  });
  $('h1').on('click.toggle', function () {
    $(this).toggleClass('bar');
  });
  $('h1').on('click.toggle', function () {
    $(this).toggleClass('foo');
  });
  $(document).on('keyup', function (e) {
    if (e.keyCode === 27) {
      $('h1').off('.toggle');
    }
  });
}

function example9() {
  $('h1').on('click', function () {
    $(this).html(new Date().getTime());
  });
  $('h1').on('click.toggle', function () {
    $(this).toggleClass('bar');
  });
  $('h1').on('click.toggle', function () {
    $(this).toggleClass('foo');
  });
  $(document).on('keyup', function (e) {
    if (e.keyCode === 27) {
      $('h1').off('.toggle');
    }
  });
}
/*
 * Example 10
 * Convert previous 'contains even' map example to a custom selector
 */
function example10() {
  $.expr[':'].containsEven = function(obj, index, meta, stack) {
    var text = $(obj).text(),
        num = text.replace(/Paragraph\s/, ''),
        num = parseInt(num, 10);
    return num % 2 === 0 ? true : false;
  };
}

/*
 * DOM traversal
 * DOM manipulation
 * Complex element creation
 * Data storage
 * Advanced events
 * listening to getters and setters
 * custom events beyond the DOM
 * namespacing events
 * event delegation and why it’s important
 * custom selectors
    $.expr[':'].test = function(obj, index, meta, stack){
        // obj - is a current DOM element
        // index - the current loop index in stack
        // meta - meta data about your selector
        // stack - stack of all elements to loop
       
        // Return true to include current element
        // Return false to explude current element
    };

    // Usage:
    $('.someClasses:test').doSomething();


    $(this).stop(true, true).animate();

 *
 * deferred execution
 */
function example11() {
  function a1() {
    console.log('always', arguments);
  }
  function f1() {
    console.log('failed', arguments);
  }
  function r1() {
    console.log('resolved', arguments);
  }
  $.get('LICENSE').always(a1).fail(f1).done(r1);
}

/*
 * Run all examples
 */
function runAllExamples() {
  console.log('Running all examples\n');
  var i = 1,
      fn = window['example' + i.toString()];
  while (typeof fn === 'function') {
    console.log(fn());
    i += 1;
    fn = window['example' + i.toString()];
  }
}

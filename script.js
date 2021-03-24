//When user types their gift idea into the .ideas input and hits enter/submits by clicking .addIdea
// --> Check if input is blank
// --> Store user value in a variable
// --> Once submitted, clear the input
// --> Use that variable and return as dynamic list item with assets/idea.png as checkbox

// When user clicks on the list item once --> change checkbox to "assets/maybe.png" and change li text to bold & black
// When user clicks on the list item a second time --> change checkbox to "assets/gifted.png" and change li text to strike through, remove bold
//Toggle the above styles between idea / maybe & gifted


$(document).ready(function() {
  
  
  // ADD IDEA SUBMIT LISTENER
  $(`form`).on(`submit`, function(e){
    e.preventDefault();
    let selectedUl = $(this).next()
    let recGiftIdea = $(this).find('.ideas').val();

    if (recGiftIdea.trim().length !== 0) {
      selectedUl.append(`
        <li>
          <span class="check"></span>${recGiftIdea}
        </li>
      `);

      // Clear form input
      $(`form input[type=text]`).val('');
    };
// vv END OF ADD IDEA SUBMIT LISTENER    
  });


// TOGGLE CHECKBOX IMAGES TO MATCH KEY
  $(`ul`).on(`click`, `li`, function(){
  const spanEl = $(this).find('span', 'li');
  if (spanEl.hasClass('check')) {
    spanEl.removeClass('check');
    spanEl.addClass('maybe');
  } else if ((spanEl.hasClass('maybe'))) {
    spanEl.removeClass('maybe');
    spanEl.addClass('gifted');
  } else if ((spanEl.hasClass('gifted'))) {
    spanEl.removeClass('gifted');
    spanEl.addClass('check');
  }
});

// vv end of doc ready //
});
$(document).ready(function() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // 0 for Sunday, 1 for Monday, and so on

    if (dayOfWeek === 0) {
      // Sunday
      $('#greeting').text('It is Sunday!').css('color', 'green').css('font-size','10em');
    } else {
      // Other days
      $('#greeting').text('It is not Sunday.').css('color', 'blue');
    }
  });
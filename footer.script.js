<script type="text/javascript" src="http://static.startribune.com/news/projects/all/beerbracket-2019/js.cookie.js?c=1"></script> 
<script >

  function updateVoteButton() {
    $('.vote-btn').text('Thank you for voting. Next round starts Monday, March 25nd.').attr('disabled', true).addClass('disabled');
  };

$('.js-bracket-submit').on('click', function(e) {
  e.preventDefault();
  Cookies.set('BeerBracketCookie1', true, { expires: 2, path: '' });
  updateVoteButton();
});

$(document).ready(function() {
  var visitedBeerBracket = Cookies.get('BeerBracketCookie1');
  if (visitedBeerBracket) {
    updateVoteButton();
  } else {
    $('.vote-btn').addClass('active');
  }
});
$('.battle input').on('change', function(e) {
  $(this).parent().removeClass('unchecked');
  $(this).parent().removeClass('checked');
  $(this).parent().parent().parent().find('input:not(:checked)').parent().addClass('unchecked');
  $(this).parent().parent().parent().find('input:checked').parent().addClass('checked');
}); 
</script>

<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114906116-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-114906116-1');
</script>
<script type="text/javascript" src="http://static.startribune.com/news/projects/all/beerbracket-2019/js.cookie.js?c=1"></script> 
<script >

  function updateVoteButton() {
    $('.vote-btn').text('Thank you for voting. Next round starts Friday, March 29th.').attr('disabled', true).addClass('disabled');
  };

$('.js-bracket-submit').on('click', function(e) {
  e.preventDefault();
  Cookies.set('BeerBracketCookie2', true, { expires: 2, path: '' });
  updateVoteButton();

    gtag('event', 'beer_bracket_2019', {
      'event_category': 'vote',
      'event_label': 'vote',
      'value': '1'
    });
});

$(document).ready(function() {
  var visitedBeerBracket = Cookies.get('BeerBracketCookie2');
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
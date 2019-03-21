# Beerbracket 2019

Our third annual Ultimate Minnesota Beer Bracket

list of all polls (ids)
http://static.startribune.com/news/projects/all/beerbracket-2019/assets/data/beerBracket19.json

http://stmedia.startribune.com/images/beer-loop-sm.gif
http://stmedia.startribune.com/images/beer-16-group2.jpg

## Things to update when rounds change
	LCD - 506004581
	1. update Story hero (see 'Examples for hero text' below)
	2. update Bracket Content with results and update selectors (see 'css labels for bracket' below)
	3. change Canonical URL for new round
	4. Change Return Message
	5. Change Footer Script with new visitedBeerBracket var (change round number)

	ARTICLE (PACKAGE)- 506004471
	1. change Placement images (Background and Thumbnail) and Related Photo for sharing

	Need to use the social media debuggers anytime you want to update the sharing info (whenever the canonical URL is changed)

	will need to change the redirect url as well /beerbracket

	JSON/POLLS
	set up new pairings for polls

## css labels for bracket
	current
	notYet
	winner
	loser

EXAMPLES FOR HERO TEXT:

## Vote Now
<div class="l-article article"> <div class="l-article-topper"> <h5 class="label">2019 Ultimate Minnesota Beer Bracket</h5> <h1 class="article-headline"><span class="desktop">Sudsy Sixteen: </span>Make your picks</h1> <div class="article-body"><p>The people have spoken, the field is set and it’s time to decide which Minnesota breweries will advance to the Ale-ite Eight. <span class="desktop">Click the vote button to enter your selections. Voting closes at 5 p.m. Thursday.</span><span class="mobile">Click the jersey to make your selections. Voting closes at 5 p.m. Thursday. </span></p></div> </div>

css: 
.desktop.vote-btn {
  display: block !important; // display: none !important
  opacity: 0;
}

#vote-form {
  // display: block !important
}


## Closed 
<div class="l-article article"> <div class="l-article-topper"> <h5 class="label">2019 Ultimate Minnesota Beer Bracket</h5> <h1 class="article-headline"><span class="desktop">Sudsy Sixteen</span></h1> <div class="article-body desktop"><p>Voting has closed in the Sudsy Sixteen round. Results will be announced Monday morning, and voting in the Ale-ite Eight round will begin as well.</span></p></div> <div class="article-body mobile"><p>Voting has closed in the Sudsy Sixteen round. Results will be announced Monday morning, and voting in the Ale-ite Eight round will begin as well. </p></div> </div> </div>

css: 
.desktop.vote-btn {
  display: none !important; // display: block !important
  opacity: 0;
}

#vote-form {
  // display: none !important
}

BIG WINNER: added to the top of the Bracket Content field in LCD at the end of championship

<div class="mobile bigWinner">
  <div class="tease  has-art  tease-1">
    <div class="tease-container-right">
      <figure class="tease-photo is-story">
        <div class="tease-photo-img"><img src="http://stmedia.startribune.com/images/bb_castle-danger.png" alt="Castle Danger wins big."></div>
      </figure>
      <!-- <h4>EXTRA!&nbsp;&nbsp;EXTRA!&nbsp;&nbsp;READ ALL ABOUT IT!</h4> -->
      <a href="http://www.startribune.com/castle-danger-crushes-surly-to-win-ultimate-minnesota-beer-bracket-championship/478420003">
        <h3><span class="tease-headline">Castle Danger crushes Surly</span></h3>
      </a>
      <div class="tease-summary">After a stunningly one-sided upset, the Two Harbors brewery is the 2018 Ultimate Minnesota Beer Bracket champion.</div>
    </div>
  </div>
</div>

## Library for cookies
https://github.com/js-cookie/js-cookie/blob/master/README.md


## Application data

_<Describe data and where it comes from.>_

See [docs/application-data.md](./docs/application-data.md).

## Publishing

See [docs/publishing.md](./docs/publishing.md).

## CMS integration

See [docs/cms.md](./docs/cms.md).

## Development

See [docs/development.md](./docs/development.md).

### Files and directories

See [docs/development.md](./docs/files-directories.md).

### Managing multiple pages

See [docs/pages.md](./docs/pages.md).

### Testing

See [docs/testing.md](./docs/testing.md).

### Code styles

See [docs/code-styles-linting.md](./docs/code-styles-linting.md).

## License

Code is licensed under the MIT license included here. Content (such as images, video, audio, copy) can only be reused with express permission by Star Tribune.

## Generated

Generated by [Star Tribune StribLab generator](https://github.com/striblab/generator-striblab) on 2019-02-19T20:02:18.424Z.

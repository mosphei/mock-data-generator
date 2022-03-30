
import { parse } from 'node-html-parser';
import {decode} from 'html-entities';

export class Alice {
    sentenceRegEx = /[^a-zA-Z ]?[A-Z][^\.\?\!]+.*?\s/gm;
    chapters: string[] = [];
    bookmark = {chapter: 0, sentence: 0};
    constructor() {
        // parse the html
        const doc = parse(alice);
        let divs = doc.querySelectorAll('.chapter');
        doc.querySelectorAll('div.chapter').forEach((div) => {
            let chapterText = div.innerText;
            this.chapters.push(decode(chapterText, {level: 'html4'}));
        });
        const startPosition = Math.floor(Math.random()*this.chapters?.length);
        this.bookmark.chapter = startPosition;
    }
    /**
     * returns a sentence fitting the requested length
     * @param low minimum character length
     * @param high maximum character length
     */
    public sentence(low: number, high: number) {
        if (low <= 0 || low > high) {
            throw new Error(`Invalid parameter (${low}, ${high})`);
        }
        let retval = '';
        let sentenceArray: string[] = [];
        let m = null;
        while (m = this.sentenceRegEx.exec(this.chapters[this.bookmark.chapter])) {
            sentenceArray.push(m[0]);
        }
        this.chapters[this.bookmark.chapter].split(/[\.\?\!\"]/);
        while (retval.length < low || retval.length > high) {
            retval = sentenceArray[this.bookmark.sentence];
            this.bookmark.sentence++;
            if (this.bookmark.sentence >= sentenceArray.length) {
                // next chapter
                this.bookmark.chapter++;
                this.bookmark.sentence = 0;
                if (this.bookmark.chapter >= this.chapters.length) {
                    this.bookmark.chapter = 0;
                }
                sentenceArray = [];
                while (m = this.sentenceRegEx.exec(this.chapters[this.bookmark.chapter])) {
                    sentenceArray.push(m[0]);
                }
            }
        }
        return retval;
    }
}
const alice = `Line wrap
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<title>The Project Gutenberg eBook of Alice&rsquo;s Adventures in Wonderland, by Lewis Carroll</title>
<link rel="coverpage" href="images/cover.jpg" />
<style type="text/css">
body { background:#faebd0;
margin-left: 20%;
margin-right: 20%;
text-align: justify }
h1, h2, h3, h4, h5 {text-align: center; font-style: normal; font-weight:
normal; line-height: 1.5; margin-top: .5em; margin-bottom: .5em;}
h1 {font-size: 300%;
margin-top: 0.6em;
margin-bottom: 0.6em;
letter-spacing: 0.12em;
word-spacing: 0.2em;
text-indent: 0em;}
h2 {font-size: 175%; margin-top: 2em; margin-bottom: 1em;}
h3 {font-size: 150%; margin-top: 2em;}
h4 {font-size: 120%;}
h5 {font-size: 110%;}
hr {width: 80%; margin-top: 2em; margin-bottom: 2em;}
div.chapter {page-break-before: always; margin-top: 4em;}
p {text-indent: 1em;
margin-top: 0.25em;
margin-bottom: 0.25em; }
p.poem {text-indent: 0%;
margin-left: 10%;
font-size: 90%;
margin-top: 1em;
margin-bottom: 1em; }
p.noindent {text-indent: 0% }
p.center {text-align: center;
text-indent: 0em;
margin-top: 1em;
margin-bottom: 1em; }
p.asterism {margin-left: 25%;
text-indent: 0%;
letter-spacing: 0.12em;
margin-top: 1em;
margin-bottom: 1em; }
div.fig { display:block;
margin:0 auto;
text-align:center; }
a:link {color:blue; text-decoration:none}
a:visited {color:blue; text-decoration:none}
a:hover {color:red}
</style>
</head>
<body>
<div style='text-align:center; font-size:1.2em; font-weight:bold;'>The Project Gutenberg eBook of Alice’s Adventures in Wonderland, by Lewis Carroll</div>
<div style='display:block; margin:1em 0'>
This eBook is for the use of anyone anywhere in the United States and
most other parts of the world at no cost and with almost no restrictions
whatsoever. You may copy it, give it away or re-use it under the terms
of the Project Gutenberg License included with this eBook or online
at <a href="https://www.gutenberg.org">www.gutenberg.org</a>. If you
are not located in the United States, you will have to check the laws of the
country where you are located before using this eBook.
</div>
<div style='display:block; margin-top:1em; margin-bottom:1em; margin-left:2em; text-indent:-2em'>Title: Alice’s Adventures in Wonderland</div>
<div style='display:block; margin-top:1em; margin-bottom:1em; margin-left:2em; text-indent:-2em'>Author: Lewis Carroll</div>
<div style='display:block;margin:1em 0'>Release Date: January, 1991 [eBook #11]<br />
[Most recently updated: October 12, 2020]</div>
<div style='display:block;margin:1em 0'>Language: English</div>
<div style='display:block;margin:1em 0'>Character set encoding: UTF-8</div>
<div style='display:block; margin-left:2em; text-indent:-2em'>Produced by: Arthur DiBianca and David Widger</div>
<div style='margin-top:2em;margin-bottom:4em'>*** START OF THE PROJECT GUTENBERG EBOOK ALICE’S ADVENTURES IN WONDERLAND ***</div>
<div class="fig" style="width:60%;">
<img src="images/cover.jpg" style="width:100%;" alt="cover" />
</div>
<h1>Alice&rsquo;s Adventures in Wonderland</h1>
<h2>by Lewis Carroll</h2>
<h4>THE MILLENNIUM FULCRUM EDITION 3.0</h4>
<hr />
<h2>Contents</h2>
<table summary="" style="margin-left: auto; margin-right: auto">
<tr>
<td> <a href="#chap01">CHAPTER I.</a></td><td>Down the Rabbit-Hole</td>
</tr>
<tr>
<td> <a href="#chap02">CHAPTER II.</a></td><td>The Pool of Tears</td>
</tr>
<tr>
<td> <a href="#chap03">CHAPTER III.</a></td><td>A Caucus-Race and a Long Tale</td>
</tr>
<tr>
<td> <a href="#chap04">CHAPTER IV.</a></td><td>The Rabbit Sends in a Little Bill</td>
</tr>
<tr>
<td> <a href="#chap05">CHAPTER V.</a></td><td>Advice from a Caterpillar</td>
</tr>
<tr>
<td> <a href="#chap06">CHAPTER VI.</a></td><td>Pig and Pepper</td>
</tr>
<tr>
<td> <a href="#chap07">CHAPTER VII.</a></td><td>A Mad Tea-Party</td>
</tr>
<tr>
<td> <a href="#chap08">CHAPTER VIII.</a></td><td>The Queen&rsquo;s Croquet-Ground</td>
</tr>
<tr>
<td> <a href="#chap09">CHAPTER IX.</a></td><td>The Mock Turtle&rsquo;s Story</td>
</tr>
<tr>
<td> <a href="#chap10">CHAPTER X.</a></td><td>The Lobster Quadrille</td>
</tr>
<tr>
<td> <a href="#chap11">CHAPTER XI.</a></td><td>Who Stole the Tarts?</td>
</tr>
<tr>
<td> <a href="#chap12">CHAPTER XII.</a></td><td>Alice&rsquo;s Evidence</td>
</tr>
</table>
<div class="chapter">
<h2><a name="chap01"></a>CHAPTER I.<br/>
Down the Rabbit-Hole</h2>
<p>
Alice was beginning to get very tired of sitting by her sister on the bank, and
of having nothing to do: once or twice she had peeped into the book her sister
was reading, but it had no pictures or conversations in it, &ldquo;and what is
the use of a book,&rdquo; thought Alice &ldquo;without pictures or
conversations?&rdquo;
</p>
<p>
So she was considering in her own mind (as well as she could, for the hot day
made her feel very sleepy and stupid), whether the pleasure of making a
daisy-chain would be worth the trouble of getting up and picking the daisies,
when suddenly a White Rabbit with pink eyes ran close by her.
</p>
<p>
There was nothing so <i>very</i> remarkable in that; nor did Alice think it so
<i>very</i> much out of the way to hear the Rabbit say to itself, &ldquo;Oh
dear! Oh dear! I shall be late!&rdquo; (when she thought it over afterwards, it
occurred to her that she ought to have wondered at this, but at the time it all
seemed quite natural); but when the Rabbit actually <i>took a watch out of its
waistcoat-pocket</i>, and looked at it, and then hurried on, Alice started to
her feet, for it flashed across her mind that she had never before seen a
rabbit with either a waistcoat-pocket, or a watch to take out of it, and
burning with curiosity, she ran across the field after it, and fortunately was
just in time to see it pop down a large rabbit-hole under the hedge.
</p>
<p>
In another moment down went Alice after it, never once considering how in the
world she was to get out again.
</p>
<p>
The rabbit-hole went straight on like a tunnel for some way, and then dipped
suddenly down, so suddenly that Alice had not a moment to think about stopping
herself before she found herself falling down a very deep well.
</p>
<p>
Either the well was very deep, or she fell very slowly, for she had plenty of
time as she went down to look about her and to wonder what was going to happen
next. First, she tried to look down and make out what she was coming to, but it
was too dark to see anything; then she looked at the sides of the well, and
noticed that they were filled with cupboards and book-shelves; here and there
she saw maps and pictures hung upon pegs. She took down a jar from one of the
shelves as she passed; it was labelled &ldquo;ORANGE MARMALADE&rdquo;, but to
her great disappointment it was empty: she did not like to drop the jar for
fear of killing somebody underneath, so managed to put it into one of the
cupboards as she fell past it.
</p>
<p>
&ldquo;Well!&rdquo; thought Alice to herself, &ldquo;after such a fall as this,
I shall think nothing of tumbling down stairs! How brave they&rsquo;ll all
think me at home! Why, I wouldn&rsquo;t say anything about it, even if I fell
off the top of the house!&rdquo; (Which was very likely true.)
</p>
<p>
Down, down, down. Would the fall <i>never</i> come to an end? &ldquo;I wonder
how many miles I&rsquo;ve fallen by this time?&rdquo; she said aloud. &ldquo;I
must be getting somewhere near the centre of the earth. Let me see: that would
be four thousand miles down, I think&mdash;&rdquo; (for, you see, Alice had
learnt several things of this sort in her lessons in the schoolroom, and though
this was not a <i>very</i> good opportunity for showing off her knowledge, as
there was no one to listen to her, still it was good practice to say it over)
&ldquo;&mdash;yes, that&rsquo;s about the right distance&mdash;but then I
wonder what Latitude or Longitude I&rsquo;ve got to?&rdquo; (Alice had no idea
what Latitude was, or Longitude either, but thought they were nice grand words
to say.)
</p>
<p>
Presently she began again. &ldquo;I wonder if I shall fall right <i>through</i>
the earth! How funny it&rsquo;ll seem to come out among the people that walk
with their heads downward! The Antipathies, I think&mdash;&rdquo; (she was
rather glad there <i>was</i> no one listening, this time, as it didn&rsquo;t
sound at all the right word) &ldquo;&mdash;but I shall have to ask them what
the name of the country is, you know. Please, Ma&rsquo;am, is this New Zealand
or Australia?&rdquo; (and she tried to curtsey as she spoke&mdash;fancy
<i>curtseying</i> as you&rsquo;re falling through the air! Do you think you
could manage it?) &ldquo;And what an ignorant little girl she&rsquo;ll think me
for asking! No, it&rsquo;ll never do to ask: perhaps I shall see it written up
somewhere.&rdquo;
</p>
<p>
Down, down, down. There was nothing else to do, so Alice soon began talking
again. &ldquo;Dinah&rsquo;ll miss me very much to-night, I should think!&rdquo;
(Dinah was the cat.) &ldquo;I hope they&rsquo;ll remember her saucer of milk at
tea-time. Dinah my dear! I wish you were down here with me! There are no mice
in the air, I&rsquo;m afraid, but you might catch a bat, and that&rsquo;s very
like a mouse, you know. But do cats eat bats, I wonder?&rdquo; And here Alice
began to get rather sleepy, and went on saying to herself, in a dreamy sort of
way, &ldquo;Do cats eat bats? Do cats eat bats?&rdquo; and sometimes, &ldquo;Do
bats eat cats?&rdquo; for, you see, as she couldn&rsquo;t answer either
question, it didn&rsquo;t much matter which way she put it. She felt that she
was dozing off, and had just begun to dream that she was walking hand in hand
with Dinah, and saying to her very earnestly, &ldquo;Now, Dinah, tell me the
truth: did you ever eat a bat?&rdquo; when suddenly, thump! thump! down she
came upon a heap of sticks and dry leaves, and the fall was over.
</p>
<p>
Alice was not a bit hurt, and she jumped up on to her feet in a moment: she
looked up, but it was all dark overhead; before her was another long passage,
and the White Rabbit was still in sight, hurrying down it. There was not a
moment to be lost: away went Alice like the wind, and was just in time to hear
it say, as it turned a corner, &ldquo;Oh my ears and whiskers, how late
it&rsquo;s getting!&rdquo; She was close behind it when she turned the corner,
but the Rabbit was no longer to be seen: she found herself in a long, low hall,
which was lit up by a row of lamps hanging from the roof.
</p>
<p>
There were doors all round the hall, but they were all locked; and when Alice
had been all the way down one side and up the other, trying every door, she
walked sadly down the middle, wondering how she was ever to get out again.
</p>
<p>
Suddenly she came upon a little three-legged table, all made of solid glass;
there was nothing on it except a tiny golden key, and Alice&rsquo;s first
thought was that it might belong to one of the doors of the hall; but, alas!
either the locks were too large, or the key was too small, but at any rate it
would not open any of them. However, on the second time round, she came upon a
low curtain she had not noticed before, and behind it was a little door about
fifteen inches high: she tried the little golden key in the lock, and to her
great delight it fitted!
</p>
<p>
Alice opened the door and found that it led into a small passage, not much
larger than a rat-hole: she knelt down and looked along the passage into the
loveliest garden you ever saw. How she longed to get out of that dark hall, and
wander about among those beds of bright flowers and those cool fountains, but
she could not even get her head through the doorway; &ldquo;and even if my head
would go through,&rdquo; thought poor Alice, &ldquo;it would be of very little
use without my shoulders. Oh, how I wish I could shut up like a telescope! I
think I could, if I only knew how to begin.&rdquo; For, you see, so many
out-of-the-way things had happened lately, that Alice had begun to think that
very few things indeed were really impossible.
</p>
<p>
There seemed to be no use in waiting by the little door, so she went back to
the table, half hoping she might find another key on it, or at any rate a book
of rules for shutting people up like telescopes: this time she found a little
bottle on it, (&ldquo;which certainly was not here before,&rdquo; said Alice,)
and round the neck of the bottle was a paper label, with the words &ldquo;DRINK
ME,&rdquo; beautifully printed on it in large letters.
</p>
<p>
It was all very well to say &ldquo;Drink me,&rdquo; but the wise little Alice
was not going to do <i>that</i> in a hurry. &ldquo;No, I&rsquo;ll look
first,&rdquo; she said, &ldquo;and see whether it&rsquo;s marked
&lsquo;<i>poison</i>&rsquo; or not&rdquo;; for she had read several nice little
histories about children who had got burnt, and eaten up by wild beasts and
other unpleasant things, all because they <i>would</i> not remember the simple
rules their friends had taught them: such as, that a red-hot poker will burn
you if you hold it too long; and that if you cut your finger <i>very</i> deeply
with a knife, it usually bleeds; and she had never forgotten that, if you drink
much from a bottle marked &ldquo;poison,&rdquo; it is almost certain to
disagree with you, sooner or later.
</p>
<p>
However, this bottle was <i>not</i> marked &ldquo;poison,&rdquo; so Alice
ventured to taste it, and finding it very nice, (it had, in fact, a sort of
mixed flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, and
hot buttered toast,) she very soon finished it off.
</p>
<p class="asterism">
*      *      *      *      *      *      *<br/>
<br/>
    *      *      *      *      *      *<br/>
<br/>
*      *      *      *      *      *      *<br/>
</p>
<p>
&ldquo;What a curious feeling!&rdquo; said Alice; &ldquo;I must be shutting up
like a telescope.&rdquo;
</p>
<p>
And so it was indeed: she was now only ten inches high, and her face brightened
up at the thought that she was now the right size for going through the little
door into that lovely garden. First, however, she waited for a few minutes to
see if she was going to shrink any further: she felt a little nervous about
this; &ldquo;for it might end, you know,&rdquo; said Alice to herself,
&ldquo;in my going out altogether, like a candle. I wonder what I should be
like then?&rdquo; And she tried to fancy what the flame of a candle is like
after the candle is blown out, for she could not remember ever having seen such
a thing.
</p>
<p>
After a while, finding that nothing more happened, she decided on going into
the garden at once; but, alas for poor Alice! when she got to the door, she
found she had forgotten the little golden key, and when she went back to the
table for it, she found she could not possibly reach it: she could see it quite
plainly through the glass, and she tried her best to climb up one of the legs
of the table, but it was too slippery; and when she had tired herself out with
trying, the poor little thing sat down and cried.
</p>
<p>
&ldquo;Come, there&rsquo;s no use in crying like that!&rdquo; said Alice to
herself, rather sharply; &ldquo;I advise you to leave off this minute!&rdquo;
She generally gave herself very good advice, (though she very seldom followed
it), and sometimes she scolded herself so severely as to bring tears into her
eyes; and once she remembered trying to box her own ears for having cheated
herself in a game of croquet she was playing against herself, for this curious
child was very fond of pretending to be two people. &ldquo;But it&rsquo;s no
use now,&rdquo; thought poor Alice, &ldquo;to pretend to be two people! Why,
there&rsquo;s hardly enough of me left to make <i>one</i> respectable
person!&rdquo;
</p>
<p>
Soon her eye fell on a little glass box that was lying under the table: she
opened it, and found in it a very small cake, on which the words &ldquo;EAT
ME&rdquo; were beautifully marked in currants. &ldquo;Well, I&rsquo;ll eat
it,&rdquo; said Alice, &ldquo;and if it makes me grow larger, I can reach the
key; and if it makes me grow smaller, I can creep under the door; so either way
I&rsquo;ll get into the garden, and I don&rsquo;t care which happens!&rdquo;
</p>
<p>
She ate a little bit, and said anxiously to herself, &ldquo;Which way? Which
way?&rdquo;, holding her hand on the top of her head to feel which way it was
growing, and she was quite surprised to find that she remained the same size:
to be sure, this generally happens when one eats cake, but Alice had got so
much into the way of expecting nothing but out-of-the-way things to happen,
that it seemed quite dull and stupid for life to go on in the common way.
</p>
<p>
So she set to work, and very soon finished off the cake.
</p>
<p class="asterism">
*      *      *      *      *      *      *<br/>
<br/>
    *      *      *      *      *      *<br/>
<br/>
*      *      *      *      *      *      *<br/>
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap02"></a>CHAPTER II.<br/>
The Pool of Tears</h2>
<p>
&ldquo;Curiouser and curiouser!&rdquo; cried Alice (she was so much surprised,
that for the moment she quite forgot how to speak good English); &ldquo;now
I&rsquo;m opening out like the largest telescope that ever was! Good-bye,
feet!&rdquo; (for when she looked down at her feet, they seemed to be almost
out of sight, they were getting so far off). &ldquo;Oh, my poor little feet, I
wonder who will put on your shoes and stockings for you now, dears? I&rsquo;m
sure <i>I</i> shan&rsquo;t be able! I shall be a great deal too far off to
trouble myself about you: you must manage the best way you can;&mdash;but I
must be kind to them,&rdquo; thought Alice, &ldquo;or perhaps they won&rsquo;t
walk the way I want to go! Let me see: I&rsquo;ll give them a new pair of boots
every Christmas.&rdquo;
</p>
<p>
And she went on planning to herself how she would manage it. &ldquo;They must
go by the carrier,&rdquo; she thought; &ldquo;and how funny it&rsquo;ll seem,
sending presents to one&rsquo;s own feet! And how odd the directions will look!
</p>
<pre xml:space="preserve">
<i>Alice&rsquo;s Right Foot, Esq.,
Hearthrug,
near the Fender,</i>
(<i>with Alice&rsquo;s love</i>).
</pre>
<p class="noindent">
Oh dear, what nonsense I&rsquo;m talking!&rdquo;
</p>
<p>
Just then her head struck against the roof of the hall: in fact she was now
more than nine feet high, and she at once took up the little golden key and
hurried off to the garden door.
</p>
<p>
Poor Alice! It was as much as she could do, lying down on one side, to look
through into the garden with one eye; but to get through was more hopeless than
ever: she sat down and began to cry again.
</p>
<p>
&ldquo;You ought to be ashamed of yourself,&rdquo; said Alice, &ldquo;a great
girl like you,&rdquo; (she might well say this), &ldquo;to go on crying in this
way! Stop this moment, I tell you!&rdquo; But she went on all the same,
shedding gallons of tears, until there was a large pool all round her, about
four inches deep and reaching half down the hall.
</p>
<p>
After a time she heard a little pattering of feet in the distance, and she
hastily dried her eyes to see what was coming. It was the White Rabbit
returning, splendidly dressed, with a pair of white kid gloves in one hand and
a large fan in the other: he came trotting along in a great hurry, muttering to
himself as he came, &ldquo;Oh! the Duchess, the Duchess! Oh! won&rsquo;t she be
savage if I&rsquo;ve kept her waiting!&rdquo; Alice felt so desperate that she
was ready to ask help of any one; so, when the Rabbit came near her, she began,
in a low, timid voice, &ldquo;If you please, sir&mdash;&rdquo; The Rabbit
started violently, dropped the white kid gloves and the fan, and skurried away
into the darkness as hard as he could go.
</p>
<p>
Alice took up the fan and gloves, and, as the hall was very hot, she kept
fanning herself all the time she went on talking: &ldquo;Dear, dear! How queer
everything is to-day! And yesterday things went on just as usual. I wonder if
I&rsquo;ve been changed in the night? Let me think: was I the same when I got
up this morning? I almost think I can remember feeling a little different. But
if I&rsquo;m not the same, the next question is, Who in the world am I? Ah,
<i>that&rsquo;s</i> the great puzzle!&rdquo; And she began thinking over all
the children she knew that were of the same age as herself, to see if she could
have been changed for any of them.
</p>
<p>
&ldquo;I&rsquo;m sure I&rsquo;m not Ada,&rdquo; she said, &ldquo;for her hair
goes in such long ringlets, and mine doesn&rsquo;t go in ringlets at all; and
I&rsquo;m sure I can&rsquo;t be Mabel, for I know all sorts of things, and she,
oh! she knows such a very little! Besides, <i>she&rsquo;s</i> she, and
<i>I&rsquo;m</i> I, and&mdash;oh dear, how puzzling it all is! I&rsquo;ll try
if I know all the things I used to know. Let me see: four times five is twelve,
and four times six is thirteen, and four times seven is&mdash;oh dear! I shall
never get to twenty at that rate! However, the Multiplication Table
doesn&rsquo;t signify: let&rsquo;s try Geography. London is the capital of
Paris, and Paris is the capital of Rome, and Rome&mdash;no, <i>that&rsquo;s</i>
all wrong, I&rsquo;m certain! I must have been changed for Mabel! I&rsquo;ll
try and say &lsquo;<i>How doth the little</i>&mdash;&rsquo;&rdquo; and she
crossed her hands on her lap as if she were saying lessons, and began to repeat
it, but her voice sounded hoarse and strange, and the words did not come the
same as they used to do:&mdash;
</p>
<p class="poem">
&ldquo;How doth the little crocodile<br/>
    Improve his shining tail,<br/>
And pour the waters of the Nile<br/>
    On every golden scale!<br/>
<br/>
&ldquo;How cheerfully he seems to grin,<br/>
    How neatly spread his claws,<br/>
And welcome little fishes in<br/>
    With gently smiling jaws!&rdquo;
</p>
<p>
&ldquo;I&rsquo;m sure those are not the right words,&rdquo; said poor Alice,
and her eyes filled with tears again as she went on, &ldquo;I must be Mabel
after all, and I shall have to go and live in that poky little house, and have
next to no toys to play with, and oh! ever so many lessons to learn! No,
I&rsquo;ve made up my mind about it; if I&rsquo;m Mabel, I&rsquo;ll stay down
here! It&rsquo;ll be no use their putting their heads down and saying
&lsquo;Come up again, dear!&rsquo; I shall only look up and say &lsquo;Who am I
then? Tell me that first, and then, if I like being that person, I&rsquo;ll
come up: if not, I&rsquo;ll stay down here till I&rsquo;m somebody
else&rsquo;&mdash;but, oh dear!&rdquo; cried Alice, with a sudden burst of
tears, &ldquo;I do wish they <i>would</i> put their heads down! I am so
<i>very</i> tired of being all alone here!&rdquo;
</p>
<p>
As she said this she looked down at her hands, and was surprised to see that
she had put on one of the Rabbit&rsquo;s little white kid gloves while she was
talking. &ldquo;How <i>can</i> I have done that?&rdquo; she thought. &ldquo;I
must be growing small again.&rdquo; She got up and went to the table to measure
herself by it, and found that, as nearly as she could guess, she was now about
two feet high, and was going on shrinking rapidly: she soon found out that the
cause of this was the fan she was holding, and she dropped it hastily, just in
time to avoid shrinking away altogether.
</p>
<p>
&ldquo;That <i>was</i> a narrow escape!&rdquo; said Alice, a good deal
frightened at the sudden change, but very glad to find herself still in
existence; &ldquo;and now for the garden!&rdquo; and she ran with all speed
back to the little door: but, alas! the little door was shut again, and the
little golden key was lying on the glass table as before, &ldquo;and things are
worse than ever,&rdquo; thought the poor child, &ldquo;for I never was so small
as this before, never! And I declare it&rsquo;s too bad, that it is!&rdquo;
</p>
<p>
As she said these words her foot slipped, and in another moment, splash! she
was up to her chin in salt water. Her first idea was that she had somehow
fallen into the sea, &ldquo;and in that case I can go back by railway,&rdquo;
she said to herself. (Alice had been to the seaside once in her life, and had
come to the general conclusion, that wherever you go to on the English coast
you find a number of bathing machines in the sea, some children digging in the
sand with wooden spades, then a row of lodging houses, and behind them a
railway station.) However, she soon made out that she was in the pool of tears
which she had wept when she was nine feet high.
</p>
<p>
&ldquo;I wish I hadn&rsquo;t cried so much!&rdquo; said Alice, as she swam
about, trying to find her way out. &ldquo;I shall be punished for it now, I
suppose, by being drowned in my own tears! That <i>will</i> be a queer thing,
to be sure! However, everything is queer to-day.&rdquo;
</p>
<p>
Just then she heard something splashing about in the pool a little way off, and
she swam nearer to make out what it was: at first she thought it must be a
walrus or hippopotamus, but then she remembered how small she was now, and she
soon made out that it was only a mouse that had slipped in like herself.
</p>
<p>
&ldquo;Would it be of any use, now,&rdquo; thought Alice, &ldquo;to speak to
this mouse? Everything is so out-of-the-way down here, that I should think very
likely it can talk: at any rate, there&rsquo;s no harm in trying.&rdquo; So she
began: &ldquo;O Mouse, do you know the way out of this pool? I am very tired of
swimming about here, O Mouse!&rdquo; (Alice thought this must be the right way
of speaking to a mouse: she had never done such a thing before, but she
remembered having seen in her brother&rsquo;s Latin Grammar, &ldquo;A
mouse&mdash;of a mouse&mdash;to a mouse&mdash;a mouse&mdash;O mouse!&rdquo;)
The Mouse looked at her rather inquisitively, and seemed to her to wink with
one of its little eyes, but it said nothing.
</p>
<p>
&ldquo;Perhaps it doesn&rsquo;t understand English,&rdquo; thought Alice;
&ldquo;I daresay it&rsquo;s a French mouse, come over with William the
Conqueror.&rdquo; (For, with all her knowledge of history, Alice had no very
clear notion how long ago anything had happened.) So she began again: &ldquo;Où
est ma chatte?&rdquo; which was the first sentence in her French lesson-book.
The Mouse gave a sudden leap out of the water, and seemed to quiver all over
with fright. &ldquo;Oh, I beg your pardon!&rdquo; cried Alice hastily, afraid
that she had hurt the poor animal&rsquo;s feelings. &ldquo;I quite forgot you
didn&rsquo;t like cats.&rdquo;
</p>
<p>
&ldquo;Not like cats!&rdquo; cried the Mouse, in a shrill, passionate voice.
&ldquo;Would <i>you</i> like cats if you were me?&rdquo;
</p>
<p>
&ldquo;Well, perhaps not,&rdquo; said Alice in a soothing tone:
&ldquo;don&rsquo;t be angry about it. And yet I wish I could show you our cat
Dinah: I think you&rsquo;d take a fancy to cats if you could only see her. She
is such a dear quiet thing,&rdquo; Alice went on, half to herself, as she swam
lazily about in the pool, &ldquo;and she sits purring so nicely by the fire,
licking her paws and washing her face&mdash;and she is such a nice soft thing
to nurse&mdash;and she&rsquo;s such a capital one for catching mice&mdash;oh, I
beg your pardon!&rdquo; cried Alice again, for this time the Mouse was
bristling all over, and she felt certain it must be really offended. &ldquo;We
won&rsquo;t talk about her any more if you&rsquo;d rather not.&rdquo;
</p>
<p>
&ldquo;We indeed!&rdquo; cried the Mouse, who was trembling down to the end of
his tail. &ldquo;As if <i>I</i> would talk on such a subject! Our family always
<i>hated</i> cats: nasty, low, vulgar things! Don&rsquo;t let me hear the name
again!&rdquo;
</p>
<p>
&ldquo;I won&rsquo;t indeed!&rdquo; said Alice, in a great hurry to change the
subject of conversation. &ldquo;Are you&mdash;are you fond&mdash;of&mdash;of
dogs?&rdquo; The Mouse did not answer, so Alice went on eagerly: &ldquo;There
is such a nice little dog near our house I should like to show you! A little
bright-eyed terrier, you know, with oh, such long curly brown hair! And
it&rsquo;ll fetch things when you throw them, and it&rsquo;ll sit up and beg
for its dinner, and all sorts of things&mdash;I can&rsquo;t remember half of
them&mdash;and it belongs to a farmer, you know, and he says it&rsquo;s so
useful, it&rsquo;s worth a hundred pounds! He says it kills all the rats
and&mdash;oh dear!&rdquo; cried Alice in a sorrowful tone, &ldquo;I&rsquo;m
afraid I&rsquo;ve offended it again!&rdquo; For the Mouse was swimming away
from her as hard as it could go, and making quite a commotion in the pool as it
went.
</p>
<p>
So she called softly after it, &ldquo;Mouse dear! Do come back again, and we
won&rsquo;t talk about cats or dogs either, if you don&rsquo;t like
them!&rdquo; When the Mouse heard this, it turned round and swam slowly back to
her: its face was quite pale (with passion, Alice thought), and it said in a
low trembling voice, &ldquo;Let us get to the shore, and then I&rsquo;ll tell
you my history, and you&rsquo;ll understand why it is I hate cats and
dogs.&rdquo;
</p>
<p>
It was high time to go, for the pool was getting quite crowded with the birds
and animals that had fallen into it: there were a Duck and a Dodo, a Lory and
an Eaglet, and several other curious creatures. Alice led the way, and the
whole party swam to the shore.
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap03"></a>CHAPTER III.<br/>
A Caucus-Race and a Long Tale</h2>
<p>
They were indeed a queer-looking party that assembled on the bank&mdash;the
birds with draggled feathers, the animals with their fur clinging close to
them, and all dripping wet, cross, and uncomfortable.
</p>
<p>
The first question of course was, how to get dry again: they had a consultation
about this, and after a few minutes it seemed quite natural to Alice to find
herself talking familiarly with them, as if she had known them all her life.
Indeed, she had quite a long argument with the Lory, who at last turned sulky,
and would only say, &ldquo;I am older than you, and must know better;&rdquo;
and this Alice would not allow without knowing how old it was, and, as the Lory
positively refused to tell its age, there was no more to be said.
</p>
<p>
At last the Mouse, who seemed to be a person of authority among them, called
out, &ldquo;Sit down, all of you, and listen to me! <i>I&rsquo;ll</i> soon make
you dry enough!&rdquo; They all sat down at once, in a large ring, with the
Mouse in the middle. Alice kept her eyes anxiously fixed on it, for she felt
sure she would catch a bad cold if she did not get dry very soon.
</p>
<p>
&ldquo;Ahem!&rdquo; said the Mouse with an important air, &ldquo;are you all
ready? This is the driest thing I know. Silence all round, if you please!
&lsquo;William the Conqueror, whose cause was favoured by the pope, was soon
submitted to by the English, who wanted leaders, and had been of late much
accustomed to usurpation and conquest. Edwin and Morcar, the earls of Mercia
and Northumbria&mdash;&rsquo;&rdquo;
</p>
<p>
&ldquo;Ugh!&rdquo; said the Lory, with a shiver.
</p>
<p>
&ldquo;I beg your pardon!&rdquo; said the Mouse, frowning, but very politely:
&ldquo;Did you speak?&rdquo;
</p>
<p>
&ldquo;Not I!&rdquo; said the Lory hastily.
</p>
<p>
&ldquo;I thought you did,&rdquo; said the Mouse. &ldquo;&mdash;I proceed.
&lsquo;Edwin and Morcar, the earls of Mercia and Northumbria, declared for him:
and even Stigand, the patriotic archbishop of Canterbury, found it
advisable&mdash;&rsquo;&rdquo;
</p>
<p>
&ldquo;Found <i>what</i>?&rdquo; said the Duck.
</p>
<p>
&ldquo;Found <i>it</i>,&rdquo; the Mouse replied rather crossly: &ldquo;of
course you know what &lsquo;it&rsquo; means.&rdquo;
</p>
<p>
&ldquo;I know what &lsquo;it&rsquo; means well enough, when <i>I</i> find a
thing,&rdquo; said the Duck: &ldquo;it&rsquo;s generally a frog or a worm. The
question is, what did the archbishop find?&rdquo;
</p>
<p>
The Mouse did not notice this question, but hurriedly went on,
&ldquo;&lsquo;&mdash;found it advisable to go with Edgar Atheling to meet
William and offer him the crown. William&rsquo;s conduct at first was moderate.
But the insolence of his Normans&mdash;&rsquo; How are you getting on now, my
dear?&rdquo; it continued, turning to Alice as it spoke.
</p>
<p>
&ldquo;As wet as ever,&rdquo; said Alice in a melancholy tone: &ldquo;it
doesn&rsquo;t seem to dry me at all.&rdquo;
</p>
<p>
&ldquo;In that case,&rdquo; said the Dodo solemnly, rising to its feet,
&ldquo;I move that the meeting adjourn, for the immediate adoption of more
energetic remedies&mdash;&rdquo;
</p>
<p>
&ldquo;Speak English!&rdquo; said the Eaglet. &ldquo;I don&rsquo;t know the
meaning of half those long words, and, what&rsquo;s more, I don&rsquo;t believe
you do either!&rdquo; And the Eaglet bent down its head to hide a smile: some
of the other birds tittered audibly.
</p>
<p>
&ldquo;What I was going to say,&rdquo; said the Dodo in an offended tone,
&ldquo;was, that the best thing to get us dry would be a Caucus-race.&rdquo;
</p>
<p>
&ldquo;What <i>is</i> a Caucus-race?&rdquo; said Alice; not that she wanted
much to know, but the Dodo had paused as if it thought that <i>somebody</i>
ought to speak, and no one else seemed inclined to say anything.
</p>
<p>
&ldquo;Why,&rdquo; said the Dodo, &ldquo;the best way to explain it is to do
it.&rdquo; (And, as you might like to try the thing yourself, some winter day,
I will tell you how the Dodo managed it.)
</p>
<p>
First it marked out a race-course, in a sort of circle, (&ldquo;the exact shape
doesn&rsquo;t matter,&rdquo; it said,) and then all the party were placed along
the course, here and there. There was no &ldquo;One, two, three, and
away,&rdquo; but they began running when they liked, and left off when they
liked, so that it was not easy to know when the race was over. However, when
they had been running half an hour or so, and were quite dry again, the Dodo
suddenly called out &ldquo;The race is over!&rdquo; and they all crowded round
it, panting, and asking, &ldquo;But who has won?&rdquo;
</p>
<p>
This question the Dodo could not answer without a great deal of thought, and it
sat for a long time with one finger pressed upon its forehead (the position in
which you usually see Shakespeare, in the pictures of him), while the rest
waited in silence. At last the Dodo said, &ldquo;<i>Everybody</i> has won, and
all must have prizes.&rdquo;
</p>
<p>
&ldquo;But who is to give the prizes?&rdquo; quite a chorus of voices asked.
</p>
<p>
&ldquo;Why, <i>she</i>, of course,&rdquo; said the Dodo, pointing to Alice with
one finger; and the whole party at once crowded round her, calling out in a
confused way, &ldquo;Prizes! Prizes!&rdquo;
</p>
<p>
Alice had no idea what to do, and in despair she put her hand in her pocket,
and pulled out a box of comfits, (luckily the salt water had not got into it),
and handed them round as prizes. There was exactly one a-piece, all round.
</p>
<p>
&ldquo;But she must have a prize herself, you know,&rdquo; said the Mouse.
</p>
<p>
&ldquo;Of course,&rdquo; the Dodo replied very gravely. &ldquo;What else have
you got in your pocket?&rdquo; he went on, turning to Alice.
</p>
<p>
&ldquo;Only a thimble,&rdquo; said Alice sadly.
</p>
<p>
&ldquo;Hand it over here,&rdquo; said the Dodo.
</p>
<p>
Then they all crowded round her once more, while the Dodo solemnly presented
the thimble, saying &ldquo;We beg your acceptance of this elegant
thimble;&rdquo; and, when it had finished this short speech, they all cheered.
</p>
<p>
Alice thought the whole thing very absurd, but they all looked so grave that
she did not dare to laugh; and, as she could not think of anything to say, she
simply bowed, and took the thimble, looking as solemn as she could.
</p>
<p>
The next thing was to eat the comfits: this caused some noise and confusion, as
the large birds complained that they could not taste theirs, and the small ones
choked and had to be patted on the back. However, it was over at last, and they
sat down again in a ring, and begged the Mouse to tell them something more.
</p>
<p>
&ldquo;You promised to tell me your history, you know,&rdquo; said Alice,
&ldquo;and why it is you hate&mdash;C and D,&rdquo; she added in a whisper,
half afraid that it would be offended again.
</p>
<p>
&ldquo;Mine is a long and a sad tale!&rdquo; said the Mouse, turning to Alice,
and sighing.
</p>
<p>
&ldquo;It <i>is</i> a long tail, certainly,&rdquo; said Alice, looking down
with wonder at the Mouse&rsquo;s tail; &ldquo;but why do you call it
sad?&rdquo; And she kept on puzzling about it while the Mouse was speaking, so
that her idea of the tale was something like this:&mdash;
</p>
<pre xml:space="preserve">
&ldquo;Fury said to a
mouse, That he
met in the
house,
&lsquo;Let us
both go to
law: <i>I</i> will
prosecute
<i>you</i>.&mdash;Come,
I&rsquo;ll take no
denial; We
must have a
trial: For
really this
morning I&rsquo;ve
nothing
to do.&rsquo;
Said the
mouse to the
cur, &lsquo;Such
a trial,
dear sir,
With
no jury
or judge,
would be
wasting
our
breath.&rsquo;
&lsquo;I&rsquo;ll be
judge, I&rsquo;ll
be jury,&rsquo;
Said
cunning
old Fury:
&lsquo;I&rsquo;ll
try the
whole
cause,
and
condemn
you
to
death.&rsquo;&rdquo;
</pre>
<p>
&ldquo;You are not attending!&rdquo; said the Mouse to Alice severely.
&ldquo;What are you thinking of?&rdquo;
</p>
<p>
&ldquo;I beg your pardon,&rdquo; said Alice very humbly: &ldquo;you had got to
the fifth bend, I think?&rdquo;
</p>
<p>
&ldquo;I had <i>not!</i>&rdquo; cried the Mouse, sharply and very angrily.
</p>
<p>
&ldquo;A knot!&rdquo; said Alice, always ready to make herself useful, and
looking anxiously about her. &ldquo;Oh, do let me help to undo it!&rdquo;
</p>
<p>
&ldquo;I shall do nothing of the sort,&rdquo; said the Mouse, getting up and
walking away. &ldquo;You insult me by talking such nonsense!&rdquo;
</p>
<p>
&ldquo;I didn&rsquo;t mean it!&rdquo; pleaded poor Alice. &ldquo;But
you&rsquo;re so easily offended, you know!&rdquo;
</p>
<p>
The Mouse only growled in reply.
</p>
<p>
&ldquo;Please come back and finish your story!&rdquo; Alice called after it;
and the others all joined in chorus, &ldquo;Yes, please do!&rdquo; but the
Mouse only shook its head impatiently, and walked a little quicker.
</p>
<p>
&ldquo;What a pity it wouldn&rsquo;t stay!&rdquo; sighed the Lory, as soon as
it was quite out of sight; and an old Crab took the opportunity of saying to
her daughter &ldquo;Ah, my dear! Let this be a lesson to you never to lose
<i>your</i> temper!&rdquo; &ldquo;Hold your tongue, Ma!&rdquo; said the young
Crab, a little snappishly. &ldquo;You&rsquo;re enough to try the patience of an
oyster!&rdquo;
</p>
<p>
&ldquo;I wish I had our Dinah here, I know I do!&rdquo; said Alice aloud,
addressing nobody in particular. &ldquo;She&rsquo;d soon fetch it back!&rdquo;
</p>
<p>
&ldquo;And who is Dinah, if I might venture to ask the question?&rdquo; said
the Lory.
</p>
<p>
Alice replied eagerly, for she was always ready to talk about her pet:
&ldquo;Dinah&rsquo;s our cat. And she&rsquo;s such a capital one for catching
mice you can&rsquo;t think! And oh, I wish you could see her after the birds!
Why, she&rsquo;ll eat a little bird as soon as look at it!&rdquo;
</p>
<p>
This speech caused a remarkable sensation among the party. Some of the birds
hurried off at once: one old Magpie began wrapping itself up very carefully,
remarking, &ldquo;I really must be getting home; the night-air doesn&rsquo;t
suit my throat!&rdquo; and a Canary called out in a trembling voice to its
children, &ldquo;Come away, my dears! It&rsquo;s high time you were all in
bed!&rdquo; On various pretexts they all moved off, and Alice was soon left
alone.
</p>
<p>
&ldquo;I wish I hadn&rsquo;t mentioned Dinah!&rdquo; she said to herself in a
melancholy tone. &ldquo;Nobody seems to like her, down here, and I&rsquo;m sure
she&rsquo;s the best cat in the world! Oh, my dear Dinah! I wonder if I shall
ever see you any more!&rdquo; And here poor Alice began to cry again, for she
felt very lonely and low-spirited. In a little while, however, she again heard
a little pattering of footsteps in the distance, and she looked up eagerly,
half hoping that the Mouse had changed his mind, and was coming back to finish
his story.
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap04"></a>CHAPTER IV.<br/>
The Rabbit Sends in a Little Bill</h2>
<p>
It was the White Rabbit, trotting slowly back again, and looking anxiously
about as it went, as if it had lost something; and she heard it muttering to
itself &ldquo;The Duchess! The Duchess! Oh my dear paws! Oh my fur and
whiskers! She&rsquo;ll get me executed, as sure as ferrets are ferrets! Where
<i>can</i> I have dropped them, I wonder?&rdquo; Alice guessed in a moment that
it was looking for the fan and the pair of white kid gloves, and she very
good-naturedly began hunting about for them, but they were nowhere to be
seen&mdash;everything seemed to have changed since her swim in the pool, and
the great hall, with the glass table and the little door, had vanished
completely.
</p>
<p>
Very soon the Rabbit noticed Alice, as she went hunting about, and called out
to her in an angry tone, &ldquo;Why, Mary Ann, what <i>are</i> you doing out
here? Run home this moment, and fetch me a pair of gloves and a fan! Quick,
now!&rdquo; And Alice was so much frightened that she ran off at once in the
direction it pointed to, without trying to explain the mistake it had made.
</p>
<p>
&ldquo;He took me for his housemaid,&rdquo; she said to herself as she ran.
&ldquo;How surprised he&rsquo;ll be when he finds out who I am! But I&rsquo;d
better take him his fan and gloves&mdash;that is, if I can find them.&rdquo; As
she said this, she came upon a neat little house, on the door of which was a
bright brass plate with the name &ldquo;W. RABBIT,&rdquo; engraved upon it. She
went in without knocking, and hurried upstairs, in great fear lest she should
meet the real Mary Ann, and be turned out of the house before she had found the
fan and gloves.
</p>
<p>
&ldquo;How queer it seems,&rdquo; Alice said to herself, &ldquo;to be going
messages for a rabbit! I suppose Dinah&rsquo;ll be sending me on messages
next!&rdquo; And she began fancying the sort of thing that would happen:
&ldquo;&lsquo;Miss Alice! Come here directly, and get ready for your
walk!&rsquo; &lsquo;Coming in a minute, nurse! But I&rsquo;ve got to see that
the mouse doesn&rsquo;t get out.&rsquo; Only I don&rsquo;t think,&rdquo; Alice
went on, &ldquo;that they&rsquo;d let Dinah stop in the house if it began
ordering people about like that!&rdquo;
</p>
<p>
By this time she had found her way into a tidy little room with a table in the
window, and on it (as she had hoped) a fan and two or three pairs of tiny white
kid gloves: she took up the fan and a pair of the gloves, and was just going to
leave the room, when her eye fell upon a little bottle that stood near the
looking-glass. There was no label this time with the words &ldquo;DRINK
ME,&rdquo; but nevertheless she uncorked it and put it to her lips. &ldquo;I
know <i>something</i> interesting is sure to happen,&rdquo; she said to
herself, &ldquo;whenever I eat or drink anything; so I&rsquo;ll just see what
this bottle does. I do hope it&rsquo;ll make me grow large again, for really
I&rsquo;m quite tired of being such a tiny little thing!&rdquo;
</p>
<p>
It did so indeed, and much sooner than she had expected: before she had drunk
half the bottle, she found her head pressing against the ceiling, and had to
stoop to save her neck from being broken. She hastily put down the bottle,
saying to herself &ldquo;That&rsquo;s quite enough&mdash;I hope I shan&rsquo;t
grow any more&mdash;As it is, I can&rsquo;t get out at the door&mdash;I do wish
I hadn&rsquo;t drunk quite so much!&rdquo;
</p>
<p>
Alas! it was too late to wish that! She went on growing, and growing, and very
soon had to kneel down on the floor: in another minute there was not even room
for this, and she tried the effect of lying down with one elbow against the
door, and the other arm curled round her head. Still she went on growing, and,
as a last resource, she put one arm out of the window, and one foot up the
chimney, and said to herself &ldquo;Now I can do no more, whatever happens.
What <i>will</i> become of me?&rdquo;
</p>
<p>
Luckily for Alice, the little magic bottle had now had its full effect, and she
grew no larger: still it was very uncomfortable, and, as there seemed to be no
sort of chance of her ever getting out of the room again, no wonder she felt
unhappy.
</p>
<p>
&ldquo;It was much pleasanter at home,&rdquo; thought poor Alice, &ldquo;when
one wasn&rsquo;t always growing larger and smaller, and being ordered about by
mice and rabbits. I almost wish I hadn&rsquo;t gone down that
rabbit-hole&mdash;and yet&mdash;and yet&mdash;it&rsquo;s rather curious, you
know, this sort of life! I do wonder what <i>can</i> have happened to me! When
I used to read fairy-tales, I fancied that kind of thing never happened, and
now here I am in the middle of one! There ought to be a book written about me,
that there ought! And when I grow up, I&rsquo;ll write one&mdash;but I&rsquo;m
grown up now,&rdquo; she added in a sorrowful tone; &ldquo;at least
there&rsquo;s no room to grow up any more <i>here</i>.&rdquo;
</p>
<p>
&ldquo;But then,&rdquo; thought Alice, &ldquo;shall I <i>never</i> get any
older than I am now? That&rsquo;ll be a comfort, one way&mdash;never to be an
old woman&mdash;but then&mdash;always to have lessons to learn! Oh, I
shouldn&rsquo;t like <i>that!</i>&rdquo;
</p>
<p>
&ldquo;Oh, you foolish Alice!&rdquo; she answered herself. &ldquo;How can you
learn lessons in here? Why, there&rsquo;s hardly room for <i>you</i>, and no
room at all for any lesson-books!&rdquo;
</p>
<p>
And so she went on, taking first one side and then the other, and making quite
a conversation of it altogether; but after a few minutes she heard a voice
outside, and stopped to listen.
</p>
<p>
&ldquo;Mary Ann! Mary Ann!&rdquo; said the voice. &ldquo;Fetch me my gloves
this moment!&rdquo; Then came a little pattering of feet on the stairs. Alice
knew it was the Rabbit coming to look for her, and she trembled till she shook
the house, quite forgetting that she was now about a thousand times as large as
the Rabbit, and had no reason to be afraid of it.
</p>
<p>
Presently the Rabbit came up to the door, and tried to open it; but, as the
door opened inwards, and Alice&rsquo;s elbow was pressed hard against it, that
attempt proved a failure. Alice heard it say to itself &ldquo;Then I&rsquo;ll
go round and get in at the window.&rdquo;
</p>
<p>
&ldquo;<i>That</i> you won&rsquo;t!&rdquo; thought Alice, and, after waiting
till she fancied she heard the Rabbit just under the window, she suddenly
spread out her hand, and made a snatch in the air. She did not get hold of
anything, but she heard a little shriek and a fall, and a crash of broken
glass, from which she concluded that it was just possible it had fallen into a
cucumber-frame, or something of the sort.
</p>
<p>
Next came an angry voice&mdash;the Rabbit&rsquo;s&mdash;&ldquo;Pat! Pat! Where
are you?&rdquo; And then a voice she had never heard before, &ldquo;Sure then
I&rsquo;m here! Digging for apples, yer honour!&rdquo;
</p>
<p>
&ldquo;Digging for apples, indeed!&rdquo; said the Rabbit angrily. &ldquo;Here!
Come and help me out of <i>this!</i>&rdquo; (Sounds of more broken glass.)
</p>
<p>
&ldquo;Now tell me, Pat, what&rsquo;s that in the window?&rdquo;
</p>
<p>
&ldquo;Sure, it&rsquo;s an arm, yer honour!&rdquo; (He pronounced it
&ldquo;arrum.&rdquo;)
</p>
<p>
&ldquo;An arm, you goose! Who ever saw one that size? Why, it fills the whole
window!&rdquo;
</p>
<p>
&ldquo;Sure, it does, yer honour: but it&rsquo;s an arm for all that.&rdquo;
</p>
<p>
&ldquo;Well, it&rsquo;s got no business there, at any rate: go and take it
away!&rdquo;
</p>
<p>
There was a long silence after this, and Alice could only hear whispers now and
then; such as, &ldquo;Sure, I don&rsquo;t like it, yer honour, at all, at
all!&rdquo; &ldquo;Do as I tell you, you coward!&rdquo; and at last she spread
out her hand again, and made another snatch in the air. This time there were
<i>two</i> little shrieks, and more sounds of broken glass. &ldquo;What a
number of cucumber-frames there must be!&rdquo; thought Alice. &ldquo;I wonder
what they&rsquo;ll do next! As for pulling me out of the window, I only wish
they <i>could!</i> I&rsquo;m sure <i>I</i> don&rsquo;t want to stay in here any
longer!&rdquo;
</p>
<p>
She waited for some time without hearing anything more: at last came a rumbling
of little cartwheels, and the sound of a good many voices all talking together:
she made out the words: &ldquo;Where&rsquo;s the other ladder?&mdash;Why, I
hadn&rsquo;t to bring but one; Bill&rsquo;s got the other&mdash;Bill! fetch it
here, lad!&mdash;Here, put &rsquo;em up at this corner&mdash;No, tie &rsquo;em
together first&mdash;they don&rsquo;t reach half high enough yet&mdash;Oh!
they&rsquo;ll do well enough; don&rsquo;t be particular&mdash;Here, Bill! catch
hold of this rope&mdash;Will the roof bear?&mdash;Mind that loose
slate&mdash;Oh, it&rsquo;s coming down! Heads below!&rdquo; (a loud
crash)&mdash;&ldquo;Now, who did that?&mdash;It was Bill, I
fancy&mdash;Who&rsquo;s to go down the chimney?&mdash;Nay, <i>I</i>
shan&rsquo;t! <i>You</i> do it!&mdash;<i>That</i> I won&rsquo;t,
then!&mdash;Bill&rsquo;s to go down&mdash;Here, Bill! the master says
you&rsquo;re to go down the chimney!&rdquo;
</p>
<p>
&ldquo;Oh! So Bill&rsquo;s got to come down the chimney, has he?&rdquo; said
Alice to herself. &ldquo;Shy, they seem to put everything upon Bill! I
wouldn&rsquo;t be in Bill&rsquo;s place for a good deal: this fireplace is
narrow, to be sure; but I <i>think</i> I can kick a little!&rdquo;
</p>
<p>
She drew her foot as far down the chimney as she could, and waited till she
heard a little animal (she couldn&rsquo;t guess of what sort it was) scratching
and scrambling about in the chimney close above her: then, saying to herself
&ldquo;This is Bill,&rdquo; she gave one sharp kick, and waited to see what
would happen next.
</p>
<p>
The first thing she heard was a general chorus of &ldquo;There goes
Bill!&rdquo; then the Rabbit&rsquo;s voice along&mdash;&ldquo;Catch him, you by
the hedge!&rdquo; then silence, and then another confusion of
voices&mdash;&ldquo;Hold up his head&mdash;Brandy now&mdash;Don&rsquo;t choke
him&mdash;How was it, old fellow? What happened to you? Tell us all about
it!&rdquo;
</p>
<p>
Last came a little feeble, squeaking voice, (&ldquo;That&rsquo;s Bill,&rdquo;
thought Alice,) &ldquo;Well, I hardly know&mdash;No more, thank ye; I&rsquo;m
better now&mdash;but I&rsquo;m a deal too flustered to tell you&mdash;all I
know is, something comes at me like a Jack-in-the-box, and up I goes like a
sky-rocket!&rdquo;
</p>
<p>
&ldquo;So you did, old fellow!&rdquo; said the others.
</p>
<p>
&ldquo;We must burn the house down!&rdquo; said the Rabbit&rsquo;s voice; and
Alice called out as loud as she could, &ldquo;If you do, I&rsquo;ll set Dinah
at you!&rdquo;
</p>
<p>
There was a dead silence instantly, and Alice thought to herself, &ldquo;I
wonder what they <i>will</i> do next! If they had any sense, they&rsquo;d take
the roof off.&rdquo; After a minute or two, they began moving about again, and
Alice heard the Rabbit say, &ldquo;A barrowful will do, to begin with.&rdquo;
</p>
<p>
&ldquo;A barrowful of <i>what?</i>&rdquo; thought Alice; but she had not long
to doubt, for the next moment a shower of little pebbles came rattling in at
the window, and some of them hit her in the face. &ldquo;I&rsquo;ll put a stop
to this,&rdquo; she said to herself, and shouted out, &ldquo;You&rsquo;d better
not do that again!&rdquo; which produced another dead silence.
</p>
<p>
Alice noticed with some surprise that the pebbles were all turning into little
cakes as they lay on the floor, and a bright idea came into her head. &ldquo;If
I eat one of these cakes,&rdquo; she thought, &ldquo;it&rsquo;s sure to make
<i>some</i> change in my size; and as it can&rsquo;t possibly make me larger,
it must make me smaller, I suppose.&rdquo;
</p>
<p>
So she swallowed one of the cakes, and was delighted to find that she began
shrinking directly. As soon as she was small enough to get through the door,
she ran out of the house, and found quite a crowd of little animals and birds
waiting outside. The poor little Lizard, Bill, was in the middle, being held up
by two guinea-pigs, who were giving it something out of a bottle. They all made
a rush at Alice the moment she appeared; but she ran off as hard as she could,
and soon found herself safe in a thick wood.
</p>
<p>
&ldquo;The first thing I&rsquo;ve got to do,&rdquo; said Alice to herself, as
she wandered about in the wood, &ldquo;is to grow to my right size again; and
the second thing is to find my way into that lovely garden. I think that will
be the best plan.&rdquo;
</p>
<p>
It sounded an excellent plan, no doubt, and very neatly and simply arranged;
the only difficulty was, that she had not the smallest idea how to set about
it; and while she was peering about anxiously among the trees, a little sharp
bark just over her head made her look up in a great hurry.
</p>
<p>
An enormous puppy was looking down at her with large round eyes, and feebly
stretching out one paw, trying to touch her. &ldquo;Poor little thing!&rdquo;
said Alice, in a coaxing tone, and she tried hard to whistle to it; but she was
terribly frightened all the time at the thought that it might be hungry, in
which case it would be very likely to eat her up in spite of all her coaxing.
</p>
<p>
Hardly knowing what she did, she picked up a little bit of stick, and held it
out to the puppy; whereupon the puppy jumped into the air off all its feet at
once, with a yelp of delight, and rushed at the stick, and made believe to
worry it; then Alice dodged behind a great thistle, to keep herself from being
run over; and the moment she appeared on the other side, the puppy made another
rush at the stick, and tumbled head over heels in its hurry to get hold of it;
then Alice, thinking it was very like having a game of play with a cart-horse,
and expecting every moment to be trampled under its feet, ran round the thistle
again; then the puppy began a series of short charges at the stick, running a
very little way forwards each time and a long way back, and barking hoarsely
all the while, till at last it sat down a good way off, panting, with its
tongue hanging out of its mouth, and its great eyes half shut.
</p>
<p>
This seemed to Alice a good opportunity for making her escape; so she set off
at once, and ran till she was quite tired and out of breath, and till the
puppy&rsquo;s bark sounded quite faint in the distance.
</p>
<p>
&ldquo;And yet what a dear little puppy it was!&rdquo; said Alice, as she leant
against a buttercup to rest herself, and fanned herself with one of the leaves:
&ldquo;I should have liked teaching it tricks very much, if&mdash;if I&rsquo;d
only been the right size to do it! Oh dear! I&rsquo;d nearly forgotten that
I&rsquo;ve got to grow up again! Let me see&mdash;how <i>is</i> it to be
managed? I suppose I ought to eat or drink something or other; but the great
question is, what?&rdquo;
</p>
<p>
The great question certainly was, what? Alice looked all round her at the
flowers and the blades of grass, but she did not see anything that looked like
the right thing to eat or drink under the circumstances. There was a large
mushroom growing near her, about the same height as herself; and when she had
looked under it, and on both sides of it, and behind it, it occurred to her
that she might as well look and see what was on the top of it.
</p>
<p>
She stretched herself up on tiptoe, and peeped over the edge of the mushroom,
and her eyes immediately met those of a large blue caterpillar, that was
sitting on the top with its arms folded, quietly smoking a long hookah, and
taking not the smallest notice of her or of anything else.
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap05"></a>CHAPTER V.<br/>
Advice from a Caterpillar</h2>
<p>
The Caterpillar and Alice looked at each other for some time in silence: at
last the Caterpillar took the hookah out of its mouth, and addressed her in a
languid, sleepy voice.
</p>
<p>
&ldquo;Who are <i>you?</i>&rdquo; said the Caterpillar.
</p>
<p>
This was not an encouraging opening for a conversation. Alice replied, rather
shyly, &ldquo;I&mdash;I hardly know, sir, just at present&mdash;at least I know
who I <i>was</i> when I got up this morning, but I think I must have been
changed several times since then.&rdquo;
</p>
<p>
&ldquo;What do you mean by that?&rdquo; said the Caterpillar sternly.
&ldquo;Explain yourself!&rdquo;
</p>
<p>
&ldquo;I can&rsquo;t explain <i>myself</i>, I&rsquo;m afraid, sir,&rdquo; said
Alice, &ldquo;because I&rsquo;m not myself, you see.&rdquo;
</p>
<p>
&ldquo;I don&rsquo;t see,&rdquo; said the Caterpillar.
</p>
<p>
&ldquo;I&rsquo;m afraid I can&rsquo;t put it more clearly,&rdquo; Alice replied
very politely, &ldquo;for I can&rsquo;t understand it myself to begin with; and
being so many different sizes in a day is very confusing.&rdquo;
</p>
<p>
&ldquo;It isn&rsquo;t,&rdquo; said the Caterpillar.
</p>
<p>
&ldquo;Well, perhaps you haven&rsquo;t found it so yet,&rdquo; said Alice;
&ldquo;but when you have to turn into a chrysalis&mdash;you will some day, you
know&mdash;and then after that into a butterfly, I should think you&rsquo;ll
feel it a little queer, won&rsquo;t you?&rdquo;
</p>
<p>
&ldquo;Not a bit,&rdquo; said the Caterpillar.
</p>
<p>
&ldquo;Well, perhaps your feelings may be different,&rdquo; said Alice;
&ldquo;all I know is, it would feel very queer to <i>me</i>.&rdquo;
</p>
<p>
&ldquo;You!&rdquo; said the Caterpillar contemptuously. &ldquo;Who are
<i>you?</i>&rdquo;
</p>
<p>
Which brought them back again to the beginning of the conversation. Alice felt
a little irritated at the Caterpillar&rsquo;s making such <i>very</i> short
remarks, and she drew herself up and said, very gravely, &ldquo;I think, you
ought to tell me who <i>you</i> are, first.&rdquo;
</p>
<p>
&ldquo;Why?&rdquo; said the Caterpillar.
</p>
<p>
Here was another puzzling question; and as Alice could not think of any good
reason, and as the Caterpillar seemed to be in a <i>very</i> unpleasant state
of mind, she turned away.
</p>
<p>
&ldquo;Come back!&rdquo; the Caterpillar called after her. &ldquo;I&rsquo;ve
something important to say!&rdquo;
</p>
<p>
This sounded promising, certainly: Alice turned and came back again.
</p>
<p>
&ldquo;Keep your temper,&rdquo; said the Caterpillar.
</p>
<p>
&ldquo;Is that all?&rdquo; said Alice, swallowing down her anger as well as she
could.
</p>
<p>
&ldquo;No,&rdquo; said the Caterpillar.
</p>
<p>
Alice thought she might as well wait, as she had nothing else to do, and
perhaps after all it might tell her something worth hearing. For some minutes
it puffed away without speaking, but at last it unfolded its arms, took the
hookah out of its mouth again, and said, &ldquo;So you think you&rsquo;re
changed, do you?&rdquo;
</p>
<p>
&ldquo;I&rsquo;m afraid I am, sir,&rdquo; said Alice; &ldquo;I can&rsquo;t
remember things as I used&mdash;and I don&rsquo;t keep the same size for ten
minutes together!&rdquo;
</p>
<p>
&ldquo;Can&rsquo;t remember <i>what</i> things?&rdquo; said the Caterpillar.
</p>
<p>
&ldquo;Well, I&rsquo;ve tried to say &ldquo;How doth the little busy
bee,&rdquo; but it all came different!&rdquo; Alice replied in a very
melancholy voice.
</p>
<p>
&ldquo;Repeat, &ldquo;<i>You are old, Father William</i>,&rsquo;&rdquo; said
the Caterpillar.
</p>
<p>
Alice folded her hands, and began:&mdash;
</p>
<p class="poem">
&ldquo;You are old, Father William,&rdquo; the young man said,<br/>
    &ldquo;And your hair has become very white;<br/>
And yet you incessantly stand on your head&mdash;<br/>
    Do you think, at your age, it is right?&rdquo;<br/>
<br/>
&ldquo;In my youth,&rdquo; Father William replied to his son,<br/>
    &ldquo;I feared it might injure the brain;<br/>
But, now that I&rsquo;m perfectly sure I have none,<br/>
    Why, I do it again and again.&rdquo;<br/>
<br/>
&ldquo;You are old,&rdquo; said the youth, &ldquo;as I mentioned before,<br/>
    And have grown most uncommonly fat;<br/>
Yet you turned a back-somersault in at the door&mdash;<br/>
    Pray, what is the reason of that?&rdquo;<br/>
<br/>
&ldquo;In my youth,&rdquo; said the sage, as he shook his grey locks,<br/>
    &ldquo;I kept all my limbs very supple<br/>
By the use of this ointment&mdash;one shilling the box&mdash;<br/>
    Allow me to sell you a couple?&rdquo;<br/>
<br/>
&ldquo;You are old,&rdquo; said the youth, &ldquo;and your jaws are too weak<br/>
    For anything tougher than suet;<br/>
Yet you finished the goose, with the bones and the beak&mdash;<br/>
    Pray, how did you manage to do it?&rdquo;<br/>
<br/>
&ldquo;In my youth,&rdquo; said his father, &ldquo;I took to the law,<br/>
    And argued each case with my wife;<br/>
And the muscular strength, which it gave to my jaw,<br/>
    Has lasted the rest of my life.&rdquo;<br/>
<br/>
&ldquo;You are old,&rdquo; said the youth, &ldquo;one would hardly suppose<br/>
    That your eye was as steady as ever;<br/>
Yet you balanced an eel on the end of your nose&mdash;<br/>
    What made you so awfully clever?&rdquo;<br/>
<br/>
&ldquo;I have answered three questions, and that is enough,&rdquo;<br/>
    Said his father; &ldquo;don&rsquo;t give yourself airs!<br/>
Do you think I can listen all day to such stuff?<br/>
    Be off, or I&rsquo;ll kick you down stairs!&rdquo;
</p>
<p>
&ldquo;That is not said right,&rdquo; said the Caterpillar.
</p>
<p>
&ldquo;Not <i>quite</i> right, I&rsquo;m afraid,&rdquo; said Alice, timidly;
&ldquo;some of the words have got altered.&rdquo;
</p>
<p>
&ldquo;It is wrong from beginning to end,&rdquo; said the Caterpillar
decidedly, and there was silence for some minutes.
</p>
<p>
The Caterpillar was the first to speak.
</p>
<p>
&ldquo;What size do you want to be?&rdquo; it asked.
</p>
<p>
&ldquo;Oh, I&rsquo;m not particular as to size,&rdquo; Alice hastily replied;
&ldquo;only one doesn&rsquo;t like changing so often, you know.&rdquo;
</p>
<p>
&ldquo;I <i>don&rsquo;t</i> know,&rdquo; said the Caterpillar.
</p>
<p>
Alice said nothing: she had never been so much contradicted in her life before,
and she felt that she was losing her temper.
</p>
<p>
&ldquo;Are you content now?&rdquo; said the Caterpillar.
</p>
<p>
&ldquo;Well, I should like to be a <i>little</i> larger, sir, if you
wouldn&rsquo;t mind,&rdquo; said Alice: &ldquo;three inches is such a wretched
height to be.&rdquo;
</p>
<p>
&ldquo;It is a very good height indeed!&rdquo; said the Caterpillar angrily,
rearing itself upright as it spoke (it was exactly three inches high).
</p>
<p>
&ldquo;But I&rsquo;m not used to it!&rdquo; pleaded poor Alice in a piteous
tone. And she thought of herself, &ldquo;I wish the creatures wouldn&rsquo;t be
so easily offended!&rdquo;
</p>
<p>
&ldquo;You&rsquo;ll get used to it in time,&rdquo; said the Caterpillar; and it
put the hookah into its mouth and began smoking again.
</p>
<p>
This time Alice waited patiently until it chose to speak again. In a minute or
two the Caterpillar took the hookah out of its mouth and yawned once or twice,
and shook itself. Then it got down off the mushroom, and crawled away in the
grass, merely remarking as it went, &ldquo;One side will make you grow taller,
and the other side will make you grow shorter.&rdquo;
</p>
<p>
&ldquo;One side of <i>what?</i> The other side of <i>what?</i>&rdquo; thought
Alice to herself.
</p>
<p>
&ldquo;Of the mushroom,&rdquo; said the Caterpillar, just as if she had asked
it aloud; and in another moment it was out of sight.
</p>
<p>
Alice remained looking thoughtfully at the mushroom for a minute, trying to
make out which were the two sides of it; and as it was perfectly round, she
found this a very difficult question. However, at last she stretched her arms
round it as far as they would go, and broke off a bit of the edge with each
hand.
</p>
<p>
&ldquo;And now which is which?&rdquo; she said to herself, and nibbled a little
of the right-hand bit to try the effect: the next moment she felt a violent
blow underneath her chin: it had struck her foot!
</p>
<p>
She was a good deal frightened by this very sudden change, but she felt that
there was no time to be lost, as she was shrinking rapidly; so she set to work
at once to eat some of the other bit. Her chin was pressed so closely against
her foot, that there was hardly room to open her mouth; but she did it at last,
and managed to swallow a morsel of the lefthand bit.
</p>
<p class="asterism">
*      *      *      *      *      *      *<br/>
<br/>
    *      *      *      *      *      *<br/>
<br/>
*      *      *      *      *      *      *<br/>
</p>
<p>
&ldquo;Come, my head&rsquo;s free at last!&rdquo; said Alice in a tone of
delight, which changed into alarm in another moment, when she found that her
shoulders were nowhere to be found: all she could see, when she looked down,
was an immense length of neck, which seemed to rise like a stalk out of a sea
of green leaves that lay far below her.
</p>
<p>
&ldquo;What <i>can</i> all that green stuff be?&rdquo; said Alice. &ldquo;And
where <i>have</i> my shoulders got to? And oh, my poor hands, how is it I
can&rsquo;t see you?&rdquo; She was moving them about as she spoke, but no
result seemed to follow, except a little shaking among the distant green
leaves.
</p>
<p>
As there seemed to be no chance of getting her hands up to her head, she tried
to get her head down to them, and was delighted to find that her neck would
bend about easily in any direction, like a serpent. She had just succeeded in
curving it down into a graceful zigzag, and was going to dive in among the
leaves, which she found to be nothing but the tops of the trees under which she
had been wandering, when a sharp hiss made her draw back in a hurry: a large
pigeon had flown into her face, and was beating her violently with its wings.
</p>
<p>
&ldquo;Serpent!&rdquo; screamed the Pigeon.
</p>
<p>
&ldquo;I&rsquo;m <i>not</i> a serpent!&rdquo; said Alice indignantly.
&ldquo;Let me alone!&rdquo;
</p>
<p>
&ldquo;Serpent, I say again!&rdquo; repeated the Pigeon, but in a more subdued
tone, and added with a kind of sob, &ldquo;I&rsquo;ve tried every way, and
nothing seems to suit them!&rdquo;
</p>
<p>
&ldquo;I haven&rsquo;t the least idea what you&rsquo;re talking about,&rdquo;
said Alice.
</p>
<p>
&ldquo;I&rsquo;ve tried the roots of trees, and I&rsquo;ve tried banks, and
I&rsquo;ve tried hedges,&rdquo; the Pigeon went on, without attending to her;
&ldquo;but those serpents! There&rsquo;s no pleasing them!&rdquo;
</p>
<p>
Alice was more and more puzzled, but she thought there was no use in saying
anything more till the Pigeon had finished.
</p>
<p>
&ldquo;As if it wasn&rsquo;t trouble enough hatching the eggs,&rdquo; said the
Pigeon; &ldquo;but I must be on the look-out for serpents night and day! Why, I
haven&rsquo;t had a wink of sleep these three weeks!&rdquo;
</p>
<p>
&ldquo;I&rsquo;m very sorry you&rsquo;ve been annoyed,&rdquo; said Alice, who
was beginning to see its meaning.
</p>
<p>
&ldquo;And just as I&rsquo;d taken the highest tree in the wood,&rdquo;
continued the Pigeon, raising its voice to a shriek, &ldquo;and just as I was
thinking I should be free of them at last, they must needs come wriggling down
from the sky! Ugh, Serpent!&rdquo;
</p>
<p>
&ldquo;But I&rsquo;m <i>not</i> a serpent, I tell you!&rdquo; said Alice.
&ldquo;I&rsquo;m a&mdash;I&rsquo;m a&mdash;&rdquo;
</p>
<p>
&ldquo;Well! <i>What</i> are you?&rdquo; said the Pigeon. &ldquo;I can see
you&rsquo;re trying to invent something!&rdquo;
</p>
<p>
&ldquo;I&mdash;I&rsquo;m a little girl,&rdquo; said Alice, rather doubtfully,
as she remembered the number of changes she had gone through that day.
</p>
<p>
&ldquo;A likely story indeed!&rdquo; said the Pigeon in a tone of the deepest
contempt. &ldquo;I&rsquo;ve seen a good many little girls in my time, but never
<i>one</i> with such a neck as that! No, no! You&rsquo;re a serpent; and
there&rsquo;s no use denying it. I suppose you&rsquo;ll be telling me next that
you never tasted an egg!&rdquo;
</p>
<p>
&ldquo;I <i>have</i> tasted eggs, certainly,&rdquo; said Alice, who was a very
truthful child; &ldquo;but little girls eat eggs quite as much as serpents do,
you know.&rdquo;
</p>
<p>
&ldquo;I don&rsquo;t believe it,&rdquo; said the Pigeon; &ldquo;but if they do,
why then they&rsquo;re a kind of serpent, that&rsquo;s all I can say.&rdquo;
</p>
<p>
This was such a new idea to Alice, that she was quite silent for a minute or
two, which gave the Pigeon the opportunity of adding, &ldquo;You&rsquo;re
looking for eggs, I know <i>that</i> well enough; and what does it matter to me
whether you&rsquo;re a little girl or a serpent?&rdquo;
</p>
<p>
&ldquo;It matters a good deal to <i>me</i>,&rdquo; said Alice hastily;
&ldquo;but I&rsquo;m not looking for eggs, as it happens; and if I was, I
shouldn&rsquo;t want <i>yours</i>: I don&rsquo;t like them raw.&rdquo;
</p>
<p>
&ldquo;Well, be off, then!&rdquo; said the Pigeon in a sulky tone, as it
settled down again into its nest. Alice crouched down among the trees as well
as she could, for her neck kept getting entangled among the branches, and every
now and then she had to stop and untwist it. After a while she remembered that
she still held the pieces of mushroom in her hands, and she set to work very
carefully, nibbling first at one and then at the other, and growing sometimes
taller and sometimes shorter, until she had succeeded in bringing herself down
to her usual height.
</p>
<p>
It was so long since she had been anything near the right size, that it felt
quite strange at first; but she got used to it in a few minutes, and began
talking to herself, as usual. &ldquo;Come, there&rsquo;s half my plan done now!
How puzzling all these changes are! I&rsquo;m never sure what I&rsquo;m going
to be, from one minute to another! However, I&rsquo;ve got back to my right
size: the next thing is, to get into that beautiful garden&mdash;how <i>is</i>
that to be done, I wonder?&rdquo; As she said this, she came suddenly upon an
open place, with a little house in it about four feet high. &ldquo;Whoever
lives there,&rdquo; thought Alice, &ldquo;it&rsquo;ll never do to come upon
them <i>this</i> size: why, I should frighten them out of their wits!&rdquo; So
she began nibbling at the righthand bit again, and did not venture to go near
the house till she had brought herself down to nine inches high.
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap06"></a>CHAPTER VI.<br/>
Pig and Pepper</h2>
<p>
For a minute or two she stood looking at the house, and wondering what to do
next, when suddenly a footman in livery came running out of the wood&mdash;(she
considered him to be a footman because he was in livery: otherwise, judging by
his face only, she would have called him a fish)&mdash;and rapped loudly at the
door with his knuckles. It was opened by another footman in livery, with a
round face, and large eyes like a frog; and both footmen, Alice noticed, had
powdered hair that curled all over their heads. She felt very curious to know
what it was all about, and crept a little way out of the wood to listen.
</p>
<p>
The Fish-Footman began by producing from under his arm a great letter, nearly
as large as himself, and this he handed over to the other, saying, in a solemn
tone, &ldquo;For the Duchess. An invitation from the Queen to play
croquet.&rdquo; The Frog-Footman repeated, in the same solemn tone, only
changing the order of the words a little, &ldquo;From the Queen. An invitation
for the Duchess to play croquet.&rdquo;
</p>
<p>
Then they both bowed low, and their curls got entangled together.
</p>
<p>
Alice laughed so much at this, that she had to run back into the wood for fear
of their hearing her; and when she next peeped out the Fish-Footman was gone,
and the other was sitting on the ground near the door, staring stupidly up into
the sky.
</p>
<p>
Alice went timidly up to the door, and knocked.
</p>
<p>
&ldquo;There&rsquo;s no sort of use in knocking,&rdquo; said the Footman,
&ldquo;and that for two reasons. First, because I&rsquo;m on the same side of
the door as you are; secondly, because they&rsquo;re making such a noise
inside, no one could possibly hear you.&rdquo; And certainly there <i>was</i> a
most extraordinary noise going on within&mdash;a constant howling and sneezing,
and every now and then a great crash, as if a dish or kettle had been broken to
pieces.
</p>
<p>
&ldquo;Please, then,&rdquo; said Alice, &ldquo;how am I to get in?&rdquo;
</p>
<p>
&ldquo;There might be some sense in your knocking,&rdquo; the Footman went on
without attending to her, &ldquo;if we had the door between us. For instance,
if you were <i>inside</i>, you might knock, and I could let you out, you
know.&rdquo; He was looking up into the sky all the time he was speaking, and
this Alice thought decidedly uncivil. &ldquo;But perhaps he can&rsquo;t help
it,&rdquo; she said to herself; &ldquo;his eyes are so <i>very</i> nearly at
the top of his head. But at any rate he might answer questions.&mdash;How am I
to get in?&rdquo; she repeated, aloud.
</p>
<p>
&ldquo;I shall sit here,&rdquo; the Footman remarked, &ldquo;till
tomorrow&mdash;&rdquo;
</p>
<p>
At this moment the door of the house opened, and a large plate came skimming
out, straight at the Footman&rsquo;s head: it just grazed his nose, and broke
to pieces against one of the trees behind him.
</p>
<p>
&ldquo;&mdash;or next day, maybe,&rdquo; the Footman continued in the same
tone, exactly as if nothing had happened.
</p>
<p>
&ldquo;How am I to get in?&rdquo; asked Alice again, in a louder tone.
</p>
<p>
&ldquo;<i>Are</i> you to get in at all?&rdquo; said the Footman.
&ldquo;That&rsquo;s the first question, you know.&rdquo;
</p>
<p>
It was, no doubt: only Alice did not like to be told so. &ldquo;It&rsquo;s
really dreadful,&rdquo; she muttered to herself, &ldquo;the way all the
creatures argue. It&rsquo;s enough to drive one crazy!&rdquo;
</p>
<p>
The Footman seemed to think this a good opportunity for repeating his remark,
with variations. &ldquo;I shall sit here,&rdquo; he said, &ldquo;on and off,
for days and days.&rdquo;
</p>
<p>
&ldquo;But what am <i>I</i> to do?&rdquo; said Alice.
</p>
<p>
&ldquo;Anything you like,&rdquo; said the Footman, and began whistling.
</p>
<p>
&ldquo;Oh, there&rsquo;s no use in talking to him,&rdquo; said Alice
desperately: &ldquo;he&rsquo;s perfectly idiotic!&rdquo; And she opened the
door and went in.
</p>
<p>
The door led right into a large kitchen, which was full of smoke from one end
to the other: the Duchess was sitting on a three-legged stool in the middle,
nursing a baby; the cook was leaning over the fire, stirring a large cauldron
which seemed to be full of soup.
</p>
<p>
&ldquo;There&rsquo;s certainly too much pepper in that soup!&rdquo; Alice said
to herself, as well as she could for sneezing.
</p>
<p>
There was certainly too much of it in the air. Even the Duchess sneezed
occasionally; and as for the baby, it was sneezing and howling alternately
without a moment&rsquo;s pause. The only things in the kitchen that did not
sneeze, were the cook, and a large cat which was sitting on the hearth and
grinning from ear to ear.
</p>
<p>
&ldquo;Please would you tell me,&rdquo; said Alice, a little timidly, for she
was not quite sure whether it was good manners for her to speak first,
&ldquo;why your cat grins like that?&rdquo;
</p>
<p>
&ldquo;It&rsquo;s a Cheshire cat,&rdquo; said the Duchess, &ldquo;and
that&rsquo;s why. Pig!&rdquo;
</p>
<p>
She said the last word with such sudden violence that Alice quite jumped; but
she saw in another moment that it was addressed to the baby, and not to her, so
she took courage, and went on again:&mdash;
</p>
<p>
&ldquo;I didn&rsquo;t know that Cheshire cats always grinned; in fact, I
didn&rsquo;t know that cats <i>could</i> grin.&rdquo;
</p>
<p>
&ldquo;They all can,&rdquo; said the Duchess; &ldquo;and most of &rsquo;em
do.&rdquo;
</p>
<p>
&ldquo;I don&rsquo;t know of any that do,&rdquo; Alice said very politely,
feeling quite pleased to have got into a conversation.
</p>
<p>
&ldquo;You don&rsquo;t know much,&rdquo; said the Duchess; &ldquo;and
that&rsquo;s a fact.&rdquo;
</p>
<p>
Alice did not at all like the tone of this remark, and thought it would be as
well to introduce some other subject of conversation. While she was trying to
fix on one, the cook took the cauldron of soup off the fire, and at once set to
work throwing everything within her reach at the Duchess and the baby&mdash;the
fire-irons came first; then followed a shower of saucepans, plates, and dishes.
The Duchess took no notice of them even when they hit her; and the baby was
howling so much already, that it was quite impossible to say whether the blows
hurt it or not.
</p>
<p>
&ldquo;Oh, <i>please</i> mind what you&rsquo;re doing!&rdquo; cried Alice,
jumping up and down in an agony of terror. &ldquo;Oh, there goes his
<i>precious</i> nose!&rdquo; as an unusually large saucepan flew close by it,
and very nearly carried it off.
</p>
<p>
&ldquo;If everybody minded their own business,&rdquo; the Duchess said in a
hoarse growl, &ldquo;the world would go round a deal faster than it
does.&rdquo;
</p>
<p>
&ldquo;Which would <i>not</i> be an advantage,&rdquo; said Alice, who felt very
glad to get an opportunity of showing off a little of her knowledge.
&ldquo;Just think of what work it would make with the day and night! You see
the earth takes twenty-four hours to turn round on its axis&mdash;&rdquo;
</p>
<p>
&ldquo;Talking of axes,&rdquo; said the Duchess, &ldquo;chop off her
head!&rdquo;
</p>
<p>
Alice glanced rather anxiously at the cook, to see if she meant to take the
hint; but the cook was busily stirring the soup, and seemed not to be
listening, so she went on again: &ldquo;Twenty-four hours, I <i>think</i>; or
is it twelve? I&mdash;&rdquo;
</p>
<p>
&ldquo;Oh, don&rsquo;t bother <i>me</i>,&rdquo; said the Duchess; &ldquo;I
never could abide figures!&rdquo; And with that she began nursing her child
again, singing a sort of lullaby to it as she did so, and giving it a violent
shake at the end of every line:
</p>
<p class="poem">
&ldquo;Speak roughly to your little boy,<br/>
    And beat him when he sneezes:<br/>
He only does it to annoy,<br/>
    Because he knows it teases.&rdquo;
</p>
<p class="center">
CHORUS.<br/>
(In which the cook and the baby joined):
</p>
<p class="poem">
&ldquo;Wow! wow! wow!&rdquo;
</p>
<p>
While the Duchess sang the second verse of the song, she kept tossing the baby
violently up and down, and the poor little thing howled so, that Alice could
hardly hear the words:&mdash;
</p>
<p class="poem">
&ldquo;I speak severely to my boy,<br/>
    I beat him when he sneezes;<br/>
For he can thoroughly enjoy<br/>
    The pepper when he pleases!&rdquo;
</p>
<p class="center">
CHORUS.
</p>
<p class="poem">
&ldquo;Wow! wow! wow!&rdquo;
</p>
<p>
&ldquo;Here! you may nurse it a bit, if you like!&rdquo; the Duchess said to
Alice, flinging the baby at her as she spoke. &ldquo;I must go and get ready to
play croquet with the Queen,&rdquo; and she hurried out of the room. The cook
threw a frying-pan after her as she went out, but it just missed her.
</p>
<p>
Alice caught the baby with some difficulty, as it was a queer-shaped little
creature, and held out its arms and legs in all directions, &ldquo;just like a
star-fish,&rdquo; thought Alice. The poor little thing was snorting like a
steam-engine when she caught it, and kept doubling itself up and straightening
itself out again, so that altogether, for the first minute or two, it was as
much as she could do to hold it.
</p>
<p>
As soon as she had made out the proper way of nursing it, (which was to twist
it up into a sort of knot, and then keep tight hold of its right ear and left
foot, so as to prevent its undoing itself,) she carried it out into the open
air. &ldquo;If I don&rsquo;t take this child away with me,&rdquo; thought
Alice, &ldquo;they&rsquo;re sure to kill it in a day or two: wouldn&rsquo;t it
be murder to leave it behind?&rdquo; She said the last words out loud, and the
little thing grunted in reply (it had left off sneezing by this time).
&ldquo;Don&rsquo;t grunt,&rdquo; said Alice; &ldquo;that&rsquo;s not at all a
proper way of expressing yourself.&rdquo;
</p>
<p>
The baby grunted again, and Alice looked very anxiously into its face to see
what was the matter with it. There could be no doubt that it had a <i>very</i>
turn-up nose, much more like a snout than a real nose; also its eyes were
getting extremely small for a baby: altogether Alice did not like the look of
the thing at all. &ldquo;But perhaps it was only sobbing,&rdquo; she thought,
and looked into its eyes again, to see if there were any tears.
</p>
<p>
No, there were no tears. &ldquo;If you&rsquo;re going to turn into a pig, my
dear,&rdquo; said Alice, seriously, &ldquo;I&rsquo;ll have nothing more to do
with you. Mind now!&rdquo; The poor little thing sobbed again (or grunted, it
was impossible to say which), and they went on for some while in silence.
</p>
<p>
Alice was just beginning to think to herself, &ldquo;Now, what am I to do with
this creature when I get it home?&rdquo; when it grunted again, so violently,
that she looked down into its face in some alarm. This time there could be
<i>no</i> mistake about it: it was neither more nor less than a pig, and she
felt that it would be quite absurd for her to carry it further.
</p>
<p>
So she set the little creature down, and felt quite relieved to see it trot
away quietly into the wood. &ldquo;If it had grown up,&rdquo; she said to
herself, &ldquo;it would have made a dreadfully ugly child: but it makes rather
a handsome pig, I think.&rdquo; And she began thinking over other children she
knew, who might do very well as pigs, and was just saying to herself, &ldquo;if
one only knew the right way to change them&mdash;&rdquo; when she was a little
startled by seeing the Cheshire Cat sitting on a bough of a tree a few yards
off.
</p>
<p>
The Cat only grinned when it saw Alice. It looked good-natured, she thought:
still it had <i>very</i> long claws and a great many teeth, so she felt that it
ought to be treated with respect.
</p>
<p>
&ldquo;Cheshire Puss,&rdquo; she began, rather timidly, as she did not at all
know whether it would like the name: however, it only grinned a little wider.
&ldquo;Come, it&rsquo;s pleased so far,&rdquo; thought Alice, and she went on.
&ldquo;Would you tell me, please, which way I ought to go from here?&rdquo;
</p>
<p>
&ldquo;That depends a good deal on where you want to get to,&rdquo; said the
Cat.
</p>
<p>
&ldquo;I don&rsquo;t much care where&mdash;&rdquo; said Alice.
</p>
<p>
&ldquo;Then it doesn&rsquo;t matter which way you go,&rdquo; said the Cat.
</p>
<p>
&ldquo;&mdash;so long as I get <i>somewhere</i>,&rdquo; Alice added as an
explanation.
</p>
<p>
&ldquo;Oh, you&rsquo;re sure to do that,&rdquo; said the Cat, &ldquo;if you
only walk long enough.&rdquo;
</p>
<p>
Alice felt that this could not be denied, so she tried another question.
&ldquo;What sort of people live about here?&rdquo;
</p>
<p>
&ldquo;In <i>that</i> direction,&rdquo; the Cat said, waving its right paw
round, &ldquo;lives a Hatter: and in <i>that</i> direction,&rdquo; waving the
other paw, &ldquo;lives a March Hare. Visit either you like: they&rsquo;re both
mad.&rdquo;
</p>
<p>
&ldquo;But I don&rsquo;t want to go among mad people,&rdquo; Alice remarked.
</p>
<p>
&ldquo;Oh, you can&rsquo;t help that,&rdquo; said the Cat: &ldquo;we&rsquo;re
all mad here. I&rsquo;m mad. You&rsquo;re mad.&rdquo;
</p>
<p>
&ldquo;How do you know I&rsquo;m mad?&rdquo; said Alice.
</p>
<p>
&ldquo;You must be,&rdquo; said the Cat, &ldquo;or you wouldn&rsquo;t have come
here.&rdquo;
</p>
<p>
Alice didn&rsquo;t think that proved it at all; however, she went on &ldquo;And
how do you know that you&rsquo;re mad?&rdquo;
</p>
<p>
&ldquo;To begin with,&rdquo; said the Cat, &ldquo;a dog&rsquo;s not mad. You
grant that?&rdquo;
</p>
<p>
&ldquo;I suppose so,&rdquo; said Alice.
</p>
<p>
&ldquo;Well, then,&rdquo; the Cat went on, &ldquo;you see, a dog growls when
it&rsquo;s angry, and wags its tail when it&rsquo;s pleased. Now <i>I</i> growl
when I&rsquo;m pleased, and wag my tail when I&rsquo;m angry. Therefore
I&rsquo;m mad.&rdquo;
</p>
<p>
&ldquo;<i>I</i> call it purring, not growling,&rdquo; said Alice.
</p>
<p>
&ldquo;Call it what you like,&rdquo; said the Cat. &ldquo;Do you play croquet
with the Queen to-day?&rdquo;
</p>
<p>
&ldquo;I should like it very much,&rdquo; said Alice, &ldquo;but I
haven&rsquo;t been invited yet.&rdquo;
</p>
<p>
&ldquo;You&rsquo;ll see me there,&rdquo; said the Cat, and vanished.
</p>
<p>
Alice was not much surprised at this, she was getting so used to queer things
happening. While she was looking at the place where it had been, it suddenly
appeared again.
</p>
<p>
&ldquo;By-the-bye, what became of the baby?&rdquo; said the Cat.
&ldquo;I&rsquo;d nearly forgotten to ask.&rdquo;
</p>
<p>
&ldquo;It turned into a pig,&rdquo; Alice quietly said, just as if it had come
back in a natural way.
</p>
<p>
&ldquo;I thought it would,&rdquo; said the Cat, and vanished again.
</p>
<p>
Alice waited a little, half expecting to see it again, but it did not appear,
and after a minute or two she walked on in the direction in which the March
Hare was said to live. &ldquo;I&rsquo;ve seen hatters before,&rdquo; she said
to herself; &ldquo;the March Hare will be much the most interesting, and
perhaps as this is May it won&rsquo;t be raving mad&mdash;at least not so mad
as it was in March.&rdquo; As she said this, she looked up, and there was the
Cat again, sitting on a branch of a tree.
</p>
<p>
&ldquo;Did you say pig, or fig?&rdquo; said the Cat.
</p>
<p>
&ldquo;I said pig,&rdquo; replied Alice; &ldquo;and I wish you wouldn&rsquo;t
keep appearing and vanishing so suddenly: you make one quite giddy.&rdquo;
</p>
<p>
&ldquo;All right,&rdquo; said the Cat; and this time it vanished quite slowly,
beginning with the end of the tail, and ending with the grin, which remained
some time after the rest of it had gone.
</p>
<p>
&ldquo;Well! I&rsquo;ve often seen a cat without a grin,&rdquo; thought Alice;
&ldquo;but a grin without a cat! It&rsquo;s the most curious thing I ever saw
in my life!&rdquo;
</p>
<p>
She had not gone much farther before she came in sight of the house of the
March Hare: she thought it must be the right house, because the chimneys were
shaped like ears and the roof was thatched with fur. It was so large a house,
that she did not like to go nearer till she had nibbled some more of the
lefthand bit of mushroom, and raised herself to about two feet high: even then
she walked up towards it rather timidly, saying to herself &ldquo;Suppose it
should be raving mad after all! I almost wish I&rsquo;d gone to see the Hatter
instead!&rdquo;
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap07"></a>CHAPTER VII.<br/>
A Mad Tea-Party</h2>
<p>
There was a table set out under a tree in front of the house, and the March
Hare and the Hatter were having tea at it: a Dormouse was sitting between them,
fast asleep, and the other two were using it as a cushion, resting their elbows
on it, and talking over its head. &ldquo;Very uncomfortable for the
Dormouse,&rdquo; thought Alice; &ldquo;only, as it&rsquo;s asleep, I suppose it
doesn&rsquo;t mind.&rdquo;
</p>
<p>
The table was a large one, but the three were all crowded together at one
corner of it: &ldquo;No room! No room!&rdquo; they cried out when they saw
Alice coming. &ldquo;There&rsquo;s <i>plenty</i> of room!&rdquo; said Alice
indignantly, and she sat down in a large arm-chair at one end of the table.
</p>
<p>
&ldquo;Have some wine,&rdquo; the March Hare said in an encouraging tone.
</p>
<p>
Alice looked all round the table, but there was nothing on it but tea. &ldquo;I
don&rsquo;t see any wine,&rdquo; she remarked.
</p>
<p>
&ldquo;There isn&rsquo;t any,&rdquo; said the March Hare.
</p>
<p>
&ldquo;Then it wasn&rsquo;t very civil of you to offer it,&rdquo; said Alice
angrily.
</p>
<p>
&ldquo;It wasn&rsquo;t very civil of you to sit down without being
invited,&rdquo; said the March Hare.
</p>
<p>
&ldquo;I didn&rsquo;t know it was <i>your</i> table,&rdquo; said Alice;
&ldquo;it&rsquo;s laid for a great many more than three.&rdquo;
</p>
<p>
&ldquo;Your hair wants cutting,&rdquo; said the Hatter. He had been looking at
Alice for some time with great curiosity, and this was his first speech.
</p>
<p>
&ldquo;You should learn not to make personal remarks,&rdquo; Alice said with
some severity; &ldquo;it&rsquo;s very rude.&rdquo;
</p>
<p>
The Hatter opened his eyes very wide on hearing this; but all he <i>said</i>
was, &ldquo;Why is a raven like a writing-desk?&rdquo;
</p>
<p>
&ldquo;Come, we shall have some fun now!&rdquo; thought Alice. &ldquo;I&rsquo;m
glad they&rsquo;ve begun asking riddles.&mdash;I believe I can guess
that,&rdquo; she added aloud.
</p>
<p>
&ldquo;Do you mean that you think you can find out the answer to it?&rdquo;
said the March Hare.
</p>
<p>
&ldquo;Exactly so,&rdquo; said Alice.
</p>
<p>
&ldquo;Then you should say what you mean,&rdquo; the March Hare went on.
</p>
<p>
&ldquo;I do,&rdquo; Alice hastily replied; &ldquo;at least&mdash;at least I
mean what I say&mdash;that&rsquo;s the same thing, you know.&rdquo;
</p>
<p>
&ldquo;Not the same thing a bit!&rdquo; said the Hatter. &ldquo;You might just
as well say that &lsquo;I see what I eat&rsquo; is the same thing as &lsquo;I
eat what I see&rsquo;!&rdquo;
</p>
<p>
&ldquo;You might just as well say,&rdquo; added the March Hare, &ldquo;that
&lsquo;I like what I get&rsquo; is the same thing as &lsquo;I get what I
like&rsquo;!&rdquo;
</p>
<p>
&ldquo;You might just as well say,&rdquo; added the Dormouse, who seemed to be
talking in his sleep, &ldquo;that &lsquo;I breathe when I sleep&rsquo; is the
same thing as &lsquo;I sleep when I breathe&rsquo;!&rdquo;
</p>
<p>
&ldquo;It <i>is</i> the same thing with you,&rdquo; said the Hatter, and here
the conversation dropped, and the party sat silent for a minute, while Alice
thought over all she could remember about ravens and writing-desks, which
wasn&rsquo;t much.
</p>
<p>
The Hatter was the first to break the silence. &ldquo;What day of the month is
it?&rdquo; he said, turning to Alice: he had taken his watch out of his pocket,
and was looking at it uneasily, shaking it every now and then, and holding it
to his ear.
</p>
<p>
Alice considered a little, and then said &ldquo;The fourth.&rdquo;
</p>
<p>
&ldquo;Two days wrong!&rdquo; sighed the Hatter. &ldquo;I told you butter
wouldn&rsquo;t suit the works!&rdquo; he added looking angrily at the March
Hare.
</p>
<p>
&ldquo;It was the <i>best</i> butter,&rdquo; the March Hare meekly replied.
</p>
<p>
&ldquo;Yes, but some crumbs must have got in as well,&rdquo; the Hatter
grumbled: &ldquo;you shouldn&rsquo;t have put it in with the
bread-knife.&rdquo;
</p>
<p>
The March Hare took the watch and looked at it gloomily: then he dipped it into
his cup of tea, and looked at it again: but he could think of nothing better to
say than his first remark, &ldquo;It was the <i>best</i> butter, you
know.&rdquo;
</p>
<p>
Alice had been looking over his shoulder with some curiosity. &ldquo;What a
funny watch!&rdquo; she remarked. &ldquo;It tells the day of the month, and
doesn&rsquo;t tell what o&rsquo;clock it is!&rdquo;
</p>
<p>
&ldquo;Why should it?&rdquo; muttered the Hatter. &ldquo;Does <i>your</i> watch
tell you what year it is?&rdquo;
</p>
<p>
&ldquo;Of course not,&rdquo; Alice replied very readily: &ldquo;but
that&rsquo;s because it stays the same year for such a long time
together.&rdquo;
</p>
<p>
&ldquo;Which is just the case with <i>mine</i>,&rdquo; said the Hatter.
</p>
<p>
Alice felt dreadfully puzzled. The Hatter&rsquo;s remark seemed to have no sort
of meaning in it, and yet it was certainly English. &ldquo;I don&rsquo;t quite
understand you,&rdquo; she said, as politely as she could.
</p>
<p>
&ldquo;The Dormouse is asleep again,&rdquo; said the Hatter, and he poured a
little hot tea upon its nose.
</p>
<p>
The Dormouse shook its head impatiently, and said, without opening its eyes,
&ldquo;Of course, of course; just what I was going to remark myself.&rdquo;
</p>
<p>
&ldquo;Have you guessed the riddle yet?&rdquo; the Hatter said, turning to
Alice again.
</p>
<p>
&ldquo;No, I give it up,&rdquo; Alice replied: &ldquo;what&rsquo;s the
answer?&rdquo;
</p>
<p>
&ldquo;I haven&rsquo;t the slightest idea,&rdquo; said the Hatter.
</p>
<p>
&ldquo;Nor I,&rdquo; said the March Hare.
</p>
<p>
Alice sighed wearily. &ldquo;I think you might do something better with the
time,&rdquo; she said, &ldquo;than waste it in asking riddles that have no
answers.&rdquo;
</p>
<p>
&ldquo;If you knew Time as well as I do,&rdquo; said the Hatter, &ldquo;you
wouldn&rsquo;t talk about wasting <i>it</i>. It&rsquo;s <i>him</i>.&rdquo;
</p>
<p>
&ldquo;I don&rsquo;t know what you mean,&rdquo; said Alice.
</p>
<p>
&ldquo;Of course you don&rsquo;t!&rdquo; the Hatter said, tossing his head
contemptuously. &ldquo;I dare say you never even spoke to Time!&rdquo;
</p>
<p>
&ldquo;Perhaps not,&rdquo; Alice cautiously replied: &ldquo;but I know I have
to beat time when I learn music.&rdquo;
</p>
<p>
&ldquo;Ah! that accounts for it,&rdquo; said the Hatter. &ldquo;He won&rsquo;t
stand beating. Now, if you only kept on good terms with him, he&rsquo;d do
almost anything you liked with the clock. For instance, suppose it were nine
o&rsquo;clock in the morning, just time to begin lessons: you&rsquo;d only have
to whisper a hint to Time, and round goes the clock in a twinkling! Half-past
one, time for dinner!&rdquo;
</p>
<p>
(&ldquo;I only wish it was,&rdquo; the March Hare said to itself in a whisper.)
</p>
<p>
&ldquo;That would be grand, certainly,&rdquo; said Alice thoughtfully:
&ldquo;but then&mdash;I shouldn&rsquo;t be hungry for it, you know.&rdquo;
</p>
<p>
&ldquo;Not at first, perhaps,&rdquo; said the Hatter: &ldquo;but you could keep
it to half-past one as long as you liked.&rdquo;
</p>
<p>
&ldquo;Is that the way <i>you</i> manage?&rdquo; Alice asked.
</p>
<p>
The Hatter shook his head mournfully. &ldquo;Not I!&rdquo; he replied.
&ldquo;We quarrelled last March&mdash;just before <i>he</i> went mad, you
know&mdash;&rdquo; (pointing with his tea spoon at the March Hare,)
&ldquo;&mdash;it was at the great concert given by the Queen of Hearts, and I
had to sing
</p>
<p class="poem">
&lsquo;Twinkle, twinkle, little bat!<br/>
How I wonder what you&rsquo;re at!&rsquo;
</p>
<p class="noindent">
You know the song, perhaps?&rdquo;
</p>
<p>
&ldquo;I&rsquo;ve heard something like it,&rdquo; said Alice.
</p>
<p>
&ldquo;It goes on, you know,&rdquo; the Hatter continued, &ldquo;in this
way:&mdash;
</p>
<p class="poem">
&lsquo;Up above the world you fly,<br/>
Like a tea-tray in the sky.<br/>
                    Twinkle, twinkle&mdash;&rsquo;&rdquo;
</p>
<p>
Here the Dormouse shook itself, and began singing in its sleep
&ldquo;<i>Twinkle, twinkle, twinkle, twinkle</i>&mdash;&rdquo; and went on so
long that they had to pinch it to make it stop.
</p>
<p>
&ldquo;Well, I&rsquo;d hardly finished the first verse,&rdquo; said the Hatter,
&ldquo;when the Queen jumped up and bawled out, &lsquo;He&rsquo;s murdering the
time! Off with his head!&rsquo;&rdquo;
</p>
<p>
&ldquo;How dreadfully savage!&rdquo; exclaimed Alice.
</p>
<p>
&ldquo;And ever since that,&rdquo; the Hatter went on in a mournful tone,
&ldquo;he won&rsquo;t do a thing I ask! It&rsquo;s always six o&rsquo;clock
now.&rdquo;
</p>
<p>
A bright idea came into Alice&rsquo;s head. &ldquo;Is that the reason so many
tea-things are put out here?&rdquo; she asked.
</p>
<p>
&ldquo;Yes, that&rsquo;s it,&rdquo; said the Hatter with a sigh:
&ldquo;it&rsquo;s always tea-time, and we&rsquo;ve no time to wash the things
between whiles.&rdquo;
</p>
<p>
&ldquo;Then you keep moving round, I suppose?&rdquo; said Alice.
</p>
<p>
&ldquo;Exactly so,&rdquo; said the Hatter: &ldquo;as the things get used
up.&rdquo;
</p>
<p>
&ldquo;But what happens when you come to the beginning again?&rdquo; Alice
ventured to ask.
</p>
<p>
&ldquo;Suppose we change the subject,&rdquo; the March Hare interrupted,
yawning. &ldquo;I&rsquo;m getting tired of this. I vote the young lady tells us
a story.&rdquo;
</p>
<p>
&ldquo;I&rsquo;m afraid I don&rsquo;t know one,&rdquo; said Alice, rather
alarmed at the proposal.
</p>
<p>
&ldquo;Then the Dormouse shall!&rdquo; they both cried. &ldquo;Wake up,
Dormouse!&rdquo; And they pinched it on both sides at once.
</p>
<p>
The Dormouse slowly opened his eyes. &ldquo;I wasn&rsquo;t asleep,&rdquo; he
said in a hoarse, feeble voice: &ldquo;I heard every word you fellows were
saying.&rdquo;
</p>
<p>
&ldquo;Tell us a story!&rdquo; said the March Hare.
</p>
<p>
&ldquo;Yes, please do!&rdquo; pleaded Alice.
</p>
<p>
&ldquo;And be quick about it,&rdquo; added the Hatter, &ldquo;or you&rsquo;ll
be asleep again before it&rsquo;s done.&rdquo;
</p>
<p>
&ldquo;Once upon a time there were three little sisters,&rdquo; the Dormouse
began in a great hurry; &ldquo;and their names were Elsie, Lacie, and Tillie;
and they lived at the bottom of a well&mdash;&rdquo;
</p>
<p>
&ldquo;What did they live on?&rdquo; said Alice, who always took a great
interest in questions of eating and drinking.
</p>
<p>
&ldquo;They lived on treacle,&rdquo; said the Dormouse, after thinking a minute
or two.
</p>
<p>
&ldquo;They couldn&rsquo;t have done that, you know,&rdquo; Alice gently
remarked; &ldquo;they&rsquo;d have been ill.&rdquo;
</p>
<p>
&ldquo;So they were,&rdquo; said the Dormouse; &ldquo;<i>very</i> ill.&rdquo;
</p>
<p>
Alice tried to fancy to herself what such an extraordinary ways of living would
be like, but it puzzled her too much, so she went on: &ldquo;But why did they
live at the bottom of a well?&rdquo;
</p>
<p>
&ldquo;Take some more tea,&rdquo; the March Hare said to Alice, very earnestly.
</p>
<p>
&ldquo;I&rsquo;ve had nothing yet,&rdquo; Alice replied in an offended tone,
&ldquo;so I can&rsquo;t take more.&rdquo;
</p>
<p>
&ldquo;You mean you can&rsquo;t take <i>less</i>,&rdquo; said the Hatter:
&ldquo;it&rsquo;s very easy to take <i>more</i> than nothing.&rdquo;
</p>
<p>
&ldquo;Nobody asked <i>your</i> opinion,&rdquo; said Alice.
</p>
<p>
&ldquo;Who&rsquo;s making personal remarks now?&rdquo; the Hatter asked
triumphantly.
</p>
<p>
Alice did not quite know what to say to this: so she helped herself to some tea
and bread-and-butter, and then turned to the Dormouse, and repeated her
question. &ldquo;Why did they live at the bottom of a well?&rdquo;
</p>
<p>
The Dormouse again took a minute or two to think about it, and then said,
&ldquo;It was a treacle-well.&rdquo;
</p>
<p>
&ldquo;There&rsquo;s no such thing!&rdquo; Alice was beginning very angrily,
but the Hatter and the March Hare went &ldquo;Sh! sh!&rdquo; and the Dormouse
sulkily remarked, &ldquo;If you can&rsquo;t be civil, you&rsquo;d better finish
the story for yourself.&rdquo;
</p>
<p>
&ldquo;No, please go on!&rdquo; Alice said very humbly; &ldquo;I won&rsquo;t
interrupt again. I dare say there may be <i>one</i>.&rdquo;
</p>
<p>
&ldquo;One, indeed!&rdquo; said the Dormouse indignantly. However, he consented
to go on. &ldquo;And so these three little sisters&mdash;they were learning to
draw, you know&mdash;&rdquo;
</p>
<p>
&ldquo;What did they draw?&rdquo; said Alice, quite forgetting her promise.
</p>
<p>
&ldquo;Treacle,&rdquo; said the Dormouse, without considering at all this time.
</p>
<p>
&ldquo;I want a clean cup,&rdquo; interrupted the Hatter: &ldquo;let&rsquo;s
all move one place on.&rdquo;
</p>
<p>
He moved on as he spoke, and the Dormouse followed him: the March Hare moved
into the Dormouse&rsquo;s place, and Alice rather unwillingly took the place of
the March Hare. The Hatter was the only one who got any advantage from the
change: and Alice was a good deal worse off than before, as the March Hare had
just upset the milk-jug into his plate.
</p>
<p>
Alice did not wish to offend the Dormouse again, so she began very cautiously:
&ldquo;But I don&rsquo;t understand. Where did they draw the treacle
from?&rdquo;
</p>
<p>
&ldquo;You can draw water out of a water-well,&rdquo; said the Hatter;
&ldquo;so I should think you could draw treacle out of a treacle-well&mdash;eh,
stupid?&rdquo;
</p>
<p>
&ldquo;But they were <i>in</i> the well,&rdquo; Alice said to the Dormouse, not
choosing to notice this last remark.
</p>
<p>
&ldquo;Of course they were,&rdquo; said the Dormouse; &ldquo;&mdash;well
in.&rdquo;
</p>
<p>
This answer so confused poor Alice, that she let the Dormouse go on for some
time without interrupting it.
</p>
<p>
&ldquo;They were learning to draw,&rdquo; the Dormouse went on, yawning and
rubbing its eyes, for it was getting very sleepy; &ldquo;and they drew all
manner of things&mdash;everything that begins with an M&mdash;&rdquo;
</p>
<p>
&ldquo;Why with an M?&rdquo; said Alice.
</p>
<p>
&ldquo;Why not?&rdquo; said the March Hare.
</p>
<p>
Alice was silent.
</p>
<p>
The Dormouse had closed its eyes by this time, and was going off into a doze;
but, on being pinched by the Hatter, it woke up again with a little shriek, and
went on: &ldquo;&mdash;that begins with an M, such as mouse-traps, and the
moon, and memory, and muchness&mdash;you know you say things are &ldquo;much of
a muchness&rdquo;&mdash;did you ever see such a thing as a drawing of a
muchness?&rdquo;
</p>
<p>
&ldquo;Really, now you ask me,&rdquo; said Alice, very much confused, &ldquo;I
don&rsquo;t think&mdash;&rdquo;
</p>
<p>
&ldquo;Then you shouldn&rsquo;t talk,&rdquo; said the Hatter.
</p>
<p>
This piece of rudeness was more than Alice could bear: she got up in great
disgust, and walked off; the Dormouse fell asleep instantly, and neither of the
others took the least notice of her going, though she looked back once or
twice, half hoping that they would call after her: the last time she saw them,
they were trying to put the Dormouse into the teapot.
</p>
<p>
&ldquo;At any rate I&rsquo;ll never go <i>there</i> again!&rdquo; said Alice as
she picked her way through the wood. &ldquo;It&rsquo;s the stupidest tea-party
I ever was at in all my life!&rdquo;
</p>
<p>
Just as she said this, she noticed that one of the trees had a door leading
right into it. &ldquo;That&rsquo;s very curious!&rdquo; she thought. &ldquo;But
everything&rsquo;s curious today. I think I may as well go in at once.&rdquo;
And in she went.
</p>
<p>
Once more she found herself in the long hall, and close to the little glass
table. &ldquo;Now, I&rsquo;ll manage better this time,&rdquo; she said to
herself, and began by taking the little golden key, and unlocking the door that
led into the garden. Then she went to work nibbling at the mushroom (she had
kept a piece of it in her pocket) till she was about a foot high: then she
walked down the little passage: and <i>then</i>&mdash;she found herself at last
in the beautiful garden, among the bright flower-beds and the cool fountains.
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap08"></a>CHAPTER VIII.<br/>
The Queen&rsquo;s Croquet-Ground</h2>
<p>
A large rose-tree stood near the entrance of the garden: the roses growing on
it were white, but there were three gardeners at it, busily painting them red.
Alice thought this a very curious thing, and she went nearer to watch them, and
just as she came up to them she heard one of them say, &ldquo;Look out now,
Five! Don&rsquo;t go splashing paint over me like that!&rdquo;
</p>
<p>
&ldquo;I couldn&rsquo;t help it,&rdquo; said Five, in a sulky tone;
&ldquo;Seven jogged my elbow.&rdquo;
</p>
<p>
On which Seven looked up and said, &ldquo;That&rsquo;s right, Five! Always lay
the blame on others!&rdquo;
</p>
<p>
&ldquo;<i>You&rsquo;d</i> better not talk!&rdquo; said Five. &ldquo;I heard the
Queen say only yesterday you deserved to be beheaded!&rdquo;
</p>
<p>
&ldquo;What for?&rdquo; said the one who had spoken first.
</p>
<p>
&ldquo;That&rsquo;s none of <i>your</i> business, Two!&rdquo; said Seven.
</p>
<p>
&ldquo;Yes, it <i>is</i> his business!&rdquo; said Five, &ldquo;and I&rsquo;ll
tell him&mdash;it was for bringing the cook tulip-roots instead of
onions.&rdquo;
</p>
<p>
Seven flung down his brush, and had just begun &ldquo;Well, of all the unjust
things&mdash;&rdquo; when his eye chanced to fall upon Alice, as she stood
watching them, and he checked himself suddenly: the others looked round also,
and all of them bowed low.
</p>
<p>
&ldquo;Would you tell me,&rdquo; said Alice, a little timidly, &ldquo;why you
are painting those roses?&rdquo;
</p>
<p>
Five and Seven said nothing, but looked at Two. Two began in a low voice,
&ldquo;Why the fact is, you see, Miss, this here ought to have been a
<i>red</i> rose-tree, and we put a white one in by mistake; and if the Queen
was to find it out, we should all have our heads cut off, you know. So you see,
Miss, we&rsquo;re doing our best, afore she comes, to&mdash;&rdquo; At this
moment Five, who had been anxiously looking across the garden, called out
&ldquo;The Queen! The Queen!&rdquo; and the three gardeners instantly threw
themselves flat upon their faces. There was a sound of many footsteps, and
Alice looked round, eager to see the Queen.
</p>
<p>
First came ten soldiers carrying clubs; these were all shaped like the three
gardeners, oblong and flat, with their hands and feet at the corners: next the
ten courtiers; these were ornamented all over with diamonds, and walked two and
two, as the soldiers did. After these came the royal children; there were ten
of them, and the little dears came jumping merrily along hand in hand, in
couples: they were all ornamented with hearts. Next came the guests, mostly
Kings and Queens, and among them Alice recognised the White Rabbit: it was
talking in a hurried nervous manner, smiling at everything that was said, and
went by without noticing her. Then followed the Knave of Hearts, carrying the
King&rsquo;s crown on a crimson velvet cushion; and, last of all this grand
procession, came THE KING AND QUEEN OF HEARTS.
</p>
<p>
Alice was rather doubtful whether she ought not to lie down on her face like
the three gardeners, but she could not remember ever having heard of such a
rule at processions; &ldquo;and besides, what would be the use of a
procession,&rdquo; thought she, &ldquo;if people had all to lie down upon their
faces, so that they couldn&rsquo;t see it?&rdquo; So she stood still where she
was, and waited.
</p>
<p>
When the procession came opposite to Alice, they all stopped and looked at her,
and the Queen said severely &ldquo;Who is this?&rdquo; She said it to the Knave
of Hearts, who only bowed and smiled in reply.
</p>
<p>
&ldquo;Idiot!&rdquo; said the Queen, tossing her head impatiently; and, turning
to Alice, she went on, &ldquo;What&rsquo;s your name, child?&rdquo;
</p>
<p>
&ldquo;My name is Alice, so please your Majesty,&rdquo; said Alice very
politely; but she added, to herself, &ldquo;Why, they&rsquo;re only a pack of
cards, after all. I needn&rsquo;t be afraid of them!&rdquo;
</p>
<p>
&ldquo;And who are <i>these?</i>&rdquo; said the Queen, pointing to the three
gardeners who were lying round the rose-tree; for, you see, as they were lying
on their faces, and the pattern on their backs was the same as the rest of the
pack, she could not tell whether they were gardeners, or soldiers, or
courtiers, or three of her own children.
</p>
<p>
&ldquo;How should <i>I</i> know?&rdquo; said Alice, surprised at her own
courage. &ldquo;It&rsquo;s no business of <i>mine</i>.&rdquo;
</p>
<p>
The Queen turned crimson with fury, and, after glaring at her for a moment like
a wild beast, screamed &ldquo;Off with her head! Off&mdash;&rdquo;
</p>
<p>
&ldquo;Nonsense!&rdquo; said Alice, very loudly and decidedly, and the Queen
was silent.
</p>
<p>
The King laid his hand upon her arm, and timidly said &ldquo;Consider, my dear:
she is only a child!&rdquo;
</p>
<p>
The Queen turned angrily away from him, and said to the Knave &ldquo;Turn them
over!&rdquo;
</p>
<p>
The Knave did so, very carefully, with one foot.
</p>
<p>
&ldquo;Get up!&rdquo; said the Queen, in a shrill, loud voice, and the three
gardeners instantly jumped up, and began bowing to the King, the Queen, the
royal children, and everybody else.
</p>
<p>
&ldquo;Leave off that!&rdquo; screamed the Queen. &ldquo;You make me
giddy.&rdquo; And then, turning to the rose-tree, she went on, &ldquo;What
<i>have</i> you been doing here?&rdquo;
</p>
<p>
&ldquo;May it please your Majesty,&rdquo; said Two, in a very humble tone,
going down on one knee as he spoke, &ldquo;we were trying&mdash;&rdquo;
</p>
<p>
&ldquo;<i>I</i> see!&rdquo; said the Queen, who had meanwhile been examining
the roses. &ldquo;Off with their heads!&rdquo; and the procession moved on,
three of the soldiers remaining behind to execute the unfortunate gardeners,
who ran to Alice for protection.
</p>
<p>
&ldquo;You shan&rsquo;t be beheaded!&rdquo; said Alice, and she put them into a
large flower-pot that stood near. The three soldiers wandered about for a
minute or two, looking for them, and then quietly marched off after the others.
</p>
<p>
&ldquo;Are their heads off?&rdquo; shouted the Queen.
</p>
<p>
&ldquo;Their heads are gone, if it please your Majesty!&rdquo; the soldiers
shouted in reply.
</p>
<p>
&ldquo;That&rsquo;s right!&rdquo; shouted the Queen. &ldquo;Can you play
croquet?&rdquo;
</p>
<p>
The soldiers were silent, and looked at Alice, as the question was evidently
meant for her.
</p>
<p>
&ldquo;Yes!&rdquo; shouted Alice.
</p>
<p>
&ldquo;Come on, then!&rdquo; roared the Queen, and Alice joined the procession,
wondering very much what would happen next.
</p>
<p>
&ldquo;It&rsquo;s&mdash;it&rsquo;s a very fine day!&rdquo; said a timid voice
at her side. She was walking by the White Rabbit, who was peeping anxiously
into her face.
</p>
<p>
&ldquo;Very,&rdquo; said Alice: &ldquo;&mdash;where&rsquo;s the Duchess?&rdquo;
</p>
<p>
&ldquo;Hush! Hush!&rdquo; said the Rabbit in a low, hurried tone. He looked
anxiously over his shoulder as he spoke, and then raised himself upon tiptoe,
put his mouth close to her ear, and whispered &ldquo;She&rsquo;s under sentence
of execution.&rdquo;
</p>
<p>
&ldquo;What for?&rdquo; said Alice.
</p>
<p>
&ldquo;Did you say &lsquo;What a pity!&rsquo;?&rdquo; the Rabbit asked.
</p>
<p>
&ldquo;No, I didn&rsquo;t,&rdquo; said Alice: &ldquo;I don&rsquo;t think
it&rsquo;s at all a pity. I said &lsquo;What for?&rsquo;&rdquo;
</p>
<p>
&ldquo;She boxed the Queen&rsquo;s ears&mdash;&rdquo; the Rabbit began. Alice
gave a little scream of laughter. &ldquo;Oh, hush!&rdquo; the Rabbit whispered
in a frightened tone. &ldquo;The Queen will hear you! You see, she came rather
late, and the Queen said&mdash;&rdquo;
</p>
<p>
&ldquo;Get to your places!&rdquo; shouted the Queen in a voice of thunder, and
people began running about in all directions, tumbling up against each other;
however, they got settled down in a minute or two, and the game began. Alice
thought she had never seen such a curious croquet-ground in her life; it was
all ridges and furrows; the balls were live hedgehogs, the mallets live
flamingoes, and the soldiers had to double themselves up and to stand on their
hands and feet, to make the arches.
</p>
<p>
The chief difficulty Alice found at first was in managing her flamingo: she
succeeded in getting its body tucked away, comfortably enough, under her arm,
with its legs hanging down, but generally, just as she had got its neck nicely
straightened out, and was going to give the hedgehog a blow with its head, it
<i>would</i> twist itself round and look up in her face, with such a puzzled
expression that she could not help bursting out laughing: and when she had got
its head down, and was going to begin again, it was very provoking to find that
the hedgehog had unrolled itself, and was in the act of crawling away: besides
all this, there was generally a ridge or furrow in the way wherever she wanted
to send the hedgehog to, and, as the doubled-up soldiers were always getting up
and walking off to other parts of the ground, Alice soon came to the conclusion
that it was a very difficult game indeed.
</p>
<p>
The players all played at once without waiting for turns, quarrelling all the
while, and fighting for the hedgehogs; and in a very short time the Queen was
in a furious passion, and went stamping about, and shouting &ldquo;Off with his
head!&rdquo; or &ldquo;Off with her head!&rdquo; about once in a minute.
</p>
<p>
Alice began to feel very uneasy: to be sure, she had not as yet had any dispute
with the Queen, but she knew that it might happen any minute, &ldquo;and
then,&rdquo; thought she, &ldquo;what would become of me? They&rsquo;re
dreadfully fond of beheading people here; the great wonder is, that
there&rsquo;s any one left alive!&rdquo;
</p>
<p>
She was looking about for some way of escape, and wondering whether she could
get away without being seen, when she noticed a curious appearance in the air:
it puzzled her very much at first, but, after watching it a minute or two, she
made it out to be a grin, and she said to herself &ldquo;It&rsquo;s the
Cheshire Cat: now I shall have somebody to talk to.&rdquo;
</p>
<p>
&ldquo;How are you getting on?&rdquo; said the Cat, as soon as there was mouth
enough for it to speak with.
</p>
<p>
Alice waited till the eyes appeared, and then nodded. &ldquo;It&rsquo;s no use
speaking to it,&rdquo; she thought, &ldquo;till its ears have come, or at least
one of them.&rdquo; In another minute the whole head appeared, and then Alice
put down her flamingo, and began an account of the game, feeling very glad she
had someone to listen to her. The Cat seemed to think that there was enough of
it now in sight, and no more of it appeared.
</p>
<p>
&ldquo;I don&rsquo;t think they play at all fairly,&rdquo; Alice began, in
rather a complaining tone, &ldquo;and they all quarrel so dreadfully one
can&rsquo;t hear oneself speak&mdash;and they don&rsquo;t seem to have any
rules in particular; at least, if there are, nobody attends to them&mdash;and
you&rsquo;ve no idea how confusing it is all the things being alive; for
instance, there&rsquo;s the arch I&rsquo;ve got to go through next walking
about at the other end of the ground&mdash;and I should have croqueted the
Queen&rsquo;s hedgehog just now, only it ran away when it saw mine
coming!&rdquo;
</p>
<p>
&ldquo;How do you like the Queen?&rdquo; said the Cat in a low voice.
</p>
<p>
&ldquo;Not at all,&rdquo; said Alice: &ldquo;she&rsquo;s so
extremely&mdash;&rdquo; Just then she noticed that the Queen was close behind
her, listening: so she went on, &ldquo;&mdash;likely to win, that it&rsquo;s
hardly worth while finishing the game.&rdquo;
</p>
<p>
The Queen smiled and passed on.
</p>
<p>
&ldquo;Who <i>are</i> you talking to?&rdquo; said the King, going up to Alice,
and looking at the Cat&rsquo;s head with great curiosity.
</p>
<p>
&ldquo;It&rsquo;s a friend of mine&mdash;a Cheshire Cat,&rdquo; said Alice:
&ldquo;allow me to introduce it.&rdquo;
</p>
<p>
&ldquo;I don&rsquo;t like the look of it at all,&rdquo; said the King:
&ldquo;however, it may kiss my hand if it likes.&rdquo;
</p>
<p>
&ldquo;I&rsquo;d rather not,&rdquo; the Cat remarked.
</p>
<p>
&ldquo;Don&rsquo;t be impertinent,&rdquo; said the King, &ldquo;and don&rsquo;t
look at me like that!&rdquo; He got behind Alice as he spoke.
</p>
<p>
&ldquo;A cat may look at a king,&rdquo; said Alice. &ldquo;I&rsquo;ve read that
in some book, but I don&rsquo;t remember where.&rdquo;
</p>
<p>
&ldquo;Well, it must be removed,&rdquo; said the King very decidedly, and he
called the Queen, who was passing at the moment, &ldquo;My dear! I wish you
would have this cat removed!&rdquo;
</p>
<p>
The Queen had only one way of settling all difficulties, great or small.
&ldquo;Off with his head!&rdquo; she said, without even looking round.
</p>
<p>
&ldquo;I&rsquo;ll fetch the executioner myself,&rdquo; said the King eagerly,
and he hurried off.
</p>
<p>
Alice thought she might as well go back, and see how the game was going on, as
she heard the Queen&rsquo;s voice in the distance, screaming with passion. She
had already heard her sentence three of the players to be executed for having
missed their turns, and she did not like the look of things at all, as the game
was in such confusion that she never knew whether it was her turn or not. So
she went in search of her hedgehog.
</p>
<p>
The hedgehog was engaged in a fight with another hedgehog, which seemed to
Alice an excellent opportunity for croqueting one of them with the other: the
only difficulty was, that her flamingo was gone across to the other side of the
garden, where Alice could see it trying in a helpless sort of way to fly up
into a tree.
</p>
<p>
By the time she had caught the flamingo and brought it back, the fight was
over, and both the hedgehogs were out of sight: &ldquo;but it doesn&rsquo;t
matter much,&rdquo; thought Alice, &ldquo;as all the arches are gone from this
side of the ground.&rdquo; So she tucked it away under her arm, that it might
not escape again, and went back for a little more conversation with her friend.
</p>
<p>
When she got back to the Cheshire Cat, she was surprised to find quite a large
crowd collected round it: there was a dispute going on between the executioner,
the King, and the Queen, who were all talking at once, while all the rest were
quite silent, and looked very uncomfortable.
</p>
<p>
The moment Alice appeared, she was appealed to by all three to settle the
question, and they repeated their arguments to her, though, as they all spoke
at once, she found it very hard indeed to make out exactly what they said.
</p>
<p>
The executioner&rsquo;s argument was, that you couldn&rsquo;t cut off a head
unless there was a body to cut it off from: that he had never had to do such a
thing before, and he wasn&rsquo;t going to begin at <i>his</i> time of life.
</p>
<p>
The King&rsquo;s argument was, that anything that had a head could be beheaded,
and that you weren&rsquo;t to talk nonsense.
</p>
<p>
The Queen&rsquo;s argument was, that if something wasn&rsquo;t done about it in
less than no time she&rsquo;d have everybody executed, all round. (It was this
last remark that had made the whole party look so grave and anxious.)
</p>
<p>
Alice could think of nothing else to say but &ldquo;It belongs to the Duchess:
you&rsquo;d better ask <i>her</i> about it.&rdquo;
</p>
<p>
&ldquo;She&rsquo;s in prison,&rdquo; the Queen said to the executioner:
&ldquo;fetch her here.&rdquo; And the executioner went off like an arrow.
</p>
<p>
The Cat&rsquo;s head began fading away the moment he was gone, and, by the time
he had come back with the Duchess, it had entirely disappeared; so the King and
the executioner ran wildly up and down looking for it, while the rest of the
party went back to the game.
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap09"></a>CHAPTER IX.<br/>
The Mock Turtle&rsquo;s Story</h2>
<p>
&ldquo;You can&rsquo;t think how glad I am to see you again, you dear old
thing!&rdquo; said the Duchess, as she tucked her arm affectionately into
Alice&rsquo;s, and they walked off together.
</p>
<p>
Alice was very glad to find her in such a pleasant temper, and thought to
herself that perhaps it was only the pepper that had made her so savage when
they met in the kitchen.
</p>
<p>
&ldquo;When <i>I&rsquo;m</i> a Duchess,&rdquo; she said to herself, (not in a
very hopeful tone though), &ldquo;I won&rsquo;t have any pepper in my kitchen
<i>at all</i>. Soup does very well without&mdash;Maybe it&rsquo;s always pepper
that makes people hot-tempered,&rdquo; she went on, very much pleased at having
found out a new kind of rule, &ldquo;and vinegar that makes them sour&mdash;and
camomile that makes them bitter&mdash;and&mdash;and barley-sugar and such
things that make children sweet-tempered. I only wish people knew <i>that</i>:
then they wouldn&rsquo;t be so stingy about it, you know&mdash;&rdquo;
</p>
<p>
She had quite forgotten the Duchess by this time, and was a little startled
when she heard her voice close to her ear. &ldquo;You&rsquo;re thinking about
something, my dear, and that makes you forget to talk. I can&rsquo;t tell you
just now what the moral of that is, but I shall remember it in a bit.&rdquo;
</p>
<p>
&ldquo;Perhaps it hasn&rsquo;t one,&rdquo; Alice ventured to remark.
</p>
<p>
&ldquo;Tut, tut, child!&rdquo; said the Duchess. &ldquo;Everything&rsquo;s got
a moral, if only you can find it.&rdquo; And she squeezed herself up closer to
Alice&rsquo;s side as she spoke.
</p>
<p>
Alice did not much like keeping so close to her: first, because the Duchess was
<i>very</i> ugly; and secondly, because she was exactly the right height to
rest her chin upon Alice&rsquo;s shoulder, and it was an uncomfortably sharp
chin. However, she did not like to be rude, so she bore it as well as she
could.
</p>
<p>
&ldquo;The game&rsquo;s going on rather better now,&rdquo; she said, by way of
keeping up the conversation a little.
</p>
<p>
&ldquo;&rsquo;Tis so,&rdquo; said the Duchess: &ldquo;and the moral of that
is&mdash;&lsquo;Oh, &rsquo;tis love, &rsquo;tis love, that makes the world go
round!&rsquo;&rdquo;
</p>
<p>
&ldquo;Somebody said,&rdquo; Alice whispered, &ldquo;that it&rsquo;s done by
everybody minding their own business!&rdquo;
</p>
<p>
&ldquo;Ah, well! It means much the same thing,&rdquo; said the Duchess, digging
her sharp little chin into Alice&rsquo;s shoulder as she added, &ldquo;and the
moral of <i>that</i> is&mdash;&lsquo;Take care of the sense, and the sounds
will take care of themselves.&rsquo;&rdquo;
</p>
<p>
&ldquo;How fond she is of finding morals in things!&rdquo; Alice thought to
herself.
</p>
<p>
&ldquo;I dare say you&rsquo;re wondering why I don&rsquo;t put my arm round
your waist,&rdquo; the Duchess said after a pause: &ldquo;the reason is, that
I&rsquo;m doubtful about the temper of your flamingo. Shall I try the
experiment?&rdquo;
</p>
<p>
&ldquo;He might bite,&rdquo; Alice cautiously replied, not feeling at all
anxious to have the experiment tried.
</p>
<p>
&ldquo;Very true,&rdquo; said the Duchess: &ldquo;flamingoes and mustard both
bite. And the moral of that is&mdash;&lsquo;Birds of a feather flock
together.&rsquo;&rdquo;
</p>
<p>
&ldquo;Only mustard isn&rsquo;t a bird,&rdquo; Alice remarked.
</p>
<p>
&ldquo;Right, as usual,&rdquo; said the Duchess: &ldquo;what a clear way you
have of putting things!&rdquo;
</p>
<p>
&ldquo;It&rsquo;s a mineral, I <i>think</i>,&rdquo; said Alice.
</p>
<p>
&ldquo;Of course it is,&rdquo; said the Duchess, who seemed ready to agree to
everything that Alice said; &ldquo;there&rsquo;s a large mustard-mine near
here. And the moral of that is&mdash;&lsquo;The more there is of mine, the less
there is of yours.&rsquo;&rdquo;
</p>
<p>
&ldquo;Oh, I know!&rdquo; exclaimed Alice, who had not attended to this last
remark, &ldquo;it&rsquo;s a vegetable. It doesn&rsquo;t look like one, but it
is.&rdquo;
</p>
<p>
&ldquo;I quite agree with you,&rdquo; said the Duchess; &ldquo;and the moral of
that is&mdash;&lsquo;Be what you would seem to be&rsquo;&mdash;or if
you&rsquo;d like it put more simply&mdash;&lsquo;Never imagine yourself not to
be otherwise than what it might appear to others that what you were or might
have been was not otherwise than what you had been would have appeared to them
to be otherwise.&rsquo;&rdquo;
</p>
<p>
&ldquo;I think I should understand that better,&rdquo; Alice said very
politely, &ldquo;if I had it written down: but I can&rsquo;t quite follow it as
you say it.&rdquo;
</p>
<p>
&ldquo;That&rsquo;s nothing to what I could say if I chose,&rdquo; the Duchess
replied, in a pleased tone.
</p>
<p>
&ldquo;Pray don&rsquo;t trouble yourself to say it any longer than that,&rdquo;
said Alice.
</p>
<p>
&ldquo;Oh, don&rsquo;t talk about trouble!&rdquo; said the Duchess. &ldquo;I
make you a present of everything I&rsquo;ve said as yet.&rdquo;
</p>
<p>
&ldquo;A cheap sort of present!&rdquo; thought Alice. &ldquo;I&rsquo;m glad
they don&rsquo;t give birthday presents like that!&rdquo; But she did not
venture to say it out loud.
</p>
<p>
&ldquo;Thinking again?&rdquo; the Duchess asked, with another dig of her sharp
little chin.
</p>
<p>
&ldquo;I&rsquo;ve a right to think,&rdquo; said Alice sharply, for she was
beginning to feel a little worried.
</p>
<p>
&ldquo;Just about as much right,&rdquo; said the Duchess, &ldquo;as pigs have
to fly; and the m&mdash;&rdquo;
</p>
<p>
But here, to Alice&rsquo;s great surprise, the Duchess&rsquo;s voice died away,
even in the middle of her favourite word &lsquo;moral,&rsquo; and the arm that
was linked into hers began to tremble. Alice looked up, and there stood the
Queen in front of them, with her arms folded, frowning like a thunderstorm.
</p>
<p>
&ldquo;A fine day, your Majesty!&rdquo; the Duchess began in a low, weak voice.
</p>
<p>
&ldquo;Now, I give you fair warning,&rdquo; shouted the Queen, stamping on the
ground as she spoke; &ldquo;either you or your head must be off, and that in
about half no time! Take your choice!&rdquo;
</p>
<p>
The Duchess took her choice, and was gone in a moment.
</p>
<p>
&ldquo;Let&rsquo;s go on with the game,&rdquo; the Queen said to Alice; and
Alice was too much frightened to say a word, but slowly followed her back to
the croquet-ground.
</p>
<p>
The other guests had taken advantage of the Queen&rsquo;s absence, and were
resting in the shade: however, the moment they saw her, they hurried back to
the game, the Queen merely remarking that a moment&rsquo;s delay would cost
them their lives.
</p>
<p>
All the time they were playing the Queen never left off quarrelling with the
other players, and shouting &ldquo;Off with his head!&rdquo; or &ldquo;Off with
her head!&rdquo; Those whom she sentenced were taken into custody by the
soldiers, who of course had to leave off being arches to do this, so that by
the end of half an hour or so there were no arches left, and all the players,
except the King, the Queen, and Alice, were in custody and under sentence of
execution.
</p>
<p>
Then the Queen left off, quite out of breath, and said to Alice, &ldquo;Have
you seen the Mock Turtle yet?&rdquo;
</p>
<p>
&ldquo;No,&rdquo; said Alice. &ldquo;I don&rsquo;t even know what a Mock Turtle
is.&rdquo;
</p>
<p>
&ldquo;It&rsquo;s the thing Mock Turtle Soup is made from,&rdquo; said the
Queen.
</p>
<p>
&ldquo;I never saw one, or heard of one,&rdquo; said Alice.
</p>
<p>
&ldquo;Come on, then,&rdquo; said the Queen, &ldquo;and he shall tell you his
history,&rdquo;
</p>
<p>
As they walked off together, Alice heard the King say in a low voice, to the
company generally, &ldquo;You are all pardoned.&rdquo; &ldquo;Come,
<i>that&rsquo;s</i> a good thing!&rdquo; she said to herself, for she had felt
quite unhappy at the number of executions the Queen had ordered.
</p>
<p>
They very soon came upon a Gryphon, lying fast asleep in the sun. (If you
don&rsquo;t know what a Gryphon is, look at the picture.) &ldquo;Up, lazy
thing!&rdquo; said the Queen, &ldquo;and take this young lady to see the Mock
Turtle, and to hear his history. I must go back and see after some executions I
have ordered;&rdquo; and she walked off, leaving Alice alone with the Gryphon.
Alice did not quite like the look of the creature, but on the whole she thought
it would be quite as safe to stay with it as to go after that savage Queen: so
she waited.
</p>
<p>
The Gryphon sat up and rubbed its eyes: then it watched the Queen till she was
out of sight: then it chuckled. &ldquo;What fun!&rdquo; said the Gryphon, half
to itself, half to Alice.
</p>
<p>
&ldquo;What <i>is</i> the fun?&rdquo; said Alice.
</p>
<p>
&ldquo;Why, <i>she</i>,&rdquo; said the Gryphon. &ldquo;It&rsquo;s all her
fancy, that: they never executes nobody, you know. Come on!&rdquo;
</p>
<p>
&ldquo;Everybody says &lsquo;come on!&rsquo; here,&rdquo; thought Alice, as she
went slowly after it: &ldquo;I never was so ordered about in all my life,
never!&rdquo;
</p>
<p>
They had not gone far before they saw the Mock Turtle in the distance, sitting
sad and lonely on a little ledge of rock, and, as they came nearer, Alice could
hear him sighing as if his heart would break. She pitied him deeply.
&ldquo;What is his sorrow?&rdquo; she asked the Gryphon, and the Gryphon
answered, very nearly in the same words as before, &ldquo;It&rsquo;s all his
fancy, that: he hasn&rsquo;t got no sorrow, you know. Come on!&rdquo;
</p>
<p>
So they went up to the Mock Turtle, who looked at them with large eyes full of
tears, but said nothing.
</p>
<p>
&ldquo;This here young lady,&rdquo; said the Gryphon, &ldquo;she wants for to
know your history, she do.&rdquo;
</p>
<p>
&ldquo;I&rsquo;ll tell it her,&rdquo; said the Mock Turtle in a deep, hollow
tone: &ldquo;sit down, both of you, and don&rsquo;t speak a word till
I&rsquo;ve finished.&rdquo;
</p>
<p>
So they sat down, and nobody spoke for some minutes. Alice thought to herself,
&ldquo;I don&rsquo;t see how he can <i>ever</i> finish, if he doesn&rsquo;t
begin.&rdquo; But she waited patiently.
</p>
<p>
&ldquo;Once,&rdquo; said the Mock Turtle at last, with a deep sigh, &ldquo;I
was a real Turtle.&rdquo;
</p>
<p>
These words were followed by a very long silence, broken only by an occasional
exclamation of &ldquo;Hjckrrh!&rdquo; from the Gryphon, and the constant heavy
sobbing of the Mock Turtle. Alice was very nearly getting up and saying,
&ldquo;Thank you, sir, for your interesting story,&rdquo; but she could not
help thinking there <i>must</i> be more to come, so she sat still and said
nothing.
</p>
<p>
&ldquo;When we were little,&rdquo; the Mock Turtle went on at last, more
calmly, though still sobbing a little now and then, &ldquo;we went to school in
the sea. The master was an old Turtle&mdash;we used to call him
Tortoise&mdash;&rdquo;
</p>
<p>
&ldquo;Why did you call him Tortoise, if he wasn&rsquo;t one?&rdquo; Alice
asked.
</p>
<p>
&ldquo;We called him Tortoise because he taught us,&rdquo; said the Mock Turtle
angrily: &ldquo;really you are very dull!&rdquo;
</p>
<p>
&ldquo;You ought to be ashamed of yourself for asking such a simple
question,&rdquo; added the Gryphon; and then they both sat silent and looked at
poor Alice, who felt ready to sink into the earth. At last the Gryphon said to
the Mock Turtle, &ldquo;Drive on, old fellow! Don&rsquo;t be all day about
it!&rdquo; and he went on in these words:
</p>
<p>
&ldquo;Yes, we went to school in the sea, though you mayn&rsquo;t believe
it&mdash;&rdquo;
</p>
<p>
&ldquo;I never said I didn&rsquo;t!&rdquo; interrupted Alice.
</p>
<p>
&ldquo;You did,&rdquo; said the Mock Turtle.
</p>
<p>
&ldquo;Hold your tongue!&rdquo; added the Gryphon, before Alice could speak
again. The Mock Turtle went on.
</p>
<p>
&ldquo;We had the best of educations&mdash;in fact, we went to school every
day&mdash;&rdquo;
</p>
<p>
&ldquo;<i>I&rsquo;ve</i> been to a day-school, too,&rdquo; said Alice;
&ldquo;you needn&rsquo;t be so proud as all that.&rdquo;
</p>
<p>
&ldquo;With extras?&rdquo; asked the Mock Turtle a little anxiously.
</p>
<p>
&ldquo;Yes,&rdquo; said Alice, &ldquo;we learned French and music.&rdquo;
</p>
<p>
&ldquo;And washing?&rdquo; said the Mock Turtle.
</p>
<p>
&ldquo;Certainly not!&rdquo; said Alice indignantly.
</p>
<p>
&ldquo;Ah! then yours wasn&rsquo;t a really good school,&rdquo; said the Mock
Turtle in a tone of great relief. &ldquo;Now at <i>ours</i> they had at the end
of the bill, &lsquo;French, music, <i>and
washing</i>&mdash;extra.&rsquo;&rdquo;
</p>
<p>
&ldquo;You couldn&rsquo;t have wanted it much,&rdquo; said Alice; &ldquo;living
at the bottom of the sea.&rdquo;
</p>
<p>
&ldquo;I couldn&rsquo;t afford to learn it.&rdquo; said the Mock Turtle with a
sigh. &ldquo;I only took the regular course.&rdquo;
</p>
<p>
&ldquo;What was that?&rdquo; inquired Alice.
</p>
<p>
&ldquo;Reeling and Writhing, of course, to begin with,&rdquo; the Mock Turtle
replied; &ldquo;and then the different branches of Arithmetic&mdash;Ambition,
Distraction, Uglification, and Derision.&rdquo;
</p>
<p>
&ldquo;I never heard of &lsquo;Uglification,&rsquo;&rdquo; Alice ventured to
say. &ldquo;What is it?&rdquo;
</p>
<p>
The Gryphon lifted up both its paws in surprise. &ldquo;What! Never heard of
uglifying!&rdquo; it exclaimed. &ldquo;You know what to beautify is, I
suppose?&rdquo;
</p>
<p>
&ldquo;Yes,&rdquo; said Alice doubtfully: &ldquo;it
means&mdash;to&mdash;make&mdash;anything&mdash;prettier.&rdquo;
</p>
<p>
&ldquo;Well, then,&rdquo; the Gryphon went on, &ldquo;if you don&rsquo;t know
what to uglify is, you <i>are</i> a simpleton.&rdquo;
</p>
<p>
Alice did not feel encouraged to ask any more questions about it, so she turned
to the Mock Turtle, and said &ldquo;What else had you to learn?&rdquo;
</p>
<p>
&ldquo;Well, there was Mystery,&rdquo; the Mock Turtle replied, counting off
the subjects on his flappers, &ldquo;&mdash;Mystery, ancient and modern, with
Seaography: then Drawling&mdash;the Drawling-master was an old conger-eel, that
used to come once a week: <i>he</i> taught us Drawling, Stretching, and
Fainting in Coils.&rdquo;
</p>
<p>
&ldquo;What was <i>that</i> like?&rdquo; said Alice.
</p>
<p>
&ldquo;Well, I can&rsquo;t show it you myself,&rdquo; the Mock Turtle said:
&ldquo;I&rsquo;m too stiff. And the Gryphon never learnt it.&rdquo;
</p>
<p>
&ldquo;Hadn&rsquo;t time,&rdquo; said the Gryphon: &ldquo;I went to the
Classics master, though. He was an old crab, <i>he</i> was.&rdquo;
</p>
<p>
&ldquo;I never went to him,&rdquo; the Mock Turtle said with a sigh: &ldquo;he
taught Laughing and Grief, they used to say.&rdquo;
</p>
<p>
&ldquo;So he did, so he did,&rdquo; said the Gryphon, sighing in his turn; and
both creatures hid their faces in their paws.
</p>
<p>
&ldquo;And how many hours a day did you do lessons?&rdquo; said Alice, in a
hurry to change the subject.
</p>
<p>
&ldquo;Ten hours the first day,&rdquo; said the Mock Turtle: &ldquo;nine the
next, and so on.&rdquo;
</p>
<p>
&ldquo;What a curious plan!&rdquo; exclaimed Alice.
</p>
<p>
&ldquo;That&rsquo;s the reason they&rsquo;re called lessons,&rdquo; the Gryphon
remarked: &ldquo;because they lessen from day to day.&rdquo;
</p>
<p>
This was quite a new idea to Alice, and she thought it over a little before she
made her next remark. &ldquo;Then the eleventh day must have been a
holiday?&rdquo;
</p>
<p>
&ldquo;Of course it was,&rdquo; said the Mock Turtle.
</p>
<p>
&ldquo;And how did you manage on the twelfth?&rdquo; Alice went on eagerly.
</p>
<p>
&ldquo;That&rsquo;s enough about lessons,&rdquo; the Gryphon interrupted in a
very decided tone: &ldquo;tell her something about the games now.&rdquo;
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap10"></a>CHAPTER X.<br/>
The Lobster Quadrille</h2>
<p>
The Mock Turtle sighed deeply, and drew the back of one flapper across his
eyes. He looked at Alice, and tried to speak, but for a minute or two sobs
choked his voice. &ldquo;Same as if he had a bone in his throat,&rdquo; said
the Gryphon: and it set to work shaking him and punching him in the back. At
last the Mock Turtle recovered his voice, and, with tears running down his
cheeks, he went on again:&mdash;
</p>
<p>
&ldquo;You may not have lived much under the sea&mdash;&rdquo; (&ldquo;I
haven&rsquo;t,&rdquo; said Alice)&mdash;&ldquo;and perhaps you were never even
introduced to a lobster&mdash;&rdquo; (Alice began to say &ldquo;I once
tasted&mdash;&rdquo; but checked herself hastily, and said &ldquo;No,
never&rdquo;) &ldquo;&mdash;so you can have no idea what a delightful thing a
Lobster Quadrille is!&rdquo;
</p>
<p>
&ldquo;No, indeed,&rdquo; said Alice. &ldquo;What sort of a dance is it?&rdquo;
</p>
<p>
&ldquo;Why,&rdquo; said the Gryphon, &ldquo;you first form into a line along
the sea-shore&mdash;&rdquo;
</p>
<p>
&ldquo;Two lines!&rdquo; cried the Mock Turtle. &ldquo;Seals, turtles, salmon,
and so on; then, when you&rsquo;ve cleared all the jelly-fish out of the
way&mdash;&rdquo;
</p>
<p>
&ldquo;<i>That</i> generally takes some time,&rdquo; interrupted the Gryphon.
</p>
<p>
&ldquo;&mdash;you advance twice&mdash;&rdquo;
</p>
<p>
&ldquo;Each with a lobster as a partner!&rdquo; cried the Gryphon.
</p>
<p>
&ldquo;Of course,&rdquo; the Mock Turtle said: &ldquo;advance twice, set to
partners&mdash;&rdquo;
</p>
<p>
&ldquo;&mdash;change lobsters, and retire in same order,&rdquo; continued the
Gryphon.
</p>
<p>
&ldquo;Then, you know,&rdquo; the Mock Turtle went on, &ldquo;you throw
the&mdash;&rdquo;
</p>
<p>
&ldquo;The lobsters!&rdquo; shouted the Gryphon, with a bound into the air.
</p>
<p>
&ldquo;&mdash;as far out to sea as you can&mdash;&rdquo;
</p>
<p>
&ldquo;Swim after them!&rdquo; screamed the Gryphon.
</p>
<p>
&ldquo;Turn a somersault in the sea!&rdquo; cried the Mock Turtle, capering
wildly about.
</p>
<p>
&ldquo;Change lobsters again!&rdquo; yelled the Gryphon at the top of its
voice.
</p>
<p>
&ldquo;Back to land again, and that&rsquo;s all the first figure,&rdquo; said
the Mock Turtle, suddenly dropping his voice; and the two creatures, who had
been jumping about like mad things all this time, sat down again very sadly and
quietly, and looked at Alice.
</p>
<p>
&ldquo;It must be a very pretty dance,&rdquo; said Alice timidly.
</p>
<p>
&ldquo;Would you like to see a little of it?&rdquo; said the Mock Turtle.
</p>
<p>
&ldquo;Very much indeed,&rdquo; said Alice.
</p>
<p>
&ldquo;Come, let&rsquo;s try the first figure!&rdquo; said the Mock Turtle to
the Gryphon. &ldquo;We can do without lobsters, you know. Which shall
sing?&rdquo;
</p>
<p>
&ldquo;Oh, <i>you</i> sing,&rdquo; said the Gryphon. &ldquo;I&rsquo;ve
forgotten the words.&rdquo;
</p>
<p>
So they began solemnly dancing round and round Alice, every now and then
treading on her toes when they passed too close, and waving their forepaws to
mark the time, while the Mock Turtle sang this, very slowly and sadly:&mdash;
</p>
<p class="poem">
&ldquo;Will you walk a little faster?&rdquo; said a whiting to a snail.<br/>
&ldquo;There&rsquo;s a porpoise close behind us, and he&rsquo;s treading on my tail.<br/>
See how eagerly the lobsters and the turtles all advance!<br/>
They are waiting on the shingle&mdash;will you come and join the dance?<br/>
Will you, won&rsquo;t you, will you, won&rsquo;t you, will you join the dance?<br/>
Will you, won&rsquo;t you, will you, won&rsquo;t you, won&rsquo;t you join the dance?<br/>
<br/>
&ldquo;You can really have no notion how delightful it will be<br/>
When they take us up and throw us, with the lobsters, out to sea!&rdquo;<br/>
But the snail replied &ldquo;Too far, too far!&rdquo; and gave a look askance&mdash;<br/>
Said he thanked the whiting kindly, but he would not join the dance.<br/>
Would not, could not, would not, could not, would not join the dance.<br/>
Would not, could not, would not, could not, could not join the dance.<br/>
<br/>
&ldquo;What matters it how far we go?&rdquo; his scaly friend replied.<br/>
&ldquo;There is another shore, you know, upon the other side.<br/>
The further off from England the nearer is to France&mdash;<br/>
Then turn not pale, beloved snail, but come and join the dance.<br/>
Will you, won&rsquo;t you, will you, won&rsquo;t you, will you join the dance?<br/>
Will you, won&rsquo;t you, will you, won&rsquo;t you, won&rsquo;t you join the dance?&rdquo;
</p>
<p>
&ldquo;Thank you, it&rsquo;s a very interesting dance to watch,&rdquo; said
Alice, feeling very glad that it was over at last: &ldquo;and I do so like that
curious song about the whiting!&rdquo;
</p>
<p>
&ldquo;Oh, as to the whiting,&rdquo; said the Mock Turtle,
&ldquo;they&mdash;you&rsquo;ve seen them, of course?&rdquo;
</p>
<p>
&ldquo;Yes,&rdquo; said Alice, &ldquo;I&rsquo;ve often seen them at
dinn&mdash;&rdquo; she checked herself hastily.
</p>
<p>
&ldquo;I don&rsquo;t know where Dinn may be,&rdquo; said the Mock Turtle,
&ldquo;but if you&rsquo;ve seen them so often, of course you know what
they&rsquo;re like.&rdquo;
</p>
<p>
&ldquo;I believe so,&rdquo; Alice replied thoughtfully. &ldquo;They have their
tails in their mouths&mdash;and they&rsquo;re all over crumbs.&rdquo;
</p>
<p>
&ldquo;You&rsquo;re wrong about the crumbs,&rdquo; said the Mock Turtle:
&ldquo;crumbs would all wash off in the sea. But they <i>have</i> their tails
in their mouths; and the reason is&mdash;&rdquo; here the Mock Turtle yawned
and shut his eyes.&mdash;&ldquo;Tell her about the reason and all that,&rdquo;
he said to the Gryphon.
</p>
<p>
&ldquo;The reason is,&rdquo; said the Gryphon, &ldquo;that they <i>would</i> go
with the lobsters to the dance. So they got thrown out to sea. So they had to
fall a long way. So they got their tails fast in their mouths. So they
couldn&rsquo;t get them out again. That&rsquo;s all.&rdquo;
</p>
<p>
&ldquo;Thank you,&rdquo; said Alice, &ldquo;it&rsquo;s very interesting. I
never knew so much about a whiting before.&rdquo;
</p>
<p>
&ldquo;I can tell you more than that, if you like,&rdquo; said the Gryphon.
&ldquo;Do you know why it&rsquo;s called a whiting?&rdquo;
</p>
<p>
&ldquo;I never thought about it,&rdquo; said Alice. &ldquo;Why?&rdquo;
</p>
<p>
&ldquo;<i>It does the boots and shoes</i>,&rdquo; the Gryphon replied very
solemnly.
</p>
<p>
Alice was thoroughly puzzled. &ldquo;Does the boots and shoes!&rdquo; she
repeated in a wondering tone.
</p>
<p>
&ldquo;Why, what are <i>your</i> shoes done with?&rdquo; said the Gryphon.
&ldquo;I mean, what makes them so shiny?&rdquo;
</p>
<p>
Alice looked down at them, and considered a little before she gave her answer.
&ldquo;They&rsquo;re done with blacking, I believe.&rdquo;
</p>
<p>
&ldquo;Boots and shoes under the sea,&rdquo; the Gryphon went on in a deep
voice, &ldquo;are done with a whiting. Now you know.&rdquo;
</p>
<p>
&ldquo;And what are they made of?&rdquo; Alice asked in a tone of great
curiosity.
</p>
<p>
&ldquo;Soles and eels, of course,&rdquo; the Gryphon replied rather
impatiently: &ldquo;any shrimp could have told you that.&rdquo;
</p>
<p>
&ldquo;If I&rsquo;d been the whiting,&rdquo; said Alice, whose thoughts were
still running on the song, &ldquo;I&rsquo;d have said to the porpoise,
&lsquo;Keep back, please: we don&rsquo;t want <i>you</i> with us!&rsquo;&rdquo;
</p>
<p>
&ldquo;They were obliged to have him with them,&rdquo; the Mock Turtle said:
&ldquo;no wise fish would go anywhere without a porpoise.&rdquo;
</p>
<p>
&ldquo;Wouldn&rsquo;t it really?&rdquo; said Alice in a tone of great surprise.
</p>
<p>
&ldquo;Of course not,&rdquo; said the Mock Turtle: &ldquo;why, if a fish came
to <i>me</i>, and told me he was going a journey, I should say &lsquo;With what
porpoise?&rsquo;&rdquo;
</p>
<p>
&ldquo;Don&rsquo;t you mean &lsquo;purpose&rsquo;?&rdquo; said Alice.
</p>
<p>
&ldquo;I mean what I say,&rdquo; the Mock Turtle replied in an offended tone.
And the Gryphon added &ldquo;Come, let&rsquo;s hear some of <i>your</i>
adventures.&rdquo;
</p>
<p>
&ldquo;I could tell you my adventures&mdash;beginning from this morning,&rdquo;
said Alice a little timidly: &ldquo;but it&rsquo;s no use going back to
yesterday, because I was a different person then.&rdquo;
</p>
<p>
&ldquo;Explain all that,&rdquo; said the Mock Turtle.
</p>
<p>
&ldquo;No, no! The adventures first,&rdquo; said the Gryphon in an impatient
tone: &ldquo;explanations take such a dreadful time.&rdquo;
</p>
<p>
So Alice began telling them her adventures from the time when she first saw the
White Rabbit. She was a little nervous about it just at first, the two
creatures got so close to her, one on each side, and opened their eyes and
mouths so <i>very</i> wide, but she gained courage as she went on. Her
listeners were perfectly quiet till she got to the part about her repeating
&ldquo;<i>You are old, Father William</i>,&rdquo; to the Caterpillar, and the
words all coming different, and then the Mock Turtle drew a long breath, and
said &ldquo;That&rsquo;s very curious.&rdquo;
</p>
<p>
&ldquo;It&rsquo;s all about as curious as it can be,&rdquo; said the Gryphon.
</p>
<p>
&ldquo;It all came different!&rdquo; the Mock Turtle repeated thoughtfully.
&ldquo;I should like to hear her try and repeat something now. Tell her to
begin.&rdquo; He looked at the Gryphon as if he thought it had some kind of
authority over Alice.
</p>
<p>
&ldquo;Stand up and repeat &lsquo;&rsquo;<i>Tis the voice of the
sluggard</i>,&rsquo;&rdquo; said the Gryphon.
</p>
<p>
&ldquo;How the creatures order one about, and make one repeat lessons!&rdquo;
thought Alice; &ldquo;I might as well be at school at once.&rdquo; However, she
got up, and began to repeat it, but her head was so full of the Lobster
Quadrille, that she hardly knew what she was saying, and the words came very
queer indeed:&mdash;
</p>
<p class="poem">
&ldquo;&rsquo;Tis the voice of the Lobster; I heard him declare,<br/>
&ldquo;You have baked me too brown, I must sugar my hair.&rdquo;<br/>
As a duck with its eyelids, so he with his nose<br/>
Trims his belt and his buttons, and turns out his toes.&rdquo;<br/>
<br/>
[later editions continued as follows<br/>
When the sands are all dry, he is gay as a lark,<br/>
And will talk in contemptuous tones of the Shark,<br/>
But, when the tide rises and sharks are around,<br/>
His voice has a timid and tremulous sound.]
</p>
<p>
&ldquo;That&rsquo;s different from what <i>I</i> used to say when I was a
child,&rdquo; said the Gryphon.
</p>
<p>
&ldquo;Well, I never heard it before,&rdquo; said the Mock Turtle; &ldquo;but
it sounds uncommon nonsense.&rdquo;
</p>
<p>
Alice said nothing; she had sat down with her face in her hands, wondering if
anything would <i>ever</i> happen in a natural way again.
</p>
<p>
&ldquo;I should like to have it explained,&rdquo; said the Mock Turtle.
</p>
<p>
&ldquo;She can&rsquo;t explain it,&rdquo; said the Gryphon hastily. &ldquo;Go
on with the next verse.&rdquo;
</p>
<p>
&ldquo;But about his toes?&rdquo; the Mock Turtle persisted. &ldquo;How
<i>could</i> he turn them out with his nose, you know?&rdquo;
</p>
<p>
&ldquo;It&rsquo;s the first position in dancing.&rdquo; Alice said; but was
dreadfully puzzled by the whole thing, and longed to change the subject.
</p>
<p>
&ldquo;Go on with the next verse,&rdquo; the Gryphon repeated impatiently:
&ldquo;it begins &lsquo;<i>I passed by his garden</i>.&rsquo;&rdquo;
</p>
<p>
Alice did not dare to disobey, though she felt sure it would all come wrong,
and she went on in a trembling voice:&mdash;
</p>
<p class="poem">
&ldquo;I passed by his garden, and marked, with one eye,<br/>
How the Owl and the Panther were sharing a pie&mdash;&rdquo;<br/>
<br/>
[later editions continued as follows<br/>
The Panther took pie-crust, and gravy, and meat,<br/>
While the Owl had the dish as its share of the treat.<br/>
When the pie was all finished, the Owl, as a boon,<br/>
Was kindly permitted to pocket the spoon:<br/>
While the Panther received knife and fork with a growl,<br/>
And concluded the banquet&mdash;]
</p>
<p>
&ldquo;What <i>is</i> the use of repeating all that stuff,&rdquo; the Mock
Turtle interrupted, &ldquo;if you don&rsquo;t explain it as you go on?
It&rsquo;s by far the most confusing thing <i>I</i> ever heard!&rdquo;
</p>
<p>
&ldquo;Yes, I think you&rsquo;d better leave off,&rdquo; said the Gryphon: and
Alice was only too glad to do so.
</p>
<p>
&ldquo;Shall we try another figure of the Lobster Quadrille?&rdquo; the Gryphon
went on. &ldquo;Or would you like the Mock Turtle to sing you a song?&rdquo;
</p>
<p>
&ldquo;Oh, a song, please, if the Mock Turtle would be so kind,&rdquo; Alice
replied, so eagerly that the Gryphon said, in a rather offended tone,
&ldquo;Hm! No accounting for tastes! Sing her &lsquo;<i>Turtle Soup</i>,&rsquo;
will you, old fellow?&rdquo;
</p>
<p>
The Mock Turtle sighed deeply, and began, in a voice sometimes choked with
sobs, to sing this:&mdash;
</p>
<p class="poem">
&ldquo;Beautiful Soup, so rich and green,<br/>
Waiting in a hot tureen!<br/>
Who for such dainties would not stoop?<br/>
Soup of the evening, beautiful Soup!<br/>
Soup of the evening, beautiful Soup!<br/>
    Beau&mdash;ootiful Soo&mdash;oop!<br/>
    Beau&mdash;ootiful Soo&mdash;oop!<br/>
Soo&mdash;oop of the e&mdash;e&mdash;evening,<br/>
    Beautiful, beautiful Soup!<br/>
<br/>
&ldquo;Beautiful Soup! Who cares for fish,<br/>
Game, or any other dish?<br/>
Who would not give all else for two p<br/>
ennyworth only of beautiful Soup?<br/>
Pennyworth only of beautiful Soup?<br/>
    Beau&mdash;ootiful Soo&mdash;oop!<br/>
    Beau&mdash;ootiful Soo&mdash;oop!<br/>
Soo&mdash;oop of the e&mdash;e&mdash;evening,<br/>
    Beautiful, beauti&mdash;FUL SOUP!&rdquo;
</p>
<p>
&ldquo;Chorus again!&rdquo; cried the Gryphon, and the Mock Turtle had just
begun to repeat it, when a cry of &ldquo;The trial&rsquo;s beginning!&rdquo;
was heard in the distance.
</p>
<p>
&ldquo;Come on!&rdquo; cried the Gryphon, and, taking Alice by the hand, it
hurried off, without waiting for the end of the song.
</p>
<p>
&ldquo;What trial is it?&rdquo; Alice panted as she ran; but the Gryphon only
answered &ldquo;Come on!&rdquo; and ran the faster, while more and more faintly
came, carried on the breeze that followed them, the melancholy words:&mdash;
</p>
<p class="poem">
&ldquo;Soo&mdash;oop of the e&mdash;e&mdash;evening,<br/>
    Beautiful, beautiful Soup!&rdquo;
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap11"></a>CHAPTER XI.<br/>
Who Stole the Tarts?</h2>
<p>
The King and Queen of Hearts were seated on their throne when they arrived,
with a great crowd assembled about them&mdash;all sorts of little birds and
beasts, as well as the whole pack of cards: the Knave was standing before them,
in chains, with a soldier on each side to guard him; and near the King was the
White Rabbit, with a trumpet in one hand, and a scroll of parchment in the
other. In the very middle of the court was a table, with a large dish of tarts
upon it: they looked so good, that it made Alice quite hungry to look at
them&mdash;&ldquo;I wish they&rsquo;d get the trial done,&rdquo; she thought,
&ldquo;and hand round the refreshments!&rdquo; But there seemed to be no chance
of this, so she began looking at everything about her, to pass away the time.
</p>
<p>
Alice had never been in a court of justice before, but she had read about them
in books, and she was quite pleased to find that she knew the name of nearly
everything there. &ldquo;That&rsquo;s the judge,&rdquo; she said to herself,
&ldquo;because of his great wig.&rdquo;
</p>
<p>
The judge, by the way, was the King; and as he wore his crown over the wig,
(look at the frontispiece if you want to see how he did it,) he did not look at
all comfortable, and it was certainly not becoming.
</p>
<p>
&ldquo;And that&rsquo;s the jury-box,&rdquo; thought Alice, &ldquo;and those
twelve creatures,&rdquo; (she was obliged to say &ldquo;creatures,&rdquo; you
see, because some of them were animals, and some were birds,) &ldquo;I suppose
they are the jurors.&rdquo; She said this last word two or three times over to
herself, being rather proud of it: for she thought, and rightly too, that very
few little girls of her age knew the meaning of it at all. However,
&ldquo;jury-men&rdquo; would have done just as well.
</p>
<p>
The twelve jurors were all writing very busily on slates. &ldquo;What are they
doing?&rdquo; Alice whispered to the Gryphon. &ldquo;They can&rsquo;t have
anything to put down yet, before the trial&rsquo;s begun.&rdquo;
</p>
<p>
&ldquo;They&rsquo;re putting down their names,&rdquo; the Gryphon whispered in
reply, &ldquo;for fear they should forget them before the end of the
trial.&rdquo;
</p>
<p>
&ldquo;Stupid things!&rdquo; Alice began in a loud, indignant voice, but she
stopped hastily, for the White Rabbit cried out, &ldquo;Silence in the
court!&rdquo; and the King put on his spectacles and looked anxiously round, to
make out who was talking.
</p>
<p>
Alice could see, as well as if she were looking over their shoulders, that all
the jurors were writing down &ldquo;stupid things!&rdquo; on their slates, and
she could even make out that one of them didn&rsquo;t know how to spell
&ldquo;stupid,&rdquo; and that he had to ask his neighbour to tell him.
&ldquo;A nice muddle their slates&rsquo;ll be in before the trial&rsquo;s
over!&rdquo; thought Alice.
</p>
<p>
One of the jurors had a pencil that squeaked. This of course, Alice could
<i>not</i> stand, and she went round the court and got behind him, and very
soon found an opportunity of taking it away. She did it so quickly that the
poor little juror (it was Bill, the Lizard) could not make out at all what had
become of it; so, after hunting all about for it, he was obliged to write with
one finger for the rest of the day; and this was of very little use, as it left
no mark on the slate.
</p>
<p>
&ldquo;Herald, read the accusation!&rdquo; said the King.
</p>
<p>
On this the White Rabbit blew three blasts on the trumpet, and then unrolled
the parchment scroll, and read as follows:&mdash;
</p>
<p class="poem">
&ldquo;The Queen of Hearts, she made some tarts,<br/>
    All on a summer day:<br/>
The Knave of Hearts, he stole those tarts,<br/>
    And took them quite away!&rdquo;
</p>
<p>
&ldquo;Consider your verdict,&rdquo; the King said to the jury.
</p>
<p>
&ldquo;Not yet, not yet!&rdquo; the Rabbit hastily interrupted.
&ldquo;There&rsquo;s a great deal to come before that!&rdquo;
</p>
<p>
&ldquo;Call the first witness,&rdquo; said the King; and the White Rabbit blew
three blasts on the trumpet, and called out, &ldquo;First witness!&rdquo;
</p>
<p>
The first witness was the Hatter. He came in with a teacup in one hand and a
piece of bread-and-butter in the other. &ldquo;I beg pardon, your
Majesty,&rdquo; he began, &ldquo;for bringing these in: but I hadn&rsquo;t
quite finished my tea when I was sent for.&rdquo;
</p>
<p>
&ldquo;You ought to have finished,&rdquo; said the King. &ldquo;When did you
begin?&rdquo;
</p>
<p>
The Hatter looked at the March Hare, who had followed him into the court,
arm-in-arm with the Dormouse. &ldquo;Fourteenth of March, I <i>think</i> it
was,&rdquo; he said.
</p>
<p>
&ldquo;Fifteenth,&rdquo; said the March Hare.
</p>
<p>
&ldquo;Sixteenth,&rdquo; added the Dormouse.
</p>
<p>
&ldquo;Write that down,&rdquo; the King said to the jury, and the jury eagerly
wrote down all three dates on their slates, and then added them up, and reduced
the answer to shillings and pence.
</p>
<p>
&ldquo;Take off your hat,&rdquo; the King said to the Hatter.
</p>
<p>
&ldquo;It isn&rsquo;t mine,&rdquo; said the Hatter.
</p>
<p>
&ldquo;<i>Stolen!</i>&rdquo; the King exclaimed, turning to the jury, who
instantly made a memorandum of the fact.
</p>
<p>
&ldquo;I keep them to sell,&rdquo; the Hatter added as an explanation;
&ldquo;I&rsquo;ve none of my own. I&rsquo;m a hatter.&rdquo;
</p>
<p>
Here the Queen put on her spectacles, and began staring at the Hatter, who
turned pale and fidgeted.
</p>
<p>
&ldquo;Give your evidence,&rdquo; said the King; &ldquo;and don&rsquo;t be
nervous, or I&rsquo;ll have you executed on the spot.&rdquo;
</p>
<p>
This did not seem to encourage the witness at all: he kept shifting from one
foot to the other, looking uneasily at the Queen, and in his confusion he bit a
large piece out of his teacup instead of the bread-and-butter.
</p>
<p>
Just at this moment Alice felt a very curious sensation, which puzzled her a
good deal until she made out what it was: she was beginning to grow larger
again, and she thought at first she would get up and leave the court; but on
second thoughts she decided to remain where she was as long as there was room
for her.
</p>
<p>
&ldquo;I wish you wouldn&rsquo;t squeeze so.&rdquo; said the Dormouse, who was
sitting next to her. &ldquo;I can hardly breathe.&rdquo;
</p>
<p>
&ldquo;I can&rsquo;t help it,&rdquo; said Alice very meekly: &ldquo;I&rsquo;m
growing.&rdquo;
</p>
<p>
&ldquo;You&rsquo;ve no right to grow <i>here</i>,&rdquo; said the Dormouse.
</p>
<p>
&ldquo;Don&rsquo;t talk nonsense,&rdquo; said Alice more boldly: &ldquo;you
know you&rsquo;re growing too.&rdquo;
</p>
<p>
&ldquo;Yes, but <i>I</i> grow at a reasonable pace,&rdquo; said the Dormouse:
&ldquo;not in that ridiculous fashion.&rdquo; And he got up very sulkily and
crossed over to the other side of the court.
</p>
<p>
All this time the Queen had never left off staring at the Hatter, and, just as
the Dormouse crossed the court, she said to one of the officers of the court,
&ldquo;Bring me the list of the singers in the last concert!&rdquo; on which
the wretched Hatter trembled so, that he shook both his shoes off.
</p>
<p>
&ldquo;Give your evidence,&rdquo; the King repeated angrily, &ldquo;or
I&rsquo;ll have you executed, whether you&rsquo;re nervous or not.&rdquo;
</p>
<p>
&ldquo;I&rsquo;m a poor man, your Majesty,&rdquo; the Hatter began, in a
trembling voice, &ldquo;&mdash;and I hadn&rsquo;t begun my tea&mdash;not above
a week or so&mdash;and what with the bread-and-butter getting so thin&mdash;and
the twinkling of the tea&mdash;&rdquo;
</p>
<p>
&ldquo;The twinkling of the <i>what?</i>&rdquo; said the King.
</p>
<p>
&ldquo;It <i>began</i> with the tea,&rdquo; the Hatter replied.
</p>
<p>
&ldquo;Of course twinkling begins with a T!&rdquo; said the King sharply.
&ldquo;Do you take me for a dunce? Go on!&rdquo;
</p>
<p>
&ldquo;I&rsquo;m a poor man,&rdquo; the Hatter went on, &ldquo;and most things
twinkled after that&mdash;only the March Hare said&mdash;&rdquo;
</p>
<p>
&ldquo;I didn&rsquo;t!&rdquo; the March Hare interrupted in a great hurry.
</p>
<p>
&ldquo;You did!&rdquo; said the Hatter.
</p>
<p>
&ldquo;I deny it!&rdquo; said the March Hare.
</p>
<p>
&ldquo;He denies it,&rdquo; said the King: &ldquo;leave out that part.&rdquo;
</p>
<p>
&ldquo;Well, at any rate, the Dormouse said&mdash;&rdquo; the Hatter went on,
looking anxiously round to see if he would deny it too: but the Dormouse denied
nothing, being fast asleep.
</p>
<p>
&ldquo;After that,&rdquo; continued the Hatter, &ldquo;I cut some more
bread-and-butter&mdash;&rdquo;
</p>
<p>
&ldquo;But what did the Dormouse say?&rdquo; one of the jury asked.
</p>
<p>
&ldquo;That I can&rsquo;t remember,&rdquo; said the Hatter.
</p>
<p>
&ldquo;You <i>must</i> remember,&rdquo; remarked the King, &ldquo;or I&rsquo;ll
have you executed.&rdquo;
</p>
<p>
The miserable Hatter dropped his teacup and bread-and-butter, and went down on
one knee. &ldquo;I&rsquo;m a poor man, your Majesty,&rdquo; he began.
</p>
<p>
&ldquo;You&rsquo;re a <i>very</i> poor <i>speaker</i>,&rdquo; said the King.
</p>
<p>
Here one of the guinea-pigs cheered, and was immediately suppressed by the
officers of the court. (As that is rather a hard word, I will just explain to
you how it was done. They had a large canvas bag, which tied up at the mouth
with strings: into this they slipped the guinea-pig, head first, and then sat
upon it.)
</p>
<p>
&ldquo;I&rsquo;m glad I&rsquo;ve seen that done,&rdquo; thought Alice.
&ldquo;I&rsquo;ve so often read in the newspapers, at the end of trials,
&ldquo;There was some attempts at applause, which was immediately suppressed by
the officers of the court,&rdquo; and I never understood what it meant till
now.&rdquo;
</p>
<p>
&ldquo;If that&rsquo;s all you know about it, you may stand down,&rdquo;
continued the King.
</p>
<p>
&ldquo;I can&rsquo;t go no lower,&rdquo; said the Hatter: &ldquo;I&rsquo;m on
the floor, as it is.&rdquo;
</p>
<p>
&ldquo;Then you may <i>sit</i> down,&rdquo; the King replied.
</p>
<p>
Here the other guinea-pig cheered, and was suppressed.
</p>
<p>
&ldquo;Come, that finished the guinea-pigs!&rdquo; thought Alice. &ldquo;Now we
shall get on better.&rdquo;
</p>
<p>
&ldquo;I&rsquo;d rather finish my tea,&rdquo; said the Hatter, with an anxious
look at the Queen, who was reading the list of singers.
</p>
<p>
&ldquo;You may go,&rdquo; said the King, and the Hatter hurriedly left the
court, without even waiting to put his shoes on.
</p>
<p>
&ldquo;&mdash;and just take his head off outside,&rdquo; the Queen added to one
of the officers: but the Hatter was out of sight before the officer could get
to the door.
</p>
<p>
&ldquo;Call the next witness!&rdquo; said the King.
</p>
<p>
The next witness was the Duchess&rsquo;s cook. She carried the pepper-box in
her hand, and Alice guessed who it was, even before she got into the court, by
the way the people near the door began sneezing all at once.
</p>
<p>
&ldquo;Give your evidence,&rdquo; said the King.
</p>
<p>
&ldquo;Shan&rsquo;t,&rdquo; said the cook.
</p>
<p>
The King looked anxiously at the White Rabbit, who said in a low voice,
&ldquo;Your Majesty must cross-examine <i>this</i> witness.&rdquo;
</p>
<p>
&ldquo;Well, if I must, I must,&rdquo; the King said, with a melancholy air,
and, after folding his arms and frowning at the cook till his eyes were nearly
out of sight, he said in a deep voice, &ldquo;What are tarts made of?&rdquo;
</p>
<p>
&ldquo;Pepper, mostly,&rdquo; said the cook.
</p>
<p>
&ldquo;Treacle,&rdquo; said a sleepy voice behind her.
</p>
<p>
&ldquo;Collar that Dormouse,&rdquo; the Queen shrieked out. &ldquo;Behead that
Dormouse! Turn that Dormouse out of court! Suppress him! Pinch him! Off with
his whiskers!&rdquo;
</p>
<p>
For some minutes the whole court was in confusion, getting the Dormouse turned
out, and, by the time they had settled down again, the cook had disappeared.
</p>
<p>
&ldquo;Never mind!&rdquo; said the King, with an air of great relief.
&ldquo;Call the next witness.&rdquo; And he added in an undertone to the Queen,
&ldquo;Really, my dear, <i>you</i> must cross-examine the next witness. It
quite makes my forehead ache!&rdquo;
</p>
<p>
Alice watched the White Rabbit as he fumbled over the list, feeling very
curious to see what the next witness would be like, &ldquo;&mdash;for they
haven&rsquo;t got much evidence <i>yet</i>,&rdquo; she said to herself. Imagine
her surprise, when the White Rabbit read out, at the top of his shrill little
voice, the name &ldquo;Alice!&rdquo;
</p>
</div><!--end chapter-->
<div class="chapter">
<h2><a name="chap12"></a>CHAPTER XII.<br/>
Alice&rsquo;s Evidence</h2>
<p>
&ldquo;Here!&rdquo; cried Alice, quite forgetting in the flurry of the moment
how large she had grown in the last few minutes, and she jumped up in such a
hurry that she tipped over the jury-box with the edge of her skirt, upsetting
all the jurymen on to the heads of the crowd below, and there they lay
sprawling about, reminding her very much of a globe of goldfish she had
accidentally upset the week before.
</p>
<p>
&ldquo;Oh, I <i>beg</i> your pardon!&rdquo; she exclaimed in a tone of great
dismay, and began picking them up again as quickly as she could, for the
accident of the goldfish kept running in her head, and she had a vague sort of
idea that they must be collected at once and put back into the jury-box, or
they would die.
</p>
<p>
&ldquo;The trial cannot proceed,&rdquo; said the King in a very grave voice,
&ldquo;until all the jurymen are back in their proper
places&mdash;<i>all</i>,&rdquo; he repeated with great emphasis, looking hard
at Alice as he said so.
</p>
<p>
Alice looked at the jury-box, and saw that, in her haste, she had put the
Lizard in head downwards, and the poor little thing was waving its tail about
in a melancholy way, being quite unable to move. She soon got it out again, and
put it right; &ldquo;not that it signifies much,&rdquo; she said to herself;
&ldquo;I should think it would be <i>quite</i> as much use in the trial one way
up as the other.&rdquo;
</p>
<p>
As soon as the jury had a little recovered from the shock of being upset, and
their slates and pencils had been found and handed back to them, they set to
work very diligently to write out a history of the accident, all except the
Lizard, who seemed too much overcome to do anything but sit with its mouth
open, gazing up into the roof of the court.
</p>
<p>
&ldquo;What do you know about this business?&rdquo; the King said to Alice.
</p>
<p>
&ldquo;Nothing,&rdquo; said Alice.
</p>
<p>
&ldquo;Nothing <i>whatever?</i>&rdquo; persisted the King.
</p>
<p>
&ldquo;Nothing whatever,&rdquo; said Alice.
</p>
<p>
&ldquo;That&rsquo;s very important,&rdquo; the King said, turning to the jury.
They were just beginning to write this down on their slates, when the White
Rabbit interrupted: &ldquo;<i>Un</i>important, your Majesty means, of
course,&rdquo; he said in a very respectful tone, but frowning and making faces
at him as he spoke.
</p>
<p>
&ldquo;<i>Un</i>important, of course, I meant,&rdquo; the King hastily said,
and went on to himself in an undertone,
</p>
<p>
&ldquo;important&mdash;unimportant&mdash;unimportant&mdash;important&mdash;&rdquo;
as if he were trying which word sounded best.
</p>
<p>
Some of the jury wrote it down &ldquo;important,&rdquo; and some
&ldquo;unimportant.&rdquo; Alice could see this, as she was near enough to look
over their slates; &ldquo;but it doesn&rsquo;t matter a bit,&rdquo; she thought
to herself.
</p>
<p>
At this moment the King, who had been for some time busily writing in his
note-book, cackled out &ldquo;Silence!&rdquo; and read out from his book,
&ldquo;Rule Forty-two. <i>All persons more than a mile high to leave the
court</i>.&rdquo;
</p>
<p>
Everybody looked at Alice.
</p>
<p>
&ldquo;<i>I&rsquo;m</i> not a mile high,&rdquo; said Alice.
</p>
<p>
&ldquo;You are,&rdquo; said the King.
</p>
<p>
&ldquo;Nearly two miles high,&rdquo; added the Queen.
</p>
<p>
&ldquo;Well, I shan&rsquo;t go, at any rate,&rdquo; said Alice: &ldquo;besides,
that&rsquo;s not a regular rule: you invented it just now.&rdquo;
</p>
<p>
&ldquo;It&rsquo;s the oldest rule in the book,&rdquo; said the King.
</p>
<p>
&ldquo;Then it ought to be Number One,&rdquo; said Alice.
</p>
<p>
The King turned pale, and shut his note-book hastily. &ldquo;Consider your
verdict,&rdquo; he said to the jury, in a low, trembling voice.
</p>
<p>
&ldquo;There&rsquo;s more evidence to come yet, please your Majesty,&rdquo;
said the White Rabbit, jumping up in a great hurry; &ldquo;this paper has just
been picked up.&rdquo;
</p>
<p>
&ldquo;What&rsquo;s in it?&rdquo; said the Queen.
</p>
<p>
&ldquo;I haven&rsquo;t opened it yet,&rdquo; said the White Rabbit, &ldquo;but
it seems to be a letter, written by the prisoner to&mdash;to somebody.&rdquo;
</p>
<p>
&ldquo;It must have been that,&rdquo; said the King, &ldquo;unless it was
written to nobody, which isn&rsquo;t usual, you know.&rdquo;
</p>
<p>
&ldquo;Who is it directed to?&rdquo; said one of the jurymen.
</p>
<p>
&ldquo;It isn&rsquo;t directed at all,&rdquo; said the White Rabbit; &ldquo;in
fact, there&rsquo;s nothing written on the <i>outside</i>.&rdquo; He unfolded
the paper as he spoke, and added &ldquo;It isn&rsquo;t a letter, after all:
it&rsquo;s a set of verses.&rdquo;
</p>
<p>
&ldquo;Are they in the prisoner&rsquo;s handwriting?&rdquo; asked another of
the jurymen.
</p>
<p>
&ldquo;No, they&rsquo;re not,&rdquo; said the White Rabbit, &ldquo;and
that&rsquo;s the queerest thing about it.&rdquo; (The jury all looked puzzled.)
</p>
<p>
&ldquo;He must have imitated somebody else&rsquo;s hand,&rdquo; said the King.
(The jury all brightened up again.)
</p>
<p>
&ldquo;Please your Majesty,&rdquo; said the Knave, &ldquo;I didn&rsquo;t write
it, and they can&rsquo;t prove I did: there&rsquo;s no name signed at the
end.&rdquo;
</p>
<p>
&ldquo;If you didn&rsquo;t sign it,&rdquo; said the King, &ldquo;that only
makes the matter worse. You <i>must</i> have meant some mischief, or else
you&rsquo;d have signed your name like an honest man.&rdquo;
</p>
<p>
There was a general clapping of hands at this: it was the first really clever
thing the King had said that day.
</p>
<p>
&ldquo;That <i>proves</i> his guilt,&rdquo; said the Queen.
</p>
<p>
&ldquo;It proves nothing of the sort!&rdquo; said Alice. &ldquo;Why, you
don&rsquo;t even know what they&rsquo;re about!&rdquo;
</p>
<p>
&ldquo;Read them,&rdquo; said the King.
</p>
<p>
The White Rabbit put on his spectacles. &ldquo;Where shall I begin, please your
Majesty?&rdquo; he asked.
</p>
<p>
&ldquo;Begin at the beginning,&rdquo; the King said gravely, &ldquo;and go on
till you come to the end: then stop.&rdquo;
</p>
<p>
These were the verses the White Rabbit read:&mdash;
</p>
<p class="poem">
&ldquo;They told me you had been to her,<br/>
    And mentioned me to him:<br/>
She gave me a good character,<br/>
    But said I could not swim.<br/>
<br/>
He sent them word I had not gone<br/>
    (We know it to be true):<br/>
If she should push the matter on,<br/>
    What would become of you?<br/>
<br/>
I gave her one, they gave him two,<br/>
    You gave us three or more;<br/>
They all returned from him to you,<br/>
    Though they were mine before.<br/>
<br/>
If I or she should chance to be<br/>
    Involved in this affair,<br/>
He trusts to you to set them free,<br/>
    Exactly as we were.<br/>
<br/>
My notion was that you had been<br/>
    (Before she had this fit)<br/>
An obstacle that came between<br/>
    Him, and ourselves, and it.<br/>
<br/>
Don&rsquo;t let him know she liked them best,<br/>
    For this must ever be<br/>
A secret, kept from all the rest,<br/>
    Between yourself and me.&rdquo;
</p>
<p>
&ldquo;That&rsquo;s the most important piece of evidence we&rsquo;ve heard
yet,&rdquo; said the King, rubbing his hands; &ldquo;so now let the
jury&mdash;&rdquo;
</p>
<p>
&ldquo;If any one of them can explain it,&rdquo; said Alice, (she had grown so
large in the last few minutes that she wasn&rsquo;t a bit afraid of
interrupting him,) &ldquo;I&rsquo;ll give him sixpence. <i>I</i> don&rsquo;t
believe there&rsquo;s an atom of meaning in it.&rdquo;
</p>
<p>
The jury all wrote down on their slates, &ldquo;<i>She</i> doesn&rsquo;t
believe there&rsquo;s an atom of meaning in it,&rdquo; but none of them
attempted to explain the paper.
</p>
<p>
&ldquo;If there&rsquo;s no meaning in it,&rdquo; said the King, &ldquo;that
saves a world of trouble, you know, as we needn&rsquo;t try to find any. And
yet I don&rsquo;t know,&rdquo; he went on, spreading out the verses on his
knee, and looking at them with one eye; &ldquo;I seem to see some meaning in
them, after all. &ldquo;&mdash;<i>said I could not swim</i>&mdash;&rdquo; you
can&rsquo;t swim, can you?&rdquo; he added, turning to the Knave.
</p>
<p>
The Knave shook his head sadly. &ldquo;Do I look like it?&rdquo; he said.
(Which he certainly did <i>not</i>, being made entirely of cardboard.)
</p>
<p>
&ldquo;All right, so far,&rdquo; said the King, and he went on muttering over
the verses to himself: &ldquo;&lsquo;<i>We know it to be true</i>&mdash;&rsquo;
that&rsquo;s the jury, of course&mdash;&lsquo;<i>I gave her one, they gave him
two</i>&mdash;&rsquo; why, that must be what he did with the tarts, you
know&mdash;&rdquo;
</p>
<p>
&ldquo;But, it goes on &lsquo;<i>they all returned from him to
you</i>,&rsquo;&rdquo; said Alice.
</p>
<p>
&ldquo;Why, there they are!&rdquo; said the King triumphantly, pointing to the
tarts on the table. &ldquo;Nothing can be clearer than <i>that</i>. Then
again&mdash;&lsquo;<i>before she had this fit</i>&mdash;&rsquo; you never had
fits, my dear, I think?&rdquo; he said to the Queen.
</p>
<p>
&ldquo;Never!&rdquo; said the Queen furiously, throwing an inkstand at the
Lizard as she spoke. (The unfortunate little Bill had left off writing on his
slate with one finger, as he found it made no mark; but he now hastily began
again, using the ink, that was trickling down his face, as long as it lasted.)
</p>
<p>
&ldquo;Then the words don&rsquo;t <i>fit</i> you,&rdquo; said the King, looking
round the court with a smile. There was a dead silence.
</p>
<p>
&ldquo;It&rsquo;s a pun!&rdquo; the King added in an offended tone, and
everybody laughed, &ldquo;Let the jury consider their verdict,&rdquo; the King
said, for about the twentieth time that day.
</p>
<p>
&ldquo;No, no!&rdquo; said the Queen. &ldquo;Sentence first&mdash;verdict
afterwards.&rdquo;
</p>
<p>
&ldquo;Stuff and nonsense!&rdquo; said Alice loudly. &ldquo;The idea of having
the sentence first!&rdquo;
</p>
<p>
&ldquo;Hold your tongue!&rdquo; said the Queen, turning purple.
</p>
<p>
&ldquo;I won&rsquo;t!&rdquo; said Alice.
</p>
<p>
&ldquo;Off with her head!&rdquo; the Queen shouted at the top of her voice.
Nobody moved.
</p>
<p>
&ldquo;Who cares for you?&rdquo; said Alice, (she had grown to her full size by
this time.) &ldquo;You&rsquo;re nothing but a pack of cards!&rdquo;
</p>
<p>
At this the whole pack rose up into the air, and came flying down upon her: she
gave a little scream, half of fright and half of anger, and tried to beat them
off, and found herself lying on the bank, with her head in the lap of her
sister, who was gently brushing away some dead leaves that had fluttered down
from the trees upon her face.
</p>
<p>
&ldquo;Wake up, Alice dear!&rdquo; said her sister; &ldquo;Why, what a long
sleep you&rsquo;ve had!&rdquo;
</p>
<p>
&ldquo;Oh, I&rsquo;ve had such a curious dream!&rdquo; said Alice, and she told
her sister, as well as she could remember them, all these strange Adventures of
hers that you have just been reading about; and when she had finished, her
sister kissed her, and said, &ldquo;It <i>was</i> a curious dream, dear,
certainly: but now run in to your tea; it&rsquo;s getting late.&rdquo; So Alice
got up and ran off, thinking while she ran, as well she might, what a wonderful
dream it had been.
</p>
<hr />
<p>
But her sister sat still just as she left her, leaning her head on her hand,
watching the setting sun, and thinking of little Alice and all her wonderful
Adventures, till she too began dreaming after a fashion, and this was her
dream:&mdash;
</p>
<p>
First, she dreamed of little Alice herself, and once again the tiny hands were
clasped upon her knee, and the bright eager eyes were looking up into
hers&mdash;she could hear the very tones of her voice, and see that queer
little toss of her head to keep back the wandering hair that <i>would</i>
always get into her eyes&mdash;and still as she listened, or seemed to listen,
the whole place around her became alive with the strange creatures of her
little sister&rsquo;s dream.
</p>
<p>
The long grass rustled at her feet as the White Rabbit hurried by&mdash;the
frightened Mouse splashed his way through the neighbouring pool&mdash;she could
hear the rattle of the teacups as the March Hare and his friends shared their
never-ending meal, and the shrill voice of the Queen ordering off her
unfortunate guests to execution&mdash;once more the pig-baby was sneezing on
the Duchess&rsquo;s knee, while plates and dishes crashed around it&mdash;once
more the shriek of the Gryphon, the squeaking of the Lizard&rsquo;s
slate-pencil, and the choking of the suppressed guinea-pigs, filled the air,
mixed up with the distant sobs of the miserable Mock Turtle.
</p>
<p>
So she sat on, with closed eyes, and half believed herself in Wonderland,
though she knew she had but to open them again, and all would change to dull
reality&mdash;the grass would be only rustling in the wind, and the pool
rippling to the waving of the reeds&mdash;the rattling teacups would change to
tinkling sheep-bells, and the Queen&rsquo;s shrill cries to the voice of the
shepherd boy&mdash;and the sneeze of the baby, the shriek of the Gryphon, and
all the other queer noises, would change (she knew) to the confused clamour of
the busy farm-yard&mdash;while the lowing of the cattle in the distance would
take the place of the Mock Turtle&rsquo;s heavy sobs.
</p>
<p>
Lastly, she pictured to herself how this same little sister of hers would, in
the after-time, be herself a grown woman; and how she would keep, through all
her riper years, the simple and loving heart of her childhood: and how she
would gather about her other little children, and make <i>their</i> eyes bright
and eager with many a strange tale, perhaps even with the dream of Wonderland
of long ago: and how she would feel with all their simple sorrows, and find a
pleasure in all their simple joys, remembering her own child-life, and the
happy summer days.
</p>
<h5>THE END </h5>
</div><!--end chapter-->
<div style='display:block;margin-top:4em'>*** END OF THE PROJECT GUTENBERG EBOOK ALICE’S ADVENTURES IN WONDERLAND ***</div>
<div style='display:block;margin:1em 0;'>This file should be named 11-h.htm or 11-h.zip</div>
<div style='display:block;margin:1em 0;'>This and all associated files of various formats will be found in https://www.gutenberg.org/1/11/</div>
<div style='display:block; margin:1em 0'>
Updated editions will replace the previous one&#8212;the old editions will
be renamed.
</div>
<div style='display:block; margin:1em 0'>
Creating the works from print editions not protected by U.S. copyright
law means that no one owns a United States copyright in these works,
so the Foundation (and you!) can copy and distribute it in the United
States without permission and without paying copyright
royalties. Special rules, set forth in the General Terms of Use part
of this license, apply to copying and distributing Project
Gutenberg&#8482; electronic works to protect the PROJECT GUTENBERG&#8482;
concept and trademark. Project Gutenberg is a registered trademark,
and may not be used if you charge for an eBook, except by following
the terms of the trademark license, including paying royalties for use
of the Project Gutenberg trademark. If you do not charge anything for
copies of this eBook, complying with the trademark license is very
easy. You may use this eBook for nearly any purpose such as creation
of derivative works, reports, performances and research. Project
Gutenberg eBooks may be modified and printed and given away--you may
do practically ANYTHING in the United States with eBooks not protected
by U.S. copyright law. Redistribution is subject to the trademark
license, especially commercial redistribution.
</div>
<div style='margin:0.83em 0; font-size:1.1em; text-align:center'>START: FULL LICENSE<br />
<span style='font-size:smaller'>THE FULL PROJECT GUTENBERG LICENSE<br />
PLEASE READ THIS BEFORE YOU DISTRIBUTE OR USE THIS WORK</span>
</div>
<div style='display:block; margin:1em 0'>
To protect the Project Gutenberg&#8482; mission of promoting the free
distribution of electronic works, by using or distributing this work
(or any other work associated in any way with the phrase &#8220;Project
Gutenberg&#8221;), you agree to comply with all the terms of the Full
Project Gutenberg&#8482; License available with this file or online at
www.gutenberg.org/license.
</div>
<div style='display:block; font-size:1.1em; margin:1em 0; font-weight:bold'>
Section 1. General Terms of Use and Redistributing Project Gutenberg&#8482; electronic works
</div>
<div style='display:block; margin:1em 0'>
1.A. By reading or using any part of this Project Gutenberg&#8482;
electronic work, you indicate that you have read, understand, agree to
and accept all the terms of this license and intellectual property
(trademark/copyright) agreement. If you do not agree to abide by all
the terms of this agreement, you must cease using and return or
destroy all copies of Project Gutenberg&#8482; electronic works in your
possession. If you paid a fee for obtaining a copy of or access to a
Project Gutenberg&#8482; electronic work and you do not agree to be bound
by the terms of this agreement, you may obtain a refund from the person
or entity to whom you paid the fee as set forth in paragraph 1.E.8.
</div>
<div style='display:block; margin:1em 0'>
1.B. &#8220;Project Gutenberg&#8221; is a registered trademark. It may only be
used on or associated in any way with an electronic work by people who
agree to be bound by the terms of this agreement. There are a few
things that you can do with most Project Gutenberg&#8482; electronic works
even without complying with the full terms of this agreement. See
paragraph 1.C below. There are a lot of things you can do with Project
Gutenberg&#8482; electronic works if you follow the terms of this
agreement and help preserve free future access to Project Gutenberg&#8482;
electronic works. See paragraph 1.E below.
</div>
<div style='display:block; margin:1em 0'>
1.C. The Project Gutenberg Literary Archive Foundation (&#8220;the
Foundation&#8221; or PGLAF), owns a compilation copyright in the collection
of Project Gutenberg&#8482; electronic works. Nearly all the individual
works in the collection are in the public domain in the United
States. If an individual work is unprotected by copyright law in the
United States and you are located in the United States, we do not
claim a right to prevent you from copying, distributing, performing,
displaying or creating derivative works based on the work as long as
all references to Project Gutenberg are removed. Of course, we hope
that you will support the Project Gutenberg&#8482; mission of promoting
free access to electronic works by freely sharing Project Gutenberg&#8482;
works in compliance with the terms of this agreement for keeping the
Project Gutenberg&#8482; name associated with the work. You can easily
comply with the terms of this agreement by keeping this work in the
same format with its attached full Project Gutenberg&#8482; License when
you share it without charge with others.
</div>
<div style='display:block; margin:1em 0'>
1.D. The copyright laws of the place where you are located also govern
what you can do with this work. Copyright laws in most countries are
in a constant state of change. If you are outside the United States,
check the laws of your country in addition to the terms of this
agreement before downloading, copying, displaying, performing,
distributing or creating derivative works based on this work or any
other Project Gutenberg&#8482; work. The Foundation makes no
representations concerning the copyright status of any work in any
country other than the United States.
</div>
<div style='display:block; margin:1em 0'>
1.E. Unless you have removed all references to Project Gutenberg:
</div>
<div style='display:block; margin:1em 0'>
1.E.1. The following sentence, with active links to, or other
immediate access to, the full Project Gutenberg&#8482; License must appear
prominently whenever any copy of a Project Gutenberg&#8482; work (any work
on which the phrase &#8220;Project Gutenberg&#8221; appears, or with which the
phrase &#8220;Project Gutenberg&#8221; is associated) is accessed, displayed,
performed, viewed, copied or distributed:
</div>
<blockquote>
<div style='display:block; margin:1em 0'>
This eBook is for the use of anyone anywhere in the United States and most
other parts of the world at no cost and with almost no restrictions
whatsoever. You may copy it, give it away or re-use it under the terms
of the Project Gutenberg License included with this eBook or online
at <a href="https://www.gutenberg.org">www.gutenberg.org</a>. If you
are not located in the United States, you will have to check the laws
of the country where you are located before using this eBook.
</div>
</blockquote>
<div style='display:block; margin:1em 0'>
1.E.2. If an individual Project Gutenberg&#8482; electronic work is
derived from texts not protected by U.S. copyright law (does not
contain a notice indicating that it is posted with permission of the
copyright holder), the work can be copied and distributed to anyone in
the United States without paying any fees or charges. If you are
redistributing or providing access to a work with the phrase &#8220;Project
Gutenberg&#8221; associated with or appearing on the work, you must comply
either with the requirements of paragraphs 1.E.1 through 1.E.7 or
obtain permission for the use of the work and the Project Gutenberg&#8482;
trademark as set forth in paragraphs 1.E.8 or 1.E.9.
</div>
<div style='display:block; margin:1em 0'>
1.E.3. If an individual Project Gutenberg&#8482; electronic work is posted
with the permission of the copyright holder, your use and distribution
must comply with both paragraphs 1.E.1 through 1.E.7 and any
additional terms imposed by the copyright holder. Additional terms
will be linked to the Project Gutenberg&#8482; License for all works
posted with the permission of the copyright holder found at the
beginning of this work.
</div>
<div style='display:block; margin:1em 0'>
1.E.4. Do not unlink or detach or remove the full Project Gutenberg&#8482;
License terms from this work, or any files containing a part of this
work or any other work associated with Project Gutenberg&#8482;.
</div>
<div style='display:block; margin:1em 0'>
1.E.5. Do not copy, display, perform, distribute or redistribute this
electronic work, or any part of this electronic work, without
prominently displaying the sentence set forth in paragraph 1.E.1 with
active links or immediate access to the full terms of the Project
Gutenberg&#8482; License.
</div>
<div style='display:block; margin:1em 0'>
1.E.6. You may convert to and distribute this work in any binary,
compressed, marked up, nonproprietary or proprietary form, including
any word processing or hypertext form. However, if you provide access
to or distribute copies of a Project Gutenberg&#8482; work in a format
other than &#8220;Plain Vanilla ASCII&#8221; or other format used in the official
version posted on the official Project Gutenberg&#8482; website
(www.gutenberg.org), you must, at no additional cost, fee or expense
to the user, provide a copy, a means of exporting a copy, or a means
of obtaining a copy upon request, of the work in its original &#8220;Plain
Vanilla ASCII&#8221; or other form. Any alternate format must include the
full Project Gutenberg&#8482; License as specified in paragraph 1.E.1.
</div>
<div style='display:block; margin:1em 0'>
1.E.7. Do not charge a fee for access to, viewing, displaying,
performing, copying or distributing any Project Gutenberg&#8482; works
unless you comply with paragraph 1.E.8 or 1.E.9.
</div>
<div style='display:block; margin:1em 0'>
1.E.8. You may charge a reasonable fee for copies of or providing
access to or distributing Project Gutenberg&#8482; electronic works
provided that:
</div>
<div style='margin-left:0.7em;'>
<div style='text-indent:-0.7em'>
&bull; You pay a royalty fee of 20% of the gross profits you derive from
the use of Project Gutenberg&#8482; works calculated using the method
you already use to calculate your applicable taxes. The fee is owed
to the owner of the Project Gutenberg&#8482; trademark, but he has
agreed to donate royalties under this paragraph to the Project
Gutenberg Literary Archive Foundation. Royalty payments must be paid
within 60 days following each date on which you prepare (or are
legally required to prepare) your periodic tax returns. Royalty
payments should be clearly marked as such and sent to the Project
Gutenberg Literary Archive Foundation at the address specified in
Section 4, &#8220;Information about donations to the Project Gutenberg
Literary Archive Foundation.&#8221;
</div>
<div style='text-indent:-0.7em'>
&bull; You provide a full refund of any money paid by a user who notifies
you in writing (or by e-mail) within 30 days of receipt that s/he
does not agree to the terms of the full Project Gutenberg&#8482;
License. You must require such a user to return or destroy all
copies of the works possessed in a physical medium and discontinue
all use of and all access to other copies of Project Gutenberg&#8482;
works.
</div>
<div style='text-indent:-0.7em'>
&bull; You provide, in accordance with paragraph 1.F.3, a full refund of
any money paid for a work or a replacement copy, if a defect in the
electronic work is discovered and reported to you within 90 days of
receipt of the work.
</div>
<div style='text-indent:-0.7em'>
&bull; You comply with all other terms of this agreement for free
distribution of Project Gutenberg&#8482; works.
</div>
</div>
<div style='display:block; margin:1em 0'>
1.E.9. If you wish to charge a fee or distribute a Project
Gutenberg&#8482; electronic work or group of works on different terms than
are set forth in this agreement, you must obtain permission in writing
from the Project Gutenberg Literary Archive Foundation, the manager of
the Project Gutenberg&#8482; trademark. Contact the Foundation as set
forth in Section 3 below.
</div>
<div style='display:block; margin:1em 0'>
1.F.
</div>
<div style='display:block; margin:1em 0'>
1.F.1. Project Gutenberg volunteers and employees expend considerable
effort to identify, do copyright research on, transcribe and proofread
works not protected by U.S. copyright law in creating the Project
Gutenberg&#8482; collection. Despite these efforts, Project Gutenberg&#8482;
electronic works, and the medium on which they may be stored, may
contain &#8220;Defects,&#8221; such as, but not limited to, incomplete, inaccurate
or corrupt data, transcription errors, a copyright or other
intellectual property infringement, a defective or damaged disk or
other medium, a computer virus, or computer codes that damage or
cannot be read by your equipment.
</div>
<div style='display:block; margin:1em 0'>
1.F.2. LIMITED WARRANTY, DISCLAIMER OF DAMAGES - Except for the &#8220;Right
of Replacement or Refund&#8221; described in paragraph 1.F.3, the Project
Gutenberg Literary Archive Foundation, the owner of the Project
Gutenberg&#8482; trademark, and any other party distributing a Project
Gutenberg&#8482; electronic work under this agreement, disclaim all
liability to you for damages, costs and expenses, including legal
fees. YOU AGREE THAT YOU HAVE NO REMEDIES FOR NEGLIGENCE, STRICT
LIABILITY, BREACH OF WARRANTY OR BREACH OF CONTRACT EXCEPT THOSE
PROVIDED IN PARAGRAPH 1.F.3. YOU AGREE THAT THE FOUNDATION, THE
TRADEMARK OWNER, AND ANY DISTRIBUTOR UNDER THIS AGREEMENT WILL NOT BE
LIABLE TO YOU FOR ACTUAL, DIRECT, INDIRECT, CONSEQUENTIAL, PUNITIVE OR
INCIDENTAL DAMAGES EVEN IF YOU GIVE NOTICE OF THE POSSIBILITY OF SUCH
DAMAGE.
</div>
<div style='display:block; margin:1em 0'>
1.F.3. LIMITED RIGHT OF REPLACEMENT OR REFUND - If you discover a
defect in this electronic work within 90 days of receiving it, you can
receive a refund of the money (if any) you paid for it by sending a
written explanation to the person you received the work from. If you
received the work on a physical medium, you must return the medium
with your written explanation. The person or entity that provided you
with the defective work may elect to provide a replacement copy in
lieu of a refund. If you received the work electronically, the person
or entity providing it to you may choose to give you a second
opportunity to receive the work electronically in lieu of a refund. If
the second copy is also defective, you may demand a refund in writing
without further opportunities to fix the problem.
</div>
<div style='display:block; margin:1em 0'>
1.F.4. Except for the limited right of replacement or refund set forth
in paragraph 1.F.3, this work is provided to you &#8216;AS-IS&#8217;, WITH NO
OTHER WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PURPOSE.
</div>
<div style='display:block; margin:1em 0'>
1.F.5. Some states do not allow disclaimers of certain implied
warranties or the exclusion or limitation of certain types of
damages. If any disclaimer or limitation set forth in this agreement
violates the law of the state applicable to this agreement, the
agreement shall be interpreted to make the maximum disclaimer or
limitation permitted by the applicable state law. The invalidity or
unenforceability of any provision of this agreement shall not void the
remaining provisions.
</div>
<div style='display:block; margin:1em 0'>
1.F.6. INDEMNITY - You agree to indemnify and hold the Foundation, the
trademark owner, any agent or employee of the Foundation, anyone
providing copies of Project Gutenberg&#8482; electronic works in
accordance with this agreement, and any volunteers associated with the
production, promotion and distribution of Project Gutenberg&#8482;
electronic works, harmless from all liability, costs and expenses,
including legal fees, that arise directly or indirectly from any of
the following which you do or cause to occur: (a) distribution of this
or any Project Gutenberg&#8482; work, (b) alteration, modification, or
additions or deletions to any Project Gutenberg&#8482; work, and (c) any
Defect you cause.
</div>
<div style='display:block; font-size:1.1em; margin:1em 0; font-weight:bold'>
Section 2. Information about the Mission of Project Gutenberg&#8482;
</div>
<div style='display:block; margin:1em 0'>
Project Gutenberg&#8482; is synonymous with the free distribution of
electronic works in formats readable by the widest variety of
computers including obsolete, old, middle-aged and new computers. It
exists because of the efforts of hundreds of volunteers and donations
from people in all walks of life.
</div>
<div style='display:block; margin:1em 0'>
Volunteers and financial support to provide volunteers with the
assistance they need are critical to reaching Project Gutenberg&#8482;&#8217;s
goals and ensuring that the Project Gutenberg&#8482; collection will
remain freely available for generations to come. In 2001, the Project
Gutenberg Literary Archive Foundation was created to provide a secure
and permanent future for Project Gutenberg&#8482; and future
generations. To learn more about the Project Gutenberg Literary
Archive Foundation and how your efforts and donations can help, see
Sections 3 and 4 and the Foundation information page at www.gutenberg.org.
</div>
<div style='display:block; font-size:1.1em; margin:1em 0; font-weight:bold'>
Section 3. Information about the Project Gutenberg Literary Archive Foundation
</div>
<div style='display:block; margin:1em 0'>
The Project Gutenberg Literary Archive Foundation is a non-profit
501(c)(3) educational corporation organized under the laws of the
state of Mississippi and granted tax exempt status by the Internal
Revenue Service. The Foundation&#8217;s EIN or federal tax identification
number is 64-6221541. Contributions to the Project Gutenberg Literary
Archive Foundation are tax deductible to the full extent permitted by
U.S. federal laws and your state&#8217;s laws.
</div>
<div style='display:block; margin:1em 0'>
The Foundation&#8217;s business office is located at 809 North 1500 West,
Salt Lake City, UT 84116, (801) 596-1887. Email contact links and up
to date contact information can be found at the Foundation&#8217;s website
and official page at www.gutenberg.org/contact
</div>
<div style='display:block; font-size:1.1em; margin:1em 0; font-weight:bold'>
Section 4. Information about Donations to the Project Gutenberg Literary Archive Foundation
</div>
<div style='display:block; margin:1em 0'>
Project Gutenberg&#8482; depends upon and cannot survive without widespread
public support and donations to carry out its mission of
increasing the number of public domain and licensed works that can be
freely distributed in machine-readable form accessible by the widest
array of equipment including outdated equipment. Many small donations
($1 to $5,000) are particularly important to maintaining tax exempt
status with the IRS.
</div>
<div style='display:block; margin:1em 0'>
The Foundation is committed to complying with the laws regulating
charities and charitable donations in all 50 states of the United
States. Compliance requirements are not uniform and it takes a
considerable effort, much paperwork and many fees to meet and keep up
with these requirements. We do not solicit donations in locations
where we have not received written confirmation of compliance. To SEND
DONATIONS or determine the status of compliance for any particular state
visit <a href="https://www.gutenberg.org/donate/">www.gutenberg.org/donate</a>.
</div>
<div style='display:block; margin:1em 0'>
While we cannot and do not solicit contributions from states where we
have not met the solicitation requirements, we know of no prohibition
against accepting unsolicited donations from donors in such states who
approach us with offers to donate.
</div>
<div style='display:block; margin:1em 0'>
International donations are gratefully accepted, but we cannot make
any statements concerning tax treatment of donations received from
outside the United States. U.S. laws alone swamp our small staff.
</div>
<div style='display:block; margin:1em 0'>
Please check the Project Gutenberg web pages for current donation
methods and addresses. Donations are accepted in a number of other
ways including checks, online payments and credit card donations. To
donate, please visit: www.gutenberg.org/donate
</div>
<div style='display:block; font-size:1.1em; margin:1em 0; font-weight:bold'>
Section 5. General Information About Project Gutenberg&#8482; electronic works
</div>
<div style='display:block; margin:1em 0'>
Professor Michael S. Hart was the originator of the Project
Gutenberg&#8482; concept of a library of electronic works that could be
freely shared with anyone. For forty years, he produced and
distributed Project Gutenberg&#8482; eBooks with only a loose network of
volunteer support.
</div>
<div style='display:block; margin:1em 0'>
Project Gutenberg&#8482; eBooks are often created from several printed
editions, all of which are confirmed as not protected by copyright in
the U.S. unless a copyright notice is included. Thus, we do not
necessarily keep eBooks in compliance with any particular paper
edition.
</div>
<div style='display:block; margin:1em 0'>
Most people start at our website which has the main PG search
facility: <a href="https://www.gutenberg.org">www.gutenberg.org</a>.
</div>
<div style='display:block; margin:1em 0'>
This website includes information about Project Gutenberg&#8482;,
including how to make donations to the Project Gutenberg Literary
Archive Foundation, how to help produce our new eBooks, and how to
subscribe to our email newsletter to hear about new eBooks.
</div>
</body>
</html>
`;
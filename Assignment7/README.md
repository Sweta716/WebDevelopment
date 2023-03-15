<div align="center">
  
  <h2 align="center">INFO 6150 - Web Design and User Experience Engineering</h2>

  SBI website <br />Responsive for all devices, built using HTML and CSS.

</div>




List of all the SCSS/SASS features implemented -

Variables => Created all the Variables in a separate SCSS file. 

Custom Properties => Aslo known as CSS Variables. Used in index.scss file in footer selector.

Nesting => Used to nest CSS selectors. In index.scss file used nesting in nav, card and footer selectors. In contactMe.scss file used nesting in nav, card, social, location and footer selectors. In aboutMe.scss file used nesting in nav, carousel and footer.

Interpolation => Used in a Sass stylesheet to embed the result of a SassScript expression into a chunk of CSS. Used @extend Interpolation in nav selector in index.scss , contactMe.scss & aboutMe.scss files and in body selector in index.scss file.

Placeholder Selectors => It is a class selector, but it starts with a % and it's not included in the CSS output. Used in body selector in index.scss. Defined a %pseudoBody Placeholder selector and used @extend to use it inside body selector.

Mixins => @mixin lets us create reusable css code. Created two separate header and footer scss files. They contain mixins which contain multiple css Properties. Used @import to import header & footer scss files in index.scss , contactMe.scss & aboutMe.scss files. Used @include inside index.scss , contactMe.scss & aboutMe.scss files under html selector and footer selector to call the mixins. 

Functions => It allow to define complex operations on SassScript values that we can re-use throughout your stylesheet.

" CSS GRID AND FLEX ARE USED IN RECENT BANKING ARTICLES. "

<b> IDE used to run the code is VS Studio Code.

### License

This project is **free to use** and does not contains any license.


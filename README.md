# Tallies
### For all your counting needs

## Counting
This package is a plug-and-play component that takes in a prop, `number` and renders it in the familiar system of "fives" (groups of four slashes, crossed) and ones (individual slashes). Without a `number` prop, the component will render empty, but will not cause an error (it has a default value of 0). That said, `number` can be any positive integer, but negative numbers will generate a [RangeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError) (and crash the application).

### Screenshots:  
![Tallies with number prop set to 2](https://i.ibb.co/K9Tmjjr/tallies-2.jpg)  
Tallies with `number` prop set to 2  
![Tallies with number prop set to 7](https://i.ibb.co/Sm1w1vH/tallies-7.jpg)  
Tallies with `number` prop set to 7  
[![Tallies with number prop set to dynamic variable](https://i.ibb.co/F4KjCrH/tallies-random.jpg)](https://github.com/ProfessionalMaxJS/tallies_demo/blob/main/src/App.js)  
[![Tallies with number prop set to dynamic variable](https://i.ibb.co/0s6tbsQ/tallies-random-clip.gif)](https://github.com/ProfessionalMaxJS/tallies_demo/blob/main/src/App.js)  
Tallies with number prop set to dynamic variable  

## Styling
Other available props are for styling, and not given default values. As a result, a Tallies component will inherit the styling of its parents. All available props take in a string which, when following [JSX Inline Styling syntax](https://techstacker.com/how-to-inline-style-jsx-react-css/) (ie, all values must be strings), will affect given CSS properties of the component. Available props include:  
* `textColor`: to manipulate the component's [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) field.
* `textSize`: for [fontSize](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).
* `font`: for [fontFamily](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family).
* `lineStyle`: targets the [textDecorationStyle](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style) property to manipulate the style of the strike-through itself (try wavy, it's fun).
* `lineColor`: same as above, but targets [textDecorationColor](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color) for its color.  
Note: the last two props work because the tallies are generated with [textDecorationLine](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line) pre-set to "line-through" in the "fives" section.

### Screenshots:
![Tallies with no props set.](https://i.ibb.co/9wHG25k/def-tallies.jpg)  
Tallies with no style props.  
![Tallies in the middle of the Create React App homescreen.](https://i.ibb.co/Cm6FXk1/cra-tallies.jpg)  
Tallies with style props inherited from Create React App.  
![Tallies with style props set.](https://i.ibb.co/0jD1hgp/prop-tallies.jpg)  
Tallies with Tallies with props `textColor={"red} textSize={"4rem"} font={"Georgia, serif"} lineStyle={"wavy"} lineColor={"green"}`.

#
I hope this walkthrough is helpful. And I hope you have fun using the component!  
Cheers,  
Max

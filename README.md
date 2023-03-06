# Tallies
### For all your counting needs

This package is a plug-and-play component that takes in a number as a prop and renders it in the familiar system of "fives" (groups of four slashes, crossed) and ones (individual slashes). It works with any positive integer; negative numbers will generate a [RangeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError) (and crash the application), but the prop is given a default value of 0 to prevent NaN errors.  
Other available props are for styling, and not given default values. As a result, a Tallies component will inherit the styling of its parents. All available props take in a string which, when following [JSX Inline Styling syntax](https://techstacker.com/how-to-inline-style-jsx-react-css/) (ie, all values must be strings), will affect given CSS properties of the component. Available props include:  
* `textColor`, to manipulate the component's [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) field.
* `textSize` for [fontSize](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).
* `font` for [fontFamily](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family).
* `lineStyle` targets the [textDecorationStyle](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style) property to manipulate the style of the strike-through itself (try wavy, it's fun).
* `lineColor` same as above, but targets [textDecorationColor](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color) for its color.  
Note: the last two props work because the tallies are generated with [textDecorationLine](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line) pre-set to "line-through" in the "fives" section.

## Screenshots:
![Tallies with no props](https://ibb.co/yhFV5jc)  
Tallies with no style props.
![Tallies with style props inherited from Create React App](https://ibb.co/RYNWMxv)  
Tallies with style props inherited from Create React App.
![Tallies with props `textColor={"red} textSize={"4rem"} font={"Georgia, serif"} lineStyle={"wavy"} lineColor={"green}`](https://ibb.co/M5CtG5z)  
Tallies with Tallies with props `textColor={"red} textSize={"4rem"} font={"Georgia, serif"} lineStyle={"wavy"} lineColor={"green}`.

I hope this walkthrough is helpful. And I hope you have fun using the component!  
Cheers,  
Max

# _Roman Numeral Converter_

#### _Tool for converting Roman numeral input into Arabic numerals, updated 03.13.2018_

#### By _**Eric Swotinsky** and **Tyler Wickline**_

## Description

This program allows users to convert an inputted Roman numeral character/string into Arabic numerals, or to convert an inputted Arabic numeral character/string into Roman numerals.

## Setup

1. [Install Node.js and npm](https://www.npmjs.com/get-npm), if not already present in your local environment.
2. Clone this repository
3. Within your preferred shell, navigate to the project folder and run the following:
```
npm install
```
4. Open index.html within your preferred browser. Note that only Google Chrome has been tested for full compatibility.

**Known Issues:**
* Program does not recognize some invalid Roman numeral constructions as being invalid. E.g. "IIII" will evaluate as "4".
* Program attempts to parse some invalid Roman numeral pairs, and may do so with unintuitive results. E.g. "IC" will evaluate as "101", rather than "99" or (preferably) as invalid.

## Support and Contact Details

_Please contact eric.swotinsky@gmail.com with any questions or comments._

## Technologies Used

_This project was created in HTML, CSS, and JavaScript, including the Bootstrap and jQuery libraries. It was authored using the Visual Studio Code editor._

### License

*This project is released under the GNU GPL license.*

Copyright (c) 2018 **_Eric Swotinsky_ and _Tyler Wickline_**

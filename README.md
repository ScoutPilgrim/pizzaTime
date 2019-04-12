# Pizza Order
## Ian Christner

### How to see site

[The site can be found here](https://scoutpilgrim.github.io/pizzaTime/)

### Description:
User builds a pizza of their choice and then receive a price total for the pizza they entered.

##### Setup
1. $git clone https://github.com/ScoutPilgrim/pizzaTime
2. $atom pizzaTime
3. Open index.html in Chrome

What it does:
* User enters pizza Specifications
* As the user is updating their pizza preferences, a Map data-structure is being constructed.
* When the user submits their preferred pie, a Pizza object is generated from the Map that was being built as the user selected options.
* Calculations are then done on the Pizza object, which returns the Price to the user.

Included Specifications:
* User has limited options to choose from.
* user can add as many toppings as they want.

##### Things to add
1. Code is set up in such a way that an Order object could easily be implemented that would contain an array of submitted pizza objects and an Order Price total.
2. Was thinking of adding coupons, where if the user builds a certain pizza they get a better price (i.e. A medium 2 topping pizza would be significantly cheaper than traditional pricing).
3. Visuals, as per the usual for me, could use a ton of work.
4. At the moment, multiple of the same toppings are Allowed. Should update this to not be the case.

#### The MIT License

#### Copyright (c) 2019 Ian Christner

Permission is hereby granted, free of charge,
to any person obtaining a copy of this software and
associated documentation files (the "Software"), to
deal in the Software without restriction, including
without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom
the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

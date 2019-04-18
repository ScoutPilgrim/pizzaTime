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
* The user first has an option to select the size of pizza they wish to enjoy.
* The size of pizza picked determines the base price of the user's pizza before the addition of toppings. The prices go like this:
  1. X-Small - $4.50
  2. Small - $6.00
  3. Medium - $7.00
  4. Large - $9.00
  5. X-Large - $13.50
* After the user selects their pizza size, they can they choose to add toppings if they wish. The topping prices go like this:
  1. The user can expect a charge of $ 0.75 PER topping
* After the has the desired size and toppings selected, the price of the pizza is determine based one the inputted size and amount of toppings
  * An example, if the user chose a pizza of size Large ($9.00), and added three toppings ($0.75 ea), they could expect a returned price of $11.25 ($9.00 + (3 x $0.75)).
* The returned price is then displayed to the user under the inputs.

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

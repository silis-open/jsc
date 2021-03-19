# jsc
Make the common methods of high version js compatible with the use support of low version browsers.
The c of jsc represents the three layers of common (commonly used), compatible (compatible), and controller (used for the control layer).

## Array
Common methods of arrays

#### Array.forEach
forEach is often used in daily coding. It is used as a for loop. The built-in ES6 has been implemented, and it is compatible with versions below ES6. This code can be used

#### Array.map
The method returns a new array, the elements in the array are the values ​​processed by the original array elements after calling the function

#### Array.indexOf
Find the location of the specified element, if not found, return -1

#### Array.distinct
De-duplicate the elements in the array

## String
String common methods

#### String.trim
Remove the spaces, carriage returns and tabs at the beginning and end of the string

## Object
Object common methods

#### Object.assign
Shallow copy all members of the object to the object of the first parameter

#### Object.defineProperty
Define the attribute of an object, lower version browsers only support the value of the attribute

## HTMLDocument

#### document.addEventListener(""DOMContentLoaded"", function(){})
Enable lower version browsers to support document.addEventListener(""DOMContentLoaded"", function(){})

#### document.getElementsByClassName
Document.getElementsByClassName compatible with lower version browsers

## sessionStorage
Session data

#### sessionStorage.setItem(key,value)
Set the session data of a key

#### sessionStorage.getItem(key)
Get session data of a key

#### sessionStorage.removeItem(key)
Delete session data of a key

#### sessionStorage.clear()
Clear all session data

## localStorage
Local persistent data

#### localStorage.setItem(key,value)
Set up a key's local persistent data

#### localStorage.getItem(key)
Get the local persistent data of a key

#### localStorage.removeItem(key)
Delete the local persistent data of a key

#### localStorage.clear()
Clear all local persistent data
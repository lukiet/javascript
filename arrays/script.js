// modifying and deleting arrays

// var a = ["Luke", 58, "Junior"];
// document.write(a + "<br>")
// a[0] = "Tsalwa"
// document.write(a + "<br>")
// delete a[1]
// document.write(a + "<br>")

// Array methods sort
// var a = ["Nairobi", "Kitale", "Lodwar"]
// document.write(a + "<br>")
// a.sort()
// document.write(a + "<br>")
// a.reverse()
// document.write(a + "<br>")

// Array methods pop & push
// var a = ["Nairobi", "Kitale", "Lodwar"]
// document.write(a + "<br>")
// a.pop()
// document.write(a + "<br>")
// a.push("Mombasa", "Kisumu")
// document.write(a + "<br>")

//Array methods shift and unshift
// var a = ["Nairobi", "Kitale", "Lodwar"]
// document.write(a + "<br>")
// a.shift()
// document.write(a + "<br>")
// a.unshift("Voi")
// document.write(a + "<br>")

//Concat and join
// var a = ["Nairobi", "Kitale", "Lodwar"]
// var b = [10, 20, 30]
// var c = a.concat(b)
// document.write(c + "<br>")
// var d = c.join(" /")
// document.write(d)

//Slice and spice
// var a = ["Nairobi", "Kitale", "Lodwar"]
// document.write(a + "<br>")
// var b = a.slice(1)
// document.write(b + "<br>")
// a.splice(0, 1, "Yala", "Githu")
// document.write(a + "<br>")


//isArray
// var a = ["Nairobi", "Kitale", "Lodwar", "Voi"]
// var b = Array.isArray(a)
// document.write(b)

//Indexof lastindex
var a = ["Nairobi", "Kitale", "Lodwar", "Voi"]
var b = a.indexOf("Voi")
document.write(b + "<br>")
var c = a.lastIndexOf("Voi")
document.write(c + "<br>")
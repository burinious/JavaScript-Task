var name = ('Akomolafe Ayoyinka');
var courses = ['HTML', 'CSS', 'JavaScript'];

document.write("Name: " + name + "<br>");
document.write("Courses: " + courses + "<br>");

for (let courses = 1; courses <= 200; courses++) {
    if (courses % 2!=0) {
        document.write(courses + ", ");
    }


}

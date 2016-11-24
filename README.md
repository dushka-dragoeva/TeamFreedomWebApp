
# **E-School**
# Public part
**1. Parent Registration**
- e-mail
- First Name
- Last Name
- Phone Number
- Personal Pin Code (get from school)
## Private Part after succeful login
**1. Parent View**
- Optinal - if have more than 1 child in school 
- Drop down with full name(first + last ) of the child - optinal picture
- Class, name of Principal
- Absence - excused and non excused count
- Table
-- Subject
--Teacher
-- List with marks - clickable - on click date of mark, type and comment (optinal)
- Text Area for Message to parent (could be also parent meeting) - if exist
- Button for term schedule of the student

**2. Teacher View**
- Calendar with teacher's schedule for the week - date, hour and class third party lib (optional)
- List with all classes - clickable
-- on click - table with all students in current class
        - Full Name, Number in class , button Updte
        - Update on click - form with fields mark Value, Type, Remark , abscence enum [0, 0.33, 1], 0 by default,
        - Button Submit
**2. Admin View View**
- CRUD for students
- CRUD for teachers
- Get Student By Class and Number in Class
- Get Teacher By Name
- Get Class



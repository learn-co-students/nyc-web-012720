# Intro to ActiveRecord

## SWBATs
- [ ] Use `rake` commands from ActiveRecord to automatically create the right files
- [ ] Identify ActiveRecord naming conventions
- [ ] Use ActiveRecord to setup a one-to-many relationship
- [ ] Begin settting up a CLI project with ActiveRecord

## Domain
Schools

Classrooms
Students
Grades
Teachers
Staff
Classes
Scores
Subjects
Assignments
Sports


V1
Student >- Teacher

Changes:
- Update the associations in your model files
- Create a new model (TeacherStudent)
  - `teacher_id`
  - `student_id`
- Change the way they are related on the tables
  - Remove the `teacher_id` on students table

V2
Student -< TeacherStudent >- Teacher


## Notes
- Migrations 
  - Ruby files that will be used to build your tables
  - Create a migration: `rake db:create_migration NAME=create_dragons`
  - Migrate: `rake db:migrate`
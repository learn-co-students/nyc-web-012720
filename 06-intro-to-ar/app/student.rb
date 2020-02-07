class Student < ActiveRecord::Base
    has_many :teacher_students
    has_many :teachers, through: :teacher_students

end
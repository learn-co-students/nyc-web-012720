class Teacher < ActiveRecord::Base
  has_many :teacher_students
  has_many :students, through: :teacher_students

end
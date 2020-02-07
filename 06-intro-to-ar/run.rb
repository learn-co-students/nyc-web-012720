require_relative './config/environment'

system("clear")

puts 'Welcome to School!!!'

def get_user_input
  puts 'What would you like to do?'
  puts '1. See all teachers'
  puts '2. See all students'
  puts "3. Add student to teacher's class"
  puts "4. Expel student"
  puts "5. Exit"

  input = gets.chomp.to_i

  case (input)
  when 1
    puts "Here are the teachers: "
    Teacher.all.each do |teacher|
      puts "#{teacher.name} | #{teacher.subject}"
    end
  when 2
    puts "Here are the students: "
    Student.all.each do |student|
      puts "#{student.name} | #{student.gpa}"
    end
  when 3
    puts "Enter the id of the student: "
    student_id_input = gets.chomp.to_i
    puts "Enter the id of the teacher: "
    teacher_id_input = gets.chomp.to_i

    TeacherStudent.create(
      student_id: student_id_input, 
      teacher_id: teacher_id_input
    )
  when 4
    puts "Choose a student to expel:"
  when 5
    return
  end

  get_user_input
end

get_user_input

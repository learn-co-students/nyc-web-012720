require 'pry'
require 'date'

require_relative "./appointment"
require_relative "./doctor"
require_relative "./patient"

dre = Doctor.new("Dre", "555-555-7555")
seuss = Doctor.new("Seuss", "555-555-7555")
evil = Doctor.new("Evil", "555-555-7555")

toby = Patient.new("Toby", Date.new(1992, 6, 19))
chris = Patient.new("Chris", Date.new(2000, 7, 23))
roger = Patient.new("Roger", Date.new(1964, 1, 1))

app1 = Appointment.new(Date.new(2020, 1, 31), "9:00 AM", dre, chris)
app2 = Appointment.new(Date.new(2020, 3, 8), "12:00 PM", seuss, toby)
app3 = Appointment.new(Date.new(2019, 3, 8), "1:00 PM", seuss, chris)
app4 = Appointment.new(Date.new(2021, 8, 13), "11:00 AM", evil, roger)
app5 = Appointment.new(Date.new(2020, 12, 25), "10:00 PM", evil, toby)
app6 = Appointment.new(Date.new(2020, 4, 19), "3:00 PM", dre, chris)
app7 = Appointment.new(Date.new(2023, 9, 12), "12:00 AM", seuss, roger)

# dre.appointments => [APPOINTMENT OBJS] X
# dre.patients => [PATIENT OBJS]

# toby.appointments => [APPOINTMENT OBJS] X
# toby.doctors => [DOCTOR OBJS]


puts "WELCOME TO HOSPITAL WORLD! 🏥"
puts "Choose a doctor!"

Doctor.all.each do |doc|
  puts doc.name
end

input = gets.chomp

doc = Doctor.all.find { |doc| doc.name == input}

puts "Dr. #{doc.name} is seeing these patients:" 
doc.patients.each do |patient|
  puts "Name: #{patient.name} | Birth Date: #{patient.birth_date}"
end


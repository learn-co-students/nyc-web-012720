class Patient
  attr_accessor :name, :birth_date

  @@all = []

  def initialize(name, birth_date)
    @name = name
    @birth_date = birth_date

    @@all << self
  end


  def appointments
    # returns an array of appointments for THIS patient
    Appointment.all.select do |appointment|
      appointment.patient == self
    end
  end

  def doctors
    (self.appointments.map do |appointment|
      appointment.doctor
    end).uniq
  end


  def self.all
    @@all
  end
end
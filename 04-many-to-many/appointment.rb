class Appointment
  attr_accessor :date, :time, :doctor, :patient, :attended

  @@all = []

  def initialize(date, time, doctor, patient)
    @date = date
    @time = time
    @doctor = doctor
    @patient = patient

    @attended = false

    @@all << self
  end

  def self.all
    @@all
  end
end
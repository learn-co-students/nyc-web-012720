class Gym
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def memberships
    # return an array of membership objects, specific to this gym
    Membership.all.select do |mem|
      mem.gym == self
    end
  end

  def lifters
    # return an array of lifter objects, specific to this gym
    self.memberships.map do |mem|
      mem.lifter
    end
  end

  def lifter_names
    self.lifters.map do |lifter|
      lifter.name
    end
  end

  def combined_lift
    self.lifters.map { |lifter| lifter.lift_total }.sum

  end

  def self.all
    @@all
  end
end

class Lifter
  attr_reader :name, :lift_total

  @@all = []

  def initialize(name, lift_total)
    @name = name
    @lift_total = lift_total

    @@all << self
  end

  def memberships
    # returns an array of membership objects, specific to this lifter
    Membership.all.select do |mem|
      mem.lifter == self
    end
  end

  def gyms
    # returns an array of gym objects, specific to this lifter
    self.memberships.map do |mem|
      mem.gym
    end
  end

  def total_membership_cost
    # get this lifter's memberships
    # get the cost of each membership
    # add those costs to a total

    self.memberships.map do |mem|
      mem.cost
    end.sum
  end

  def sign_up(gym,cost)
    Membership.new(cost, gym, self)
  end

  def self.average_lift
    # find the sum of all the lift totals
    # divide this sum by the total number of lifters

    # lift_sum = Lifter.all.map do | lifter|
    #   lifter.lift_total
    # end.sum

    lift_sum = Lifter.all.reduce(0) do |agg, lifter|
      agg + lifter.lift_total
    end

    lift_sum.to_f / Lifter.all.length
  end

  def self.all
    @@all
  end
end

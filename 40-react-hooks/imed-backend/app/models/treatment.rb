class Treatment < ApplicationRecord
    belongs_to :remedy
    belongs_to :malady
end

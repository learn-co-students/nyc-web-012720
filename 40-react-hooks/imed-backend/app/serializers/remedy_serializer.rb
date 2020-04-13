class RemedySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :ingredients, :instructions, :maladies

  def maladies
    collect = []
    # byebug
    treatments = object.treatments
    treatments.each do |t|
      collect.push({ 
        id: t.malady_id,
        name: t.malady.name 
      })
    end
    collect
  end
end

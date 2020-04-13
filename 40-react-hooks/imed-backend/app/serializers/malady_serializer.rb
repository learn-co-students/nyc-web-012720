class MaladySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :remedies

  def remedies
    collect = []
    # byebug
    treatments = object.treatments
    treatments.each do |t|
      collect.push({ 
        id: t.remedy_id,
        name: t.remedy.name 
      })
    end
    collect
  end
end

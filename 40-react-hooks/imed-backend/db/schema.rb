# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_13_002449) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "maladies", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "remedies", force: :cascade do |t|
    t.string "name"
    t.string "ingredients"
    t.string "instructions"
    t.boolean "is_alcoholic"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "treatments", force: :cascade do |t|
    t.bigint "remedy_id", null: false
    t.bigint "malady_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["malady_id"], name: "index_treatments_on_malady_id"
    t.index ["remedy_id"], name: "index_treatments_on_remedy_id"
  end

  add_foreign_key "treatments", "maladies"
  add_foreign_key "treatments", "remedies"
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Print.destroy_all


User.create! username: "test", email: "test@email.com", password: "123456"

Print.create! title: "My Hero Academia - Midoriya", image_link: "https://i.imgur.com/kdxMhdF.png", anime_name: "My Hero Academia", is_digital: true, is_physical: false, price: 25, description: "My Hero Academia - Midoriya - Digital print. Print your favorite anime photo. Our premium quality printing & lightning-quick shipping will take care of the rest."
Print.create! title: "Naruto Shippuden - Naruto", image_link: "https://i.imgur.com/JYU8yu2.png", anime_name: "Naruto Shippuden ", is_digital: true, is_physical: false, price: 15, description: "Naruto Shippuden - Naruto - Digital print. Print your favorite anime photo. Our premium quality printing & lightning-quick shipping will take care of the rest."
Print.create! title: "My Hero Academia - All Might", image_link: "https://i.imgur.com/OCl0sNu.jpg", anime_name: "My Hero Academia", is_digital: false, is_physical: true, price: 25, description: "My Hero Academia - All Might - Digital print. Print your favorite anime photo. Our premium quality printing & lightning-quick shipping will take care of the rest."
Print.create! title: "Anime World - Anime Mash Up", image_link: "https://i.imgur.com/b0RExUP.jpg", anime_name: "Anime World", is_digital: true, is_physical: false, price: 25, description: "Anime World - Anime Mash Up- Digital print. Print your favorite anime photo. Our premium quality printing & lightning-quick shipping will take care of the rest."


puts "#{User.count}, #{Print.count} created!"
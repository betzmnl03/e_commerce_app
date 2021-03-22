# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.delete_all

category =["Men","Women","Kids"]
color=["White", "Black", "Blue"]
subcategory=["T-Shirts","Shirts", "Jeans"]
price=[30,40,50]
brand=["Levis","Nike", "Adidas"]
size=["3","4","5"] # => corresponds to S-3, M-4, L-5 
men_tshirts_images = ["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-C2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/d7ece533-36d7-4afd-b4d5-ca19445803a81592213550740-Levis-Men-Tshirts-7071592213548655-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/f655e9a9-db4f-477d-9106-ff32ce2aedc71592213550689-Levis-Men-Tshirts-7071592213548655-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/037acd1a-38f6-4298-abe6-c8d59f7492a21592213550559-Levis-Men-Tshirts-7071592213548655-5.jpg"]
women_images = ["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10565642/2020/2/4/e8586abb-30d3-4d8d-a493-24cfe3d63f611580805631072-HRX-by-Hrithik-Roshan-Women-Black-Printed-Back-Running-Tshir-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10565642/2020/2/4/6145c456-e275-48df-8de9-14b7b174f61b1580805631026-HRX-by-Hrithik-Roshan-Women-Black-Printed-Back-Running-Tshir-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10565642/2020/2/4/344ce9f9-d0f7-422d-bfa2-9dabbeb719831580805630926-HRX-by-Hrithik-Roshan-Women-Black-Printed-Back-Running-Tshir-4.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10565642/2020/2/4/01cfb344-9f40-412c-844d-00be2e41bc311580805630886-HRX-by-Hrithik-Roshan-Women-Black-Printed-Back-Running-Tshir-5.jpg"]
kids_images = ["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13344912/2021/1/20/aaff4548-e786-4494-a987-639f4550e11d1611117940653-Mango-Kids-Girls-Tops-7751611117940153-1.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13344912/2021/1/20/79dfd16d-078d-4b2a-b44a-940a4999f3da1611117940635-Mango-Kids-Girls-Tops-7751611117940153-2.jpg"]




C1=Category.create(name:"Men")
C2=Category.create(name:"Women")
C3=Category.create(name:"Kids")

S1=Subcategory.create(name:"Shirt")
S2=Subcategory.create(name:"TShirt")
S3=Subcategory.create(name:"Jeans")


# Men -> Shirt -> white-> nike
# Men -> Shirt -> black-> adidas
# Men -> Shirt -> blue-> levis
p1=Product.new(name:"Men Nike Shirt",brand: "Nike",color: "white",description: "Men white nike shirt",size: [3,4,5],price:30,images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-c2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/d7ece533-36d7-4afd-b4d5-ca19445803a81592213550740-Levis-Men-Tshirts-7071592213548655-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/f655e9a9-db4f-477d-9106-ff32ce2aedc71592213550689-Levis-Men-Tshirts-7071592213548655-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/037acd1a-38f6-4298-abe6-c8d59f7492a21592213550559-Levis-Men-Tshirts-7071592213548655-5.jpg"])
p1.category = C1
p1.subcategory = S1
p1.save

p2=Product.new(name:"Men Adidas Shirt",brand: "Adidas",color: "black",description: "Men black adidas shirt",size: [3,4,5],price:40,images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-c2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/d7ece533-36d7-4afd-b4d5-ca19445803a81592213550740-Levis-Men-Tshirts-7071592213548655-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/f655e9a9-db4f-477d-9106-ff32ce2aedc71592213550689-Levis-Men-Tshirts-7071592213548655-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/037acd1a-38f6-4298-abe6-c8d59f7492a21592213550559-Levis-Men-Tshirts-7071592213548655-5.jpg"])
p2.category = C1
p2.subcategory = S1
p2.save


p3=Product.new(name:"Men Levis Shirt",brand: "Levis",color: "blue",description: "Men blue levis shirt",size: [3,4,5],price:50,images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-c2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/d7ece533-36d7-4afd-b4d5-ca19445803a81592213550740-Levis-Men-Tshirts-7071592213548655-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/f655e9a9-db4f-477d-9106-ff32ce2aedc71592213550689-Levis-Men-Tshirts-7071592213548655-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/037acd1a-38f6-4298-abe6-c8d59f7492a21592213550559-Levis-Men-Tshirts-7071592213548655-5.jpg"])
p3.category = C1
p3.subcategory = S1
p3.save

p4=Product.new(name:"Men Nike TShirt",brand: "Nike",color: "white",description: "Men white nike tshirt",size: [3,4,5],price:30,images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-c2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/d7ece533-36d7-4afd-b4d5-ca19445803a81592213550740-Levis-Men-Tshirts-7071592213548655-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/f655e9a9-db4f-477d-9106-ff32ce2aedc71592213550689-Levis-Men-Tshirts-7071592213548655-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/037acd1a-38f6-4298-abe6-c8d59f7492a21592213550559-Levis-Men-Tshirts-7071592213548655-5.jpg"])
p4.category = C1
p4.subcategory = S2
p4.save


p5=Product.new(name:"Men Adidas TShirt",brand: "Adidas",color: "black",description: "Men black adidas tshirt",size: [3,4,5],price:40,images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-c2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/d7ece533-36d7-4afd-b4d5-ca19445803a81592213550740-Levis-Men-Tshirts-7071592213548655-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/f655e9a9-db4f-477d-9106-ff32ce2aedc71592213550689-Levis-Men-Tshirts-7071592213548655-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/037acd1a-38f6-4298-abe6-c8d59f7492a21592213550559-Levis-Men-Tshirts-7071592213548655-5.jpg"])
p5.category = C1
p5.subcategory = S2
p5.save


p6=Product.new(name:"Men Levis TShirt",brand: "Levis",color: "blue",description: "Men blue levis tshirt",size: [3,4,5],price:50,images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-c2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/d7ece533-36d7-4afd-b4d5-ca19445803a81592213550740-Levis-Men-Tshirts-7071592213548655-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/f655e9a9-db4f-477d-9106-ff32ce2aedc71592213550689-Levis-Men-Tshirts-7071592213548655-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/037acd1a-38f6-4298-abe6-c8d59f7492a21592213550559-Levis-Men-Tshirts-7071592213548655-5.jpg"])
p6.category = C1
p6.subcategory = S2
p6.save


p7=Product.new(name:"Men Nike Jeans",brand: "Nike",color: "white",description: "Men white nike Jeans",size: [3,4,5],price:30,images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-c2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/d7ece533-36d7-4afd-b4d5-ca19445803a81592213550740-Levis-Men-Tshirts-7071592213548655-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/f655e9a9-db4f-477d-9106-ff32ce2aedc71592213550689-Levis-Men-Tshirts-7071592213548655-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/037acd1a-38f6-4298-abe6-c8d59f7492a21592213550559-Levis-Men-Tshirts-7071592213548655-5.jpg"])
p7.category = C1
p7.subcategory = S3
p7.save


p8=Product.new(name:"Women Adidas Jeans",brand: "Adidas",color: "black",description: "Womeen black adidas Jeans",size: [3,4,5],price:40,images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-c2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/d7ece533-36d7-4afd-b4d5-ca19445803a81592213550740-Levis-Men-Tshirts-7071592213548655-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/f655e9a9-db4f-477d-9106-ff32ce2aedc71592213550689-Levis-Men-Tshirts-7071592213548655-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/037acd1a-38f6-4298-abe6-c8d59f7492a21592213550559-Levis-Men-Tshirts-7071592213548655-5.jpg"])
p8.category = C1
p8.subcategory = S3
p8.save

p9=Product.new(name:"Men Levis Jeans",brand: "Levis",color: "blue",description: "Men blue levis Jeans",size: [3,4,5],price:50,images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-c2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/d7ece533-36d7-4afd-b4d5-ca19445803a81592213550740-Levis-Men-Tshirts-7071592213548655-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/f655e9a9-db4f-477d-9106-ff32ce2aedc71592213550689-Levis-Men-Tshirts-7071592213548655-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11165580/2020/6/15/037acd1a-38f6-4298-abe6-c8d59f7492a21592213550559-Levis-Men-Tshirts-7071592213548655-5.jpg"])
p9.category = C1
p9.subcategory = S3
p9.save

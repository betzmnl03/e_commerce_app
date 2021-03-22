# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.delete_all
User.delete_all
Cart.delete_all
Order.delete_all
Wishlist.delete_all

C1=Category.create(name:"Men")
C2=Category.create(name:"Women")
C3=Category.create(name:"Kids")

S1=Subcategory.create(name:"Shirt")
S2=Subcategory.create(name:"TShirt")
S3=Subcategory.create(name:"Jeans")


#Men => Shirts =>PeterEngland =>Black,White,Blue
p1=Product.new(
    name:"Peter England Casuals",
    brand: "Peter England",
    color: "black",
    description: "Men Black Slim Fit Printed Casual Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/19/9af315b2-0dcc-41a9-8aba-4769042124a01600469485797-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/19/4ebe9749-da37-441e-96ad-1af9549b194f1600469486045-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/19/301c5c1c-18e6-4106-ac6f-03b5a8613ec01600469486133-4.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/19/de43f40e-5706-4e32-b9c8-848ea5b15ad11600469486266-5.jpg"])
    
p1.category = C1
p1.subcategory = S1
p1.save

p2=Product.new(
    name:"Peter England Casuals",
    brand: "Peter England",
    color: "white",
    description: "Men White Slim Fit Solid Casual Shirt",
    size: [3,4,5],
    price:40,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/1/24/b3665141-a5b2-4f7d-a388-73bbf6d8a32d1579825347289-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/1/24/c4309071-3d42-4b37-a018-7676a10544cd1579825347334-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/1/24/09372780-6f9d-4891-b53d-560dd6737eb31579825347374-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/1/24/1282b2d2-2521-4c50-a1d8-767fdc31723b1579825347415-4.jpg"])
p2.category = C1
p2.subcategory = S1
p2.save


p3=Product.new(
    name:"Peter England Casuals",
    brand:  "Peter England",
    color: "blue",
    description: "Men Blue Slim Fit Checked Viroblock Casual Shirt",
    size: [3,4,5],
    price:50,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/10/e55b5258-ee5c-49c3-aa0c-edeb6d85d57d1594339907391-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/10/eaf5c576-8ba6-47e0-bea3-19ad3e968f8d1594339907444-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/10/2a4d8e54-4c13-42bd-a6cd-a48b9a3dc41d1594339907495-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/10/82eac679-3502-4604-807d-34d8e527607d1594339907545-4.jpg"])
p3.category = C1
p3.subcategory = S1
p3.save



#Men => Shirts =>H&M =>Black,White,Blue
p4=Product.new(
    name:"H&M Casual Shirt",
    brand: "H&M",
    color: "black",
    description: "Men Self-Design Regular Fit Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/14/df515a94-01fa-44bb-9200-208f326746141607928002121-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/14/d854732d-8a71-42b1-b4d2-78e877d59e5e1607928002298-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/14/e4405429-b384-4395-95cd-e690b546111f1607928002387-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/14/9dd62900-4499-4c49-81fc-df15b3fe17081607928002549-4.jpg"])
p4.category = C1
p4.subcategory = S1
p4.save


p5=Product.new(
    name:"H&M  White Solid Shirt",
    brand: "H&M",
    color: "white",
    description: "Men White Solid Cotton shirt",
    size: [3,4,5],
    price:40,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11554850/2020/6/19/1650ec6d-f4dd-478d-925c-136dd56abd2e1592548549360HMMenWhiteSolidShirtMuscleFit1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11554850/2020/6/19/9f5bb626-fca8-40a5-981d-6def3fec6f551592548549424HMMenWhiteSolidShirtMuscleFit2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11554850/2020/6/19/cac401d3-d40d-47e5-b947-a2a2b55e60051592548549507HMMenWhiteSolidShirtMuscleFit3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11554850/2020/6/19/c4d720a8-fdee-4ade-98e1-b71e24c8d7041592548549565HMMenWhiteSolidShirtMuscleFit4.jpg"])
p5.category = C1
p5.subcategory = S1
p5.save


p6=Product.new(
    name:"H&M Blue Solid Shirt",
    brand: "H&M",
    color: "blue",
    description: "Men Blue Solid Oxford Shirt Regular Fit",
    size: [3,4,5],
    price:50,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/28/bf107349-0044-4248-8a53-5fe8774f915c1595885940815-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/28/cdfaa5d4-ee18-4f11-80df-d38c3a8f40191595885940870-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/28/5c674b7f-6a12-4827-a522-9ad2388f94e81595885940921-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/28/597bc324-b137-4738-848b-f4bf29fd74e71595885941025-5.jpg"])
p6.category = C1
p6.subcategory = S1
p6.save


#Men => Shirts =>John Players=>Black,White,Blue
p7=Product.new(
    name:"John Players Casuals",
    brand: "John Players",
    color: "black",
    description: "Men Black & Grey Slim Fit Printed Casual Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12016416/2020/7/27/5c69b010-b850-43f8-bdb7-9b2ed7dd15ab1595841908107-John-Players-Men-Shirts-791595841905967-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12016416/2020/7/27/c48d3384-7fbf-48ab-870f-a39ac00d027c1595841908051-John-Players-Men-Shirts-791595841905967-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12016416/2020/7/27/1f8d7ff7-0372-4ac7-8fb2-32fc2909c6391595841907924-John-Players-Men-Shirts-791595841905967-4.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12016416/2020/7/27/3b4b3614-3f08-4c34-81eb-a826f7eb7ce81595841907868-John-Players-Men-Shirts-791595841905967-5.jpg"])
p7.category = C1
p7.subcategory = S1
p7.save


p8=Product.new(
    name:"John Players Causals",
    brand: "John Players",
    color: "white",
    description: "Men White Trim Fit Casual Shirt",
    size: [3,4,5],
    price:40,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/image/style/properties/671542/John-Players-Men-Shirts_1_45b116e36e3959331d1803aa336a8b90.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/image/style/properties/671542/John-Players-Men-Shirts_2_3adf4e59807539dbfcd25724f196f17c.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/image/style/properties/671542/John-Players-Men-Shirts_5_f5becd41c884bd2b838b69d2d1ea1932.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/image/style/properties/671542/John-Players-Men-Shirts_3_79cd2b1a66ec094d6a7a445d9931a52e.jpg"])
p8.category = C1
p8.subcategory = S1
p8.save

p9=Product.new(
    name:"John Players Causals",
    brand: "John Players",
    color: "blue",
    description: "Men Blue Trim Fit Solid Casual Shirt",
    size: [3,4,5],
    price:50,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8991499/2020/1/22/06a0e19f-ab2a-40d8-8407-3f468814b7ac1579694375703-John-Players-Men-Shirts-271579694374479-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8991499/2020/1/22/0571c791-b202-4aec-bec8-5ef88cd064111579694375651-John-Players-Men-Shirts-271579694374479-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8991499/2020/1/22/ffb9dd47-036d-4528-b034-5397d454038a1579694375583-John-Players-Men-Shirts-271579694374479-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8991499/2020/1/22/db115873-f78f-417b-afa0-9cb72df8fa201579694375547-John-Players-Men-Shirts-271579694374479-4.jpg"])
p9.category = C1
p9.subcategory = S1
p9.save



#Men => T-Shirts =>PeterEngland =>Black,White,Blue
p10=Product.new(
    name:"Peter England T-shirt",
    brand: "Peter England",
    color: "black",
    description: "Men Black Solid Polo T-shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2481220/2018/2/22/11519296253550-Peter-England-Men-Black-Solid-Polo-Collar-T-shirt-2771519296253371-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2481220/2018/2/22/11519296253512-Peter-England-Men-Black-Solid-Polo-Collar-T-shirt-2771519296253371-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2481220/2018/2/22/11519296253498-Peter-England-Men-Black-Solid-Polo-Collar-T-shirt-2771519296253371-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2481220/2018/2/22/11519296253479-Peter-England-Men-Black-Solid-Polo-Collar-T-shirt-2771519296253371-4.jpg"])
    
p10.category = C1
p10.subcategory = S2
p10.save


p11=Product.new(
    name:"Peter England T-Shirt",
    brand: "Peter England",
    color: "white",
    description: "Men White & Blue Printed Henley Neck T-shirt",
    size: [3,4,5],
    price:40,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11091126/2019/12/14/7dc4f7d3-a5d6-4c54-a2b8-df97ea1f28561576307602901-Peter-England-Men-Tshirts-9821576307600144-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11091126/2019/12/14/5ef1b4b2-8d16-4b15-b597-e0e2937bd1771576307602817-Peter-England-Men-Tshirts-9821576307600144-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11091126/2019/12/14/9058ed80-dba0-46f2-ac8f-3a33e10bcb0e1576307602753-Peter-England-Men-Tshirts-9821576307600144-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11091126/2019/12/14/e89ad767-ca26-4714-8648-f5e91deff4eb1576307602685-Peter-England-Men-Tshirts-9821576307600144-4.jpg"])
p11.category = C1
p11.subcategory = S2
p11.save

p12=Product.new(
    name:"Peter England T-Shirt",
    brand:  "Peter England",
    color: "blue",
    description: "Men Blue Solid Polo Collar T-shirt",
    size: [3,4,5],
    price:50,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13262002/2021/2/8/63234cad-2ee3-45a4-a695-dd2bef333fd31612786027951-Peter-England-Men-Tshirts-9051612786025888-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13262002/2021/2/8/c1eb6c2a-6e52-4d92-a223-cac70c10c5fd1612786027924-Peter-England-Men-Tshirts-9051612786025888-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13262002/2021/2/8/6957ff5e-6b16-4d38-8b40-3522b135cbb81612786027904-Peter-England-Men-Tshirts-9051612786025888-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13262002/2021/2/8/8fb2c400-886b-4050-80f5-69a18356fba21612786027885-Peter-England-Men-Tshirts-9051612786025888-4.jpg"])
p12.category = C1
p12.subcategory = S2
p12.save


#Men => T-Shirts =>H&M =>Black,White,Blue
p13=Product.new(
    name:"H&M T-Shirt",
    brand: "H&M",
    color: "black",
    description: "Men Black Solid Polo Shirt Slim Fit",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/2/7/041fcc92-4eaf-4098-a3ed-ab0a5797dde21581026550841-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/2/7/4fcc6d8d-3300-4ad0-9e0b-ba9f267d44031581026550885-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/2/7/0a54b414-66c1-459b-a522-47c664fb5b7f1581026550925-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/2/7/674e0120-f06e-42ca-9395-22b7302e6aca1581026550964-4.jpg"])
p13.category = C1
p13.subcategory = S2
p13.save

p14=Product.new(
    name:"H&M T-Shirt",
    brand: "H&M",
    color: "white",
    description: "Men White Solid Round-Neck T-Shirt Slim Fit",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/2/7/9013c993-f473-42e9-ad66-503a8ddeb5571581026652915-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/2/7/c7e6d2a4-7d73-430c-a3df-699044b38d911581026652954-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/2/7/be1e1070-c2bf-4189-a4b8-fc8a7902907d1581026652990-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/2/7/a597b758-e46d-447c-bcd0-7498e533102a1581026653033-4.jpg"])
p14.category = C1
p14.subcategory = S2
p14.save

p15=Product.new(
    name:"H&M T-Shirt",
    brand: "H&M",
    color: "blue",
    description: "Men Blue Polo Shirt Slim Fit",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/12/fbdefbc1-4f2b-4535-84cb-fea40f04a8e71591911081146-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/12/e5f342c4-ce84-4e69-bc68-c7925cf7c37d1591911081192-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/12/3267c32c-7d9f-47e2-95b9-cc8f8e3f9e051591911081232-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/12/dc4fffaf-d7d4-4284-b12b-a7b8944b86ce1591911081275-4.jpg"])
p15.category = C1
p15.subcategory = S2
p15.save


#Men => T-Shirts =>John Players=>Black,White,Blue
p16=Product.new(
    name:"John Players T-shirt",
    brand: "John Players",
    color: "black",
    description: "Men Black Solid Slim Fit Polo Collar T-shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4446383/2020/7/15/12f953f2-ab95-4dd3-bd80-c10b498b298b1594810496347-John-Players-Men-Tshirts-7181594810494945-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4446383/2020/7/15/720b0f99-73b8-4d82-af29-783dcdf379631594810496294-John-Players-Men-Tshirts-7181594810494945-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4446383/2020/7/15/2bcbb7a7-7d76-4356-91dd-6aa5ef5822cc1594810496250-John-Players-Men-Tshirts-7181594810494945-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4446383/2020/7/15/8dbfd1d4-9a84-4c99-ba7c-2e4c9f77ed861594810496193-John-Players-Men-Tshirts-7181594810494945-4.jpg"])
p16.category = C1
p16.subcategory = S2
p16.save

p17=Product.new(
    name:"John Players T-shirt",
    brand: "John Players",
    color: "white",
    description: "Men White Slim Fit Solid Polo Collar T-shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8992733/2020/1/22/08c537a4-27d0-48d5-96cf-fdddad65e7bd1579672964516-John-Players-Men-Tshirts-4181579672963283-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8992733/2020/1/22/cd28b5cc-ff36-49ee-9514-af75022e2aae1579672964479-John-Players-Men-Tshirts-4181579672963283-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8992733/2020/1/22/17f45b39-96ca-4bb8-8112-d5b8d73095d51579672964445-John-Players-Men-Tshirts-4181579672963283-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8992733/2020/1/22/6bfe4334-e552-43e1-a036-b6b022b6d3e31579672964398-John-Players-Men-Tshirts-4181579672963283-4.jpg"])
p17.category = C1
p17.subcategory = S2
p17.save

p18=Product.new(
    name:"John Players T-shirt",
    brand: "John Players",
    color: "blue",
    description: "Men Blue Solid Polo Collar T-shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8992639/2019/11/11/2d9117ee-7c1b-42d3-9112-4e9752d526c81573469659323-John-Players-Men-Tshirts-8341573469657185-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8992639/2019/11/11/a8ef055c-b78c-425f-8af6-ec570e2c5a951573469659263-John-Players-Men-Tshirts-8341573469657185-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8992639/2019/11/11/81a7e232-a7de-4f2f-8eb6-5a83778544591573469659224-John-Players-Men-Tshirts-8341573469657185-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8992639/2019/11/11/c04c9dad-74f8-4c55-b5e1-255fcc9899c91573469659174-John-Players-Men-Tshirts-8341573469657185-4.jpg"])
p18.category = C1
p18.subcategory = S2
p18.save




#Men => Jeans =>PeterEngland =>Black,White,Blue
p19=Product.new(
    name:"Peter England Casuals",
    brand: "Peter England",
    color: "black",
    description: "Men Black Skinny Fit Mid-Rise Clean Look Jeans",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/0378cdab-d85c-4922-9dfc-c6c4f230a0031610731382827-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/bd873ead-8f0c-4576-99f5-74e40285abad1610731382846-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/f60139ac-4bcc-4696-b69a-11ee5ad5ee0a1610731382871-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/0e4af6aa-76d4-41b9-b527-ed8fa21c18031610731382893-4.jpg"])
    
p19.category = C1
p19.subcategory = S3
p19.save

p20=Product.new(
    name:"Peter England Casuals",
    brand: "Peter England",
    color: "white",
    description: "Men White Tapered Fit Mid-Rise Clean Look Stretchable Jeans",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11777176/2020/4/1/28f21df9-5235-4dcb-bfa3-0be2f6aabb3c1585726794608PeterEnglandCasualsMenWhiteSkinnyFitJeans1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11777176/2020/4/1/0f3caccc-a257-4968-8e3a-a236d0f6651a1585726794671PeterEnglandCasualsMenWhiteSkinnyFitJeans2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11777176/2020/4/1/e3a79459-44f7-4b19-ba85-605da3f40d001585726794724PeterEnglandCasualsMenWhiteSkinnyFitJeans3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11777176/2020/4/1/1912a03a-3581-4680-88eb-dd0ac41130c91585726794838PeterEnglandCasualsMenWhiteSkinnyFitJeans5.jpg"])
    
p20.category = C1
p20.subcategory = S3
p20.save

p21=Product.new(
    name:"Peter England Casuals",
    brand: "Peter England",
    color: "blue",
    description: "Men Blue Skinny Fit Mid-Rise Clean Look Stretchable Jeans",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/3/2ffe8c30-9af3-42c8-9599-f4220dbfe7f81606972868099-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/3/69de4016-ef15-457d-928a-2d30a47579711606972868492-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/3/f7b5e2b7-c07b-4639-be65-28236f57a3ef1606972869674-5.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/3/ec1cc415-d24b-4664-8673-c40cac1f63521606972868844-3.jpg"])
    
p21.category = C1
p21.subcategory = S3
p21.save



#Men => Jeans =>H&M =>Black,White,Blue
p22=Product.new(
    name:"H&M Casuals",
    brand: "H&M",
    color: "black",
    description: "Men Black Solid Slim Selvedge Jeans",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/7c2a3feb-a4fb-4f97-aadd-e7ad8be9a3171610692483134-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/effbd8fa-593c-43d1-9878-482964dcc39e1610692483147-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/76dbe9bc-8534-456e-a392-59dd5c1cf03d1610692483161-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/e1954ad7-a204-4a05-82c1-25a448e63b3e1610692483176-4.jpg"])
p22.category = C1
p22.subcategory = S3
p22.save


p23=Product.new(
    name:"H&M Casuals",
    brand: "H&M",
    color: "white",
    description: "Men White Solid Regular Jeans",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/11/d564f47c-3724-4e90-93c2-0db384269a571610348945233-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/11/f5015b8e-62e7-4acc-bc27-4ed7dc159d4a1610348945149-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/11/207c2a34-3448-46d8-b599-4d42741a30c71610348945193-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/11/d8583bcf-17e4-41a9-84ee-02b008e75d2b1610348945325-5.jpg"])
p23.category = C1
p23.subcategory = S3
p23.save

p24=Product.new(
    name:"H&M Casuals",
    brand: "H&M",
    color: "blue",
    description: "Men Blue Skinny Jeans",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12346070/2020/9/1/b00e3099-a994-4311-b3b6-5ea79d0aeac21598959924012SkinnyJeans2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12346070/2020/9/1/e325ddd2-a5c0-47df-84c2-d72611e1ef4b1598959923900SkinnyJeans1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12346070/2020/9/1/193afc01-f793-46ab-9d73-23e2f3e0a9cb1598959924209SkinnyJeans4.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12346070/2020/9/1/e4673b24-b0bc-4b72-9325-07debe7b40d61598959924282SkinnyJeans5.jpg"])
p24.category = C1
p24.subcategory = S3
p24.save



#Men => Jeans =>John Players=>Black,White,Blue
p25=Product.new(
    name:"John Players Casuals",
    brand: "John Players",
    color: "black",
    description: "Men Black Regular Fit Mid-Rise Clean Look Stretchable Jeans",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/4/190b8c51-222f-4874-8ea4-b499234177631607072421361-5.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/4/311e297f-10dc-42e1-aa68-1741ad47241a1607072421167-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/4/b76bb42c-cb34-4e03-ac2d-770ad1283d001607072421265-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/4/a3ecd2f7-7da6-4c7c-9817-612f826375f51607072421406-6.jpg"])
p25.category = C1
p25.subcategory = S3
p25.save

p26=Product.new(
    name:"John Players Casuals",
    brand: "John Players",
    color: "white",
    description: "Men White Slim Fit Mid-Rise Clean Look Stretchable Jeans",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2485350/2018/3/27/11522128458797-Mast--Harbour-Men-White-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-2741522128458649-5.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2485350/2018/3/27/11522128458877-Mast--Harbour-Men-White-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-2741522128458649-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2485350/2018/3/27/11522128458835-Mast--Harbour-Men-White-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-2741522128458649-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2485350/2018/3/27/11522128458811-Mast--Harbour-Men-White-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-2741522128458649-4.jpg"])
p26.category = C1
p26.subcategory = S3
p26.save

p27=Product.new(
    name:"John Players Casuals",
    brand: "John Players",
    color: "blue",
    description: "Men Blue Carrot Fit Mid-Rise Mildly Distressed Stretchable Jeans",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13490730/2021/2/22/76a938e4-ae62-4e20-97e4-8d652901a3bf1613970266094-Mast--Harbour-Men-Jeans-4711613970264264-4.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13490730/2021/2/22/6072c483-6547-4fd9-94c2-7c603d94c7021613970266148-Mast--Harbour-Men-Jeans-4711613970264264-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13490730/2021/2/22/eae90ddc-7ef4-4e4f-8ff0-1e897ebf8d3c1613970266129-Mast--Harbour-Men-Jeans-4711613970264264-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13490730/2021/2/22/5539db4f-3f96-48d1-8722-88e31d385fd31613970266073-Mast--Harbour-Men-Jeans-4711613970264264-5.jpg"])
p27.category = C1
p27.subcategory = S3
p27.save



#Women => Shirts =>PeterEngland =>Black,White,Blue
p28=Product.new(
    name:"Peter England Formal Shirt",
    brand: "Peter England",
    color: "black",
    description: "Black Regular Fit Solid Formal Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/1/15/25178f33-a515-4988-8961-9e4eacdae1cf1579038824695-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/1/15/25178f33-a515-4988-8961-9e4eacdae1cf1579038824695-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/1/15/b36def20-934b-4991-a6b9-ea94b62177ce1579038824795-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/1/15/69a61cd7-4a88-4d38-9fc6-895791019a831579038824844-4.jpg"])
    
p28.category = C2
p28.subcategory = S1
p28.save

p29=Product.new(
    name:"Peter England Formal Shirt",
    brand: "Peter England",
    color: "white",
    description: "Women White Regular Fit Solid Formal Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5567480/2018/5/15/a7c26cc9-1f9c-4363-824d-6395385947161526382813118-Van-Heusen-Woman-Women-White-Regular-Fit-Solid-Formal-Shirt-9841526382811634-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5567480/2018/5/15/b1123443-85ac-469b-8031-37904398a84b1526382813100-Van-Heusen-Woman-Women-White-Regular-Fit-Solid-Formal-Shirt-9841526382811634-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5567480/2018/5/15/ec3ac88b-bd97-44fe-9500-e236891bd0681526382813084-Van-Heusen-Woman-Women-White-Regular-Fit-Solid-Formal-Shirt-9841526382811634-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5567480/2018/5/15/8f9cd4c1-f463-4120-8be4-39b474500db01526382813072-Van-Heusen-Woman-Women-White-Regular-Fit-Solid-Formal-Shirt-9841526382811634-4.jpg"])
    
p29.category = C2
p29.subcategory = S1
p29.save

p29=Product.new(
    name:"Peter England Formal Shirt",
    brand: "Peter England",
    color: "blue",
    description: "Blue Regular Fit Solid Formal Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/3/7/2b5a59d0-a076-4118-b79c-1e61a2e650ff1583539039758-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/3/7/2b5a59d0-a076-4118-b79c-1e61a2e650ff1583539039758-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/3/7/f1e67ee1-a679-4564-8273-34a4ed8270da1583539039849-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/3/7/c1639249-1715-4f5e-87e3-8130c394c0e91583539039892-4.jpg"])
    
p29.category = C2
p29.subcategory = S1
p29.save



#Women => Shirts =>H&M =>Black,White,Blue
p30=Product.new(
    name:"H&M Casual Shirt",
    brand: "H&M",
    color: "black",
    description: "Women Black Regular Fit Solid Casual Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7208127/2018/8/23/5dbc44c4-d171-4559-9944-37ce3dd1437f1535005234548-na-6341535005234394-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7208127/2018/8/23/e727e48d-6a95-4e1b-ad73-8a46efd519ab1535005234525-na-6341535005234394-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7208127/2018/8/23/cc4f38b5-b019-4045-a0a7-eaa4291755641535005234502-na-6341535005234394-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7208127/2018/8/23/71d17324-124f-4f3e-ba34-fb368f21e60f1535005234454-na-6341535005234394-5.jpg"])
p30.category = C2
p30.subcategory = S1
p30.save

p31=Product.new(
    name:"H&M Casual Shirt",
    brand: "H&M",
    color: "white",
    description: "Women White Solid Cotton Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/14/ad608ea8-73b4-4e76-a2f4-10b28bc26f2f1607929539341-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/14/357d3a5c-b09f-40da-a44b-c334d3b813361607929539398-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/14/8303660f-8962-4dce-a169-cf7e2c8fe4a51607929539475-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/14/73c1b6a1-0dcb-4788-a821-c513a73bc17c1607929539610-5.jpg"])
p31.category = C2
p31.subcategory = S1
p31.save

p32=Product.new(
    name:"H&M Formal Shirt",
    brand: "H&M",
    color: "blue",
    description: "Women BLue Stretch Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/8/81ed9fc4-1fbf-4b2a-b0db-c716c937257d1599519403804-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/8/1d5529cf-d7ed-4fbf-b3da-c71f9e9ce39b1599519403874-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/8/f5a601bf-aca3-4094-b392-25b2c319e8dc1599519404064-5.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/9/8/812d9622-0e4b-4204-91cf-f7c4929e29db1599519404005-4.jpg"])
p32.category = C2
p32.subcategory = S1
p32.save

#Women => Shirts =>John Players=>Black,White,Blue
p33=Product.new(
    name:"John Players Formal Shirt",
    brand: "John Players",
    color: "black",
    description: "Women Navy Regular Fit Solid Formal Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5567470/2018/5/15/630225d7-f6e2-43b2-b923-9e15fe8e7eda1526385767239-Van-Heusen-Woman-Women-Navy-Blue-Regular-Fit-Solid-Formal-Shirt-761526385765566-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5567470/2018/5/15/630225d7-f6e2-43b2-b923-9e15fe8e7eda1526385767239-Van-Heusen-Woman-Women-Navy-Blue-Regular-Fit-Solid-Formal-Shirt-761526385765566-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5567470/2018/5/15/214c1d4c-4927-4602-8176-6f792aae723b1526385767198-Van-Heusen-Woman-Women-Navy-Blue-Regular-Fit-Solid-Formal-Shirt-761526385765566-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5567470/2018/5/15/f0a8f53d-b3b3-4c25-a527-4f443dc34ca81526385767182-Van-Heusen-Woman-Women-Navy-Blue-Regular-Fit-Solid-Formal-Shirt-761526385765566-4.jpg"])
p33.category = C2
p33.subcategory = S1
p33.save

p34=Product.new(
    name:"John Players Formal Shirt",
    brand: "John Players",
    color: "white",
    description: "Women White Regular Fit Striped Casual Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/31/f8fb2e34-d714-471b-8a9a-3b466014e9c61609388737519-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/31/f8fb2e34-d714-471b-8a9a-3b466014e9c61609388737519-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/31/38b6512c-41fb-4702-866a-7f2e174164c61609388737637-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/12/31/c29722c8-91ae-4ac1-b3f7-88e023dea2911609388737679-4.jpg"])
p34.category = C2
p34.subcategory = S1
p34.save

p35=Product.new(
    name:"John Players Casual Shirt",
    brand: "John Players",
    color: "blue",
    description: "Women Blue Regular Fit Solid Casual Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7208092/2018/8/23/2596e16d-dbeb-4e50-8fe2-d4dfb03d58481535005147467-na-5311535005147234-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7208092/2018/8/23/3a7a8cd7-a5be-44d1-8f7e-1fc591827e121535005147434-na-5311535005147234-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7208092/2018/8/23/90f81b48-3e1e-4f41-8298-8e676f1058d91535005147410-na-5311535005147234-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7208092/2018/8/23/af342e96-f413-4053-901b-6ce2fe084cc41535005147380-na-5311535005147234-4.jpg"])
p35.category = C2
p35.subcategory = S1
p35.save


#Women => T-Shirts =>PeterEngland =>Black,White,Blue
p36=Product.new(
    name:"Peter England T-shirt",
    brand: "Peter England",
    color: "black",
    description: "Women Black Solid Polo Collar T-shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10970128/2020/1/24/f1684295-6918-49e6-a42c-3c53ae3e95001579849811963-Roadster-Women-Tshirts-4551579849810186-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10970128/2020/1/24/4726b641-415e-4ab5-b722-4cc26e9604dd1579849811917-Roadster-Women-Tshirts-4551579849810186-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10970128/2020/1/24/a8504dea-7581-4d33-9167-fd36df3a85301579849811878-Roadster-Women-Tshirts-4551579849810186-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10970128/2020/1/24/509c8c51-e7e2-46a3-a0e8-c11dc69afdc31579849811837-Roadster-Women-Tshirts-4551579849810186-4.jpg"])
    
p36.category = C2
p36.subcategory = S2
p36.save

p37=Product.new(
    name:"Peter England T-shirt",
    brand: "Peter England",
    color: "white",
    description: "Women White Solid Henley Neck T-shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9740125/2019/8/28/05139ac6-30c2-42b2-ad4d-503473907f361566973176094-Roadster-Women-Tshirts-4441566973175333-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9740125/2019/8/28/a985bca0-691b-4b44-9f5c-e2d6f03e6b7d1566973176077-Roadster-Women-Tshirts-4441566973175333-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9740125/2019/8/28/c5e9476e-424f-4390-b92f-d5316488cd131566973176063-Roadster-Women-Tshirts-4441566973175333-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9740125/2019/8/28/22a029eb-f15f-43bc-8e33-4429349a62101566973176049-Roadster-Women-Tshirts-4441566973175333-4.jpg"])
    
p37.category = C2
p37.subcategory = S2
p37.save

p38=Product.new(
    name:"Peter England T-shirt",
    brand: "Peter England",
    color: "blue",
    description: "Women Blue Boxy Fit Solid Round Neck Crop T-shirtt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11697378/2020/6/19/efc84c51-7340-403d-a612-5d7aea855c7e1592561459092-Roadster-Women-Tops-2191592561457871-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11697378/2020/6/19/22c1db1e-0b29-4a05-bb7e-ce0e7664ff581592561459044-Roadster-Women-Tops-2191592561457871-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11697378/2020/6/19/5bc72d29-2117-4160-9873-fbc646d1110f1592561458997-Roadster-Women-Tops-2191592561457871-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11697378/2020/6/19/46b42621-2bc4-4375-ad1f-762aeb86deeb1592561458898-Roadster-Women-Tops-2191592561457871-5.jpg"])
    
p38.category = C2
p38.subcategory = S2
p38.save


#Women => T-shirts =>H&M =>Black,White,Blue
p39=Product.new(
    name:"H&M Casuals",
    brand: "H&M",
    color: "black",
    description: "Women Black Solid Cotton T-shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13607132/2021/2/11/119495b1-d60a-4cac-8c18-25082ec72fa21613017627817CottonT-shirt1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13607132/2021/2/11/119495b1-d60a-4cac-8c18-25082ec72fa21613017627817CottonT-shirt1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13607132/2021/2/11/b4c3e510-5829-479f-9dc3-ef83608ae0831613017627869CottonT-shirt3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13607132/2021/2/11/766e1efb-636a-41a8-bdf7-f80eb3e9cd641613017627894CottonT-shirt4.jpg"])
p39.category = C2
p39.subcategory = S2
p39.save

p40=Product.new(
    name:"H&M Casuals",
    brand: "H&M",
    color: "white",
    description: "Women White Oversized T-Shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/17/55a5cd7b-2722-429b-8beb-7ae021150c9b1613549062559-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/17/52236937-a29d-464f-8166-7ee5c77940fc1613549062575-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/17/47eba146-193d-41c8-ae37-77a83d5850f01613549062590-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/17/772632f6-247d-4439-aaa2-b97a349fb08f1613549062620-5.jpg"])
p40.category = C2
p40.subcategory = S2
p40.save

p41=Product.new(
    name:"H&M Casuals",
    brand: "H&M",
    color: "blue",
    description: "Women Blue Oversized T-shirtt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/25/ffc96d01-0ca4-4da5-8bf5-60fcf60fbe421614243375020-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/25/0d59ea78-dc44-4b2e-a475-58f70e41d5ce1614243375036-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/25/e3fe55ef-007f-4b58-92c8-b440f406cbe71614243375054-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/25/8aaedc7f-1f5d-4bd3-8106-3a4b91acf27e1614243375086-5.jpg"])
p41.category = C2
p41.subcategory = S2
p41.save


#Women => T-Shirts =>John Players=>Black,White,Blue
p42=Product.new(
    name:"John Players T-shirt",
    brand: "John Players",
    color: "black",
    description: "Black Slub Jersey T-shirt",
    size: [3,4,5],
    price:30,
    images:["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/4/22275869-2194-4c87-bbd4-03033c1fa7531572841224221-1.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/4/d60666e3-4e08-4abb-8719-1424b319368e1572841224261-2.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/4/3e298489-c830-4d98-a6f1-43b8f04e40551572841224298-3.jpg","https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/4/d0cbdde7-992d-402d-ad71-247c4ffea6641572841224335-4.jpg"])
p42.category = C2
p42.subcategory = S2
p42.save

class Api::V1::SearchesController < Api::ApplicationController

    
    def create

    @brand = ["nike","levis","adidas"]
    @category = ["men","women","kids"]
    @sub_category = ["shirt","tshirt","jean"]
    @color= ["black","white","blue"]
    @final ={}
   
    search_fields = params[:params]

   
    
        med = search_fields.split(" ")
        print med
        med.each do |item|
            if @brand.include?(item)
                @final["brand"]=item
            elsif @category.include?(item)
                @final["category"]=item
            elsif @color.include?(item)
                @final["color"]=item
            elsif @sub_category.include?(item)
                @final["sub_category"]=item
            end
        

        end

        # puts @final["sub_category"]
        puts "*********************************************************************"
              
        puts "final is", @final
        # puts @final
        products =[]

        
        product = Product.joins(:subcategory).where("subcategories.name ILIKE?","%#{@final["sub_category"]}%")


       puts @final.key?("brand") 
       puts @final.key?("color") 
        product.each do |item|

            print item.brand, item.color
            
            # if @final.key?("brand") && @final.key?("color")
                if(item.color.downcase == @final["color"])
                    puts item
                   
                    products.push(item)
                end
                
            end
             


       
        render json:products

            
    end







end

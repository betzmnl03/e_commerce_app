class Api::V1::AddressController < Api::ApplicationController

    def create
        user = current_user
        address= Address.new address_params
        address.user = user
        address.save
       
        render(
            json: address,
            status: 200
        )
    end

    private

    def address_params
        params.require(:address).permit(:line1,:line2,:city,:province,:postal_code)
    end
end

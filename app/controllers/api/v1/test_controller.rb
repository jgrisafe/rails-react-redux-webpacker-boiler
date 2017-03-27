class Api::V1::TestController < ApplicationController

  def index
    render json: { 'data' => {
      'attributes' => {
        'test' => 'This is some test data' 
        }
      }
    }
  end
  
end
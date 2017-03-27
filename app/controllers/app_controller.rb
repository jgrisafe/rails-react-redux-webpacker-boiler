class AppController < ApplicationController
  
  def index
  end

  def api
    render json: { 'data' => ['test' => 'This is some test data'] }
  end
  
end

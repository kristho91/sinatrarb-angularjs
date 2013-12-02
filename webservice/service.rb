#
# File: service.rb
# Author: Kris Thomsen <mail@kristhomsen.dk> 2013
#

require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json/ext'

include Mongo


configure do
  conn = MongoClient.new('localhost', 27017)
  set :mongo_connection, conn
  set :mongo_db, conn.db('companies')
end


# List Companies
get '/api/companies' do
  content_type :json
  settings.mongo_db['companies'].find.to_a.to_json
end


# Details for Company
get '/api/companies/:id' do
  content_type :json
  document_by_id(params[:id]).to_json
end


# Create Company
post '/api/companies' do
  content_type :json
  new_id = settings.mongo_db['companies'].insert params
  document_by_id(new_id).to_json
end


# Update Company
put '/api/companies/:id' do
  content_type :json
  id = object_id(params[:id])
  settings.mongo_db['companies'].update({:_id => id}, params)
  document_by_id(id).to_json
end


helpers do
  def object_id(val)
    BSON::ObjectId.from_string(val)
  end
  
  def document_by_id(id)
    id = object_id(id) if String === id
    settings.mongo_db['companies'].find_one(:_id => id).to_json
  end
end

